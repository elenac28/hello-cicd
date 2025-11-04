import express from "express";
const app = express();

app.get("/", (_req, res) => {
    res.json({ status: "ok", service: "hello-cicd" });
});

const port = process.env.PORT || 8080;
if (process.env.NODE_ENV !== "test") {
    app.listen(port, () => console.log(`API on :${port}`));
}

export default app;
