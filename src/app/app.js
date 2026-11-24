const e = require("express");
const app = e();
const route = require("../routes/app_route");

app.use(
  e.json({
    limit: "10Kb",
  }),
);

app.get("/health", async (req, res) => {
  res.status(201).json({ message: "working fine", success: true });
});

app.use("/api/v2", route);

app.use(async (req, res) => {
  res.status(404).json({
    message: `${req.originalUrl} not found`,
    success: false,
  });
});

module.exports = app;
