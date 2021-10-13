import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const startServer = async () => {
  // NOTE example of creating user with prisma
  // await prisma.user.create({
  //   data: {
  //     username: "fpolica92",
  //     email: "fabricio91@joinlincoln.org",
  //     password: "chloe1234",
  //     name: "fabricio Policarpo",
  //     recipes: {
  //       create: {
  //         name: "Pizza",
  //         description:
  //           "Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven. The resulting dish is called pizza and is often served with tomato sauce when served hot. A pizza topped with basil may be called pesto pizza.",
  //       },
  //     },
  //   },
  // });
  // await prisma.user.findMany();
};

startServer();
