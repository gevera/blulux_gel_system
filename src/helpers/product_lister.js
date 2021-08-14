export const mergeProductList = (prdArr) => {
  return prdArr.map((prd) => {
    const { unit_amount: price, id: price_id } = prd;
    const { id, active, name, description, images, metadata } = prd.product;
    return { price_id, id, active, name, description, images, quantity: 1, price, metadata };
  });
};