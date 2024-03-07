const express = require("express");
const app = express();
const PORT = 3001;
app.use(express.json());

const persons = [
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`URL: http://localhost:${PORT}/`);
});
