import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

import { Hono } from "hono";
import { handle } from "hono/vercel";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
// import authors from "./authors";
// import books from "./books";
import accounts from "./accounts";
import { HTTPException } from "hono/http-exception";
export const runtime = "edge";

// app.get("/hello", clerkMiddleware(), (c) => {
//   const auth = getAuth(c);
//   if (!auth?.userId) {
//     return c.json({ error: "unauthorized" });
//   }
//   return c.json({
//     message: "Hello Next.js!",
//   });
// });

// app.route("/authors", authors);
// app.route("/books", books);

// app.get("/hello", (c) => {
//   return c.json({ hello: "World" });
// });
const app = new Hono().basePath("/api");

//on error handling for type safety

app.onError((err, c) => {
  if (err instanceof HTTPException) {
    return err.getResponse();
  }
  return c.json({ error: "Internal Error" });
});

const routes = app.route("/accounts", accounts);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
