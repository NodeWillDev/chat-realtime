import express, { Express } from "express";

class App {

  public express: Express;

  constructor() {
    this.express = express();
    this.init();
  }

  init() {
    this.express.use(express.json());
  }
}

export default new App().express;