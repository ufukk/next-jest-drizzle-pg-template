import * as dotenv from 'dotenv';


beforeEach(async () => {
    dotenv.config({ path: '.env.test', quiet: true });
})

afterEach(() => {
})