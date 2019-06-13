const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

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
  res.json(persons);
});

app.get("/info", (req, res) => {
  res.send(
    `<div> 
      <p>Phonebook has info for ${persons.length} people</p>
      <p>${new Date()}</p>
    </div>`
  );
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(person => person.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter(person => person.id !== id);
  console.log(persons);

  res.status(204).end();
});

app.post("/api/persons", (req, res) => {
  const body = req.body;

  const person = {
    name: body.name,
    number: body.number,
    id: Math.floor(Math.random() * 1000000)
  };
  console.log(person);

  persons = persons.concat(person);
  res.json(person);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
