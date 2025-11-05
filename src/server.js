import express from "express";
const app = express();

app.get("/", (_req, res) => {
    res.json({ status: "ok", service: "hello-cicd", version: "1.0.4" });
});

const port = process.env.PORT || 8080;
if (process.env.NODE_ENV !== "test") {
    app.listen(port, () => console.log(`API on :${port}`));
}

app.get("/health", (_req, res) => {
    res.json({ ok: true, ts: Date.now() });
});


export default app;
