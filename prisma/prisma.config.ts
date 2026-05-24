import path from 'path';
import { defineConfig } from '@prisma/client/config';

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