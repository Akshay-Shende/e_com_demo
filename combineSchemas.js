const fs = require('fs');
const path = require('path');

const modelDir = path.join(__dirname, 'prisma', 'models');
const schemaPath = path.join(__dirname, 'prisma', 'schema.prisma');

const modelFiles = fs.readdirSync(modelDir).filter(file => file.endsWith('.prisma'));

const combinedSchema = modelFiles.map(file => {
  const filePath = path.join(modelDir, file);
  return fs.readFileSync(filePath, 'utf-8');
}).join('\n\n');

const baseSchema = `
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

${combinedSchema}
`;

fs.writeFileSync(schemaPath, baseSchema);
console.log('Combined schema written to prisma/schema.prisma');
