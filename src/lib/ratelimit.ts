// src/lib/ratelimit.ts

import { Ratelimit } from "@upstash/ratelimit";
import { redis } from "@/lib/redis";

// Environment-specific rate limiting configuration
const isProduction = process.env.NODE_ENV === 'production';

// Production: 10 requests per 10 seconds (more permissive for real users)
// Testing/Development: 20 requests per 10 seconds (more permissive for development)
const requests = isProduction ? 10 : 20;
const window = isProduction ? "10s" : "10s";

export const ratelimit = new Ratelimit({
   redis,
   limiter: Ratelimit.slidingWindow(requests, window),
   analytics: true,
});