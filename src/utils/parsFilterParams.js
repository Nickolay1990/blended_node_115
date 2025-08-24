export const parsCategory = (category) => {
    const isString = typeof category === 'string';
  if (!isString) return;
  const isCategory = (category) => ['books', 'electronics', 'clothing', 'other'].includes(category);

  if (isCategory(category)) return category;
};

export const parsNumber = (price) => {
const parsedNumber = Number(price);
  if (isNaN (parsedNumber)) return;
    return parsedNumber;
};

export const parsFilterParams = ({ category, minPrice, maxPrice }) => {
    const parsedCategory = parsCategory(category);
    const parsedMaxPrice = parsNumber(maxPrice);
    const parsedMinPrice = parsNumber(minPrice);

    return {
        category: parsedCategory,
        minPrice: parsedMinPrice,
        maxPrice: parsedMaxPrice
    };

};
