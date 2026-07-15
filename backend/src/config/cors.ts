export const allowedOrigins = [
  "http://localhost",
  "http://localhost:5173",
  process.env.VERCEL_FRONTEND_URL,
].filter((origin): origin is string => Boolean(origin));