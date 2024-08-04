import { PrismaClient } from '@prisma/client';
import {Repository} from '../repositories/repository'

const prisma = new PrismaClient();

export const userRepository = new Repository(prisma.user);