import Redis from 'ioredis';
import { env } from '$env/dynamic/private';

export const redis = env.REDIS_URL ? new Redis(env.REDIS_URL) : new Redis();

export async function getCachedQuery(key: string, query: () => Promise<unknown[]>): Promise<Array<unknown>> {
  if (await redis.exists(key)) {
    return JSON.parse(await redis.get(key) ?? '[]');
  } else {
    const result = await query();
    await redis.set(key, JSON.stringify(result));
    return result;
  }
}

