type RateState = {
  count: number;
  resetAt: number;
};

const store = new Map<string, RateState>();

export function consumeRateLimit(key: string, maxRequests: number, windowMs: number) {
  const now = Date.now();
  const existing = store.get(key);

  if (!existing || existing.resetAt <= now) {
    const next = { count: 1, resetAt: now + windowMs };
    store.set(key, next);
    return {
      allowed: true,
      remaining: Math.max(0, maxRequests - next.count),
      resetAt: next.resetAt,
    };
  }

  existing.count += 1;

  if (existing.count > maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: existing.resetAt,
    };
  }

  return {
    allowed: true,
    remaining: Math.max(0, maxRequests - existing.count),
    resetAt: existing.resetAt,
  };
}

export function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}
