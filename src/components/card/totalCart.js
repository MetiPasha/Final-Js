export const totalCart = (data) => {
  let totalP = data.cart.map((item) => item.quantity * item.price);
  let sum = 0;
  for (let i = 0; i < totalP.length; i++) {
    sum += totalP[i];
  }

  document.getElementById("totalPriceCart").innerText = "$" + sum;
};
