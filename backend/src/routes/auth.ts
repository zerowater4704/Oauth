import express from "express";
import passport from "../config/passport";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/", session: false }),
  (req, res) => {
    if (!req.user) {
      return res.redirect("/login");
    }

    const token = jwt.sign(
      { id: (req.user as any)._id },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1 * 24 * 60 * 60 * 1000,
    });

    res.redirect(`${process.env.CLIENT_URL}/dash`);
  }
);

router.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({ user: req.user });
  }
);

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "ログアウト成功" });
});

export default router;
