import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.render("home", {
  titulo: 'Erick Castro'
}));

router.get("/acercaDe", (req, res) => res.render("acercaDe",{
}));

router.get("/contacto", (req, res) => res.render("contacto",{ 
}));

export { router };