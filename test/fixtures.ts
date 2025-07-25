import { PGlite } from '@electric-sql/pglite';
import { PgliteDatabase, drizzle } from 'drizzle-orm/pglite';
import { pushSchema } from 'drizzle-kit/api';
import * as schema from '../src/db/schema'

let db: PgliteDatabase<typeof schema> & {
    $client: PGlite;
}

export async function getTestDb(): Promise<PgliteDatabase<typeof schema> & {
    $client: PGlite;
}> {
    if (!db) {
        const inMemoryDbClient = new PGlite();
        const { apply } = await pushSchema(schema, drizzle(inMemoryDbClient));
        await apply();
        db = drizzle(inMemoryDbClient, { schema })
    }
    return db;
}
