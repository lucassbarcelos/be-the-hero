const express = require("express");
const OngController = require("./controllers/OngController");
const IncidentsController = require("./controllers/IncidentsController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");
const routes = express.Router();

routes.get("/users", (request, response) => {
  const params = request.query;
  console.log(params);

  return response.json({
    evento: "Semana OmniStack 11.0",
    aluno: "Lucas Barcelos"
  });
});

routes.get("/usersId/:id", (request, response) => {
  const params = request.params;
  console.log(params);

  return response.json({
    evento: "Semana OmniStack 11.0",
    aluno: "Lucas Barcelos"
  });
});

routes.post("/ongs", OngController.create);
routes.get("/ongs", OngController.index);

routes.post("/incidents", IncidentsController.create);
routes.get("/incidents", IncidentsController.index);
routes.delete("/incidents/:id", IncidentsController.delete);

routes.get("/profile", ProfileController.index);

routes.post("/session", SessionController.create);

module.exports = routes;
