import {prisma} from "./lib/prisma";

async function main() {
  await prisma.history.upsert({
    where: {id: 1},
    update: {},
    create: {
      id: 1,
      date: new Date("2023-01-01"),
      score: 4000,
    }
  })
  await prisma.history.upsert({
    where: {id: 2},
    update: {},
    create: {
      id: 2,
      date: new Date("2023-02-01"),
      score: 8000,
    }
  })
  await prisma.history.upsert({
    where: {id: 3},
    update: {},
    create: {
      id: 3,
      date: new Date("2023-03-01"),
      score: 2000,
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
