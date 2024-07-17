import { PrismaClient } from '@prisma/client';
const db = new PrismaClient({ log: ['query', 'error', 'info', 'warn']})
export default db;


