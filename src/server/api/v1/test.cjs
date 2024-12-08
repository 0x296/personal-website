"use strict";


module.exports = (app) => {
  app.get("/v1/test", async (req, res) => {
    try {
      res.status(200).send(Object.assign({}, results, state));
    } catch (err) {
      console.log(`failure: ${err}`);
      res.status(404).send({ error: `${err}` });
    }
  });
};
