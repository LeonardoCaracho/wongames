"use strict";

module.exports = {
  populate: async (ctx) => {
    console.log("starting to populate...");
    await strapi.services.game.populate();
    ctx.send("Finished populating");
  },
};
