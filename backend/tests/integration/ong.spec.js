const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback(); //set new db.
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      // .set('Authorization', 'id')
      .send({
        name: "TESTE",
        email: "contato@teste.com.br",
        whatsapp: "12997300508",
        city: "AA",
        uf: "AA"
      });

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(12);
  });
});
