// src/lib/ratelimit.ts

import { Ratelimit } from "@upstash/ratelimit";
import { redis } from "@/lib/redis";


export const ratelimit = new Ratelimit({
   redis,
   limiter: Ratelimit.slidingWindow(10, "10s"), // More aggressive for testing: 3 requests per 5 seconds
   analytics: true,
});