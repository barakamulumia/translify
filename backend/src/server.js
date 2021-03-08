const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors");
const dbConfig = require("./config/db.config");
const db = require("./models");
const Role = db.role;

const URI = `mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`;

const app = express();

const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:4000"],
  "Access-Control-Expose-Headers": true,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(function (_req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

db.mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Successfully connected to MongoDb");
    initializeDb();
  })
  .catch((err) => {
    console.err("Connection err", err);
    process.exit;
  });

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/order.routes")(app);
require("./routes/client.routes")(app);
require("./routes/driver.routes")(app);
require("./routes/photos.routes")(app);

/**admin */
require("./admin/routes/client.routes")(app);
require("./admin/routes/driver.routes")(app);

app.get("/", (_req, res) => res.send("Hello World!"));

const PORT = 8080;

app.listen(PORT, () => console.log(` ${PORT}! is Live`));

function initializeDb() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "client",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("Added 'client' to roles collection");
      });

      new Role({
        name: "driver",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("Added 'driver' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}
