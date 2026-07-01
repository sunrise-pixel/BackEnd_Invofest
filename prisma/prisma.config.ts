import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from '@prisma/client/config'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  earlyAccess: true,
  schema: path.join(__dirname, 'prisma', 'schema.prisma'),
  migrate: {
    adapter: async () => {
      const { PrismaBetterSqlite3 } = await import('@prisma/adapter-better-sqlite3');
      return new PrismaBetterSqlite3({ url: 'file:./prisma/dev.db' });
    },
  },
});