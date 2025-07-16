// testConnection.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log("✅ Conexão com o banco de dados estabelecida com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao conectar ao banco de dados:");
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
