import express from "express";

const router = express.Router();

router.post("/api/users/signout", (req, res) => {
  res.clearCookie("jwt");
  return res.status(204).json({});
});

export { router as signoutRouter };
