import { PrismaClient } from '@prisma/client';
import {Repository} from './repository'

const prisma = new PrismaClient();

export const productRepository = new Repository(prisma.product);