require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const Person = require('./models/person');

app.use(bodyParser.json());
// app.use(morg an("tiny"));
morgan.token("body", (req, res) => {
  return JSON.stringify(req.body);
});
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);
app.use(cors());
app.use(express.static("build"));

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4
  }
];

app.get("/api/persons", (req, res) => {
  Person.find({}).then(persons => {
    console.log(persons);
    res.json(persons)
  })
});

app.get("/info", (req, res) => {
  Person.find({}).then(persons => {    
    res.send(
      `<div> 
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${new Date()}</p>
      </div>`
    );
  });
});

app.get("/api/persons/:id", (req, res, next) => {
  Person.findById(req.params.id).then(person => {
    if (person) {
      res.json(person.toJSON());
    } else {
      res.status(204).end();
    }
  })
  .catch(error => next(error));
});

app.delete("/api/persons/:id", (req, res) => {
  Person.findByIdAndRemove(req.params.id)
    .then(person => {
      res.status(204).end();
    })
    .catch(error => next(error));
});

app.post("/api/persons", (req, res) => {
  const body = req.body;
  
  if (!body.name || !body.number) {
    return res.status(400).json({
      error: "name missing"
    });
  }

  const duplicate = persons.filter(person => person.name === body.name);

  if (duplicate.length === 1) {
    return res.status(400).json({
      error: "name must be unique"
    });
  }

  const person = new Person({
    name: body.name,
    number: body.number
  });

  person.save().then(savedPerson => {
    res.json(savedPerson.toJSON())
  });
});

app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body;
  
  const person = {
    name: body.name,
    number: body.number
  }

  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(updatePerson =>  {
      res.json(updatePerson.toJSON());
    })
    .catch(error => next(error))
})

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint);

const errorHandler = (error, req, res, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind == 'ObjectId') {
    return res.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));