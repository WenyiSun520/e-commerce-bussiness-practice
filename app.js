import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from "express-session";
// import msIdExpress from "microsoft-identity-express";
// const appSettings = {
//   appCredentials: {
//     clientId: "bdf1626a-6684-4ab0-8c95-a3ee55589136",
//     tenantId: "f6b6dd5b-f02f-441a-99a0-162ac5060bd2",
//     clientSecret: "wXB8Q~36ICgMQF5145zc7nEu8MaaT8OtMwEqybk9",
//   },
//   authRoutes: {
//     redirect: "http://localhost:3000/redirect",
//     error: "/error",
//     unauthorized: "/unauthorized",
//   },
// };
import Redis from "ioredis";
import connectRedis from "connect-redis";
const RedisStore = connectRedis(session);

//configure redis client
let redisClient = new Redis();


import apiRouter from './routes/api/api.js'
import models from './models.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  req.models = models;
  next();
});

const oneDay = 1000 * 60 * 60 * 24;
app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: "thisisaredissecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: oneDay,
    },
  })
);


 app.use("/api", apiRouter);
// const msid = new msIdExpress.WebAppAuthClientBuilder(appSettings).build();
// app.use(msid.initialize());

// app.get("/signin", msid.signIn({ postLoginRedirect: "/" }));
// app.get("/signout", msid.signOut({ postLogoutRedirect: "/" }));
// app.get("/error", (req, res) => {
//   res.status(500).send("Error: Server error");
// });
// app.get("/unauthorized", (req, res) => {
//   res.status(401).send("Error: Unauthorized");
// });

export default app;
