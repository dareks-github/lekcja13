// router

import express from 'express';
const router = express.Router();

//funkcje wywoływane w pliku kontrolera

import controller from "./controller.js"

router.get("/", (req, res) => controller.start(req, res))
router.get("/add", () => controller.add(Math.random() * 10))
router.get("/delete/:id", (req, res) => controller.delete(req.params.id))
router.get("/all", () => console.log(controller.all()))
router.get("/length", () => console.log(controller.length()))

export default router;