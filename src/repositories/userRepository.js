import { PrismaClient } from '@prisma/client';
import { Repository } from './repository';

const prisma = new PrismaClient();
export const userRepository = new Repository(prisma.user)