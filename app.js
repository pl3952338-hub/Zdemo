App({
  globalData: {
    cartItems: []
  },
  addToCart(product) {
    const cart = this.globalData.cartItems || [];
    const existing = cart.find((item) => item.product.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        product,
        quantity: 1
      });
    }
    this.globalData.cartItems = cart;
  }
});
