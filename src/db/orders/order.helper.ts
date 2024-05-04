export const QUERY_LAST_ORDER = (traderId: string) => ({
  select: {
    id: true,
    holdMode: true,
    leverage: true,
    holdSide: true,
    symbol: true,
    openPrice: true,
    closePrice: true,
    openTime: true,
    closeTime: true,
    closeAmount: true,
    marginAmount: true,
    follower: true,
  },
  where: { traderId },
  order: {
    openTime: 'DESC',
  },
});
