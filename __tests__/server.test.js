import request from "supertest";
import app from "../src/server.js";

test("GET / returns ok", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
});
