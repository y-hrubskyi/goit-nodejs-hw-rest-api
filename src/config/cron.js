const https = require("node:https");
const { CronJob } = require("cron");

const { BACKEND_URL } = require("./env");

const job = new CronJob("*/14 * * * *", () => {
  console.log("Restarting server");

  https
    .get(BACKEND_URL + "/ping", (res) => {
      if (res.statusCode === 200) {
        console.log("Server restarted");
      } else {
        console.error(
          "Failed to restart server with status code: ",
          res.statusCode
        );
      }
    })
    .on("error", (err) => {
      console.error("Error during Restart: ", err.message);
    });
});

module.exports = {
  job,
};
