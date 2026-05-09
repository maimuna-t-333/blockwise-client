export const formatPrice = (amount: number): string => {
  return `৳${amount.toLocaleString()}`;
};

export const calculateDiscount = (price: number, discountPercent: number): number => {
  return price - (price * discountPercent / 100);
};