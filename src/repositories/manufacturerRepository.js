import { PrismaClient } from '@prisma/client';
import {Repository} from './repository'

const prisma = new PrismaClient();

export const manufacturerRepository = new Repository(prisma.manufacturer);
