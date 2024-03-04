/* eslint-disable no-undef */
const express = require("express");
const mongoose = require("mongoose");
const request = require("supertest");

const login = require("./login");
const { MONGODB_URI, PORT } = require("../../config/env");

const app = express();
app.use(express.json());
app.post("/api/users/login", login);

const validCredentials = {
  email: "user3@mail.com",
  password: "12345678Aa",
};

describe("POST /api/users/login", () => {
  beforeAll(() => {
    mongoose
      .connect(MONGODB_URI)
      .then(() => {
        console.log("Database connection successful");
        app.listen(PORT, () => {
          console.log("Server running. Use our API on port: 3000");
        });
      })
      .catch((err) => {
        console.log(err.message);
        process.exit(1);
      });
  });

  test("valid user & password, success login", async () => {
    const res = await request(app)
      .post("/api/users/login")
      .send(validCredentials);

    expect(res.status).toBe(200);

    expect(res.body).toHaveProperty("token");
    expect(typeof res.body.token).toBe("string");

    expect(res.body).toHaveProperty("user");
    expect(typeof res.body.user).toBe("object");

    expect(res.body.user).toHaveProperty("email");
    expect(typeof res.body.user.email).toBe("string");

    expect(res.body.user).toHaveProperty("subscription");
    expect(typeof res.body.user.subscription).toBe("string");
  });
});
