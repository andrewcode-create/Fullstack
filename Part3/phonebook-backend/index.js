const express = require("express");
const app = express();
const PORT = 3001;
app.use(express.json());

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  console.log("id: " + id);
  const person = persons.find((person) => {
    return person.id === id;
  });
  console.log("person: " + person);
  if (person) {
    response.json(person);
  } else {
    response.statusMessage = `Person id ${id} not found.`;
    response.status(404).end();
  }
});

app.get("/info", (request, response) => {
  response.send(
    `Phonebook has info for ${persons.length} people. <br/><br/>${Date()}`
  );
});

const generateId = () => {
  return Math.floor(Math.random() * 10000);
};

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  const body = request.body;
  /*
  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  */

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,
  };

  persons = persons.concat(person);

  response.json(persons);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`URL: http://localhost:${PORT}/`);
});
