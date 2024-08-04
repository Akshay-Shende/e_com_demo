import { PrismaClient } from '@prisma/client';

let prisma = null;

export const connectDb = async () => {
  if (prisma) {
    return;
  }

  try {
    prisma = new PrismaClient();

    // Test the connection by running a simple query
    await prisma.$queryRaw`SELECT 1`;

    console.log("db connected...");
  } catch (error) {
    console.log("failed to connect with database");
    console.log(error);
  }
};

// Close Prisma Client connection
export const disconnectDb = async () => {
  if (prisma) {
    await prisma.$disconnect();
    prisma = null;
  }
};