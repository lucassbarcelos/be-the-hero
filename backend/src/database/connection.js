const knex = require("knex");
const configuration = require("../../knexfile");

const connetion = knex(configuration.development);

module.exports = connetion;
