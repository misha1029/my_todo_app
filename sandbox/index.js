/*const orderList = [
  {
    name: "Product1",
    price: 100.25,
    count: 12,
  },
  {
    name: "Product2",
    price: 653.25,
    count: 4,
  }
];

function twentyPercentDiscount (totalPrice) {
  return totalPrice * 0.2;
}

/!**
 *
 * @param {Array<object>>} order
 * @param {function} getDiscount
 *!/
function getTotalOrderPrice (order, getDiscount) {
  const totalPrice = order.reduce((sum,item) => {
    return sum+= item.price * item.count;
  }, 0);

  return totalPrice - getDiscount(totalPrice);
}

console.log( getTotalOrderPrice(orderList, twentyPercentDiscount));*/

/*// Corirovanie
function getOrderPriceWithDiscount (discountPercent, price, count) {
  const totalPrice = price *count;
  return totalPrice - totalPrice * (discountPercent /100);
}

const price1 = getOrderPriceWithDiscount(10,5437.1,3);
const price2 = getOrderPriceWithDiscount(10,143.1,1);
const price3 = getOrderPriceWithDiscount(10,599.9,5);

const price4 = getOrderPriceWithDiscount(20,699.9,5);

const result = getOrderPriceWithDiscount(10)(5437.1)(12);

function getDiscountPrice (discountPercent) {
  return (price, count) => {
    return (count) =>{
      const totalPrice = price *count;
      return totalPrice - totalPrice * (discountPercent /100);
    };
  };
}

const tenPercentDiscount = getDiscountPrice(10);

console.log(tenPercentDiscount(400,10));*/





















