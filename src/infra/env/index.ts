import 'dotenv/config';

import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'staging', 'production']).default('dev'),
  PORT: z.coerce.number().default(3333),
});

const validatedEnv = envSchema.safeParse(process.env);

if (validatedEnv.success === false) {
  console.log('❌ Invalid environment variable', validatedEnv.error.format());

  throw new Error('Invalid environment variable');
}

export const env = validatedEnv.data;
