const {Router} = require("express");
const mongoose = require("mongoose");
const {Blog} = require("../models/Blog");
const blogRouter = Router();

blogRouter.post("/", async function (req, res) {
  try {
  } catch (error) {
    return res.status(500).send({error: error.message});
  }
});
blogRouter.get("/", async function (req, res) {
  try {
  } catch (error) {
    return res.status(500).send({error: error.message});
  }
});
blogRouter.put("/", async function (req, res) {
  try {
  } catch (error) {
    return res.status(500).send({error: error.message});
  }
});
blogRouter.patch("/", async function (req, res) {
  try {
  } catch (error) {
    return res.status(500).send({error: error.message});
  }
});
blogRouter.delete("/", async function (req, res) {
  try {
  } catch (error) {
    return res.status(500).send({error: error.message});
  }
});

module.exports = {blogRouter};
