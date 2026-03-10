const app = getApp();

Page({
  data: {
    cart: [],
    subtotal: 0
  },
  onShow() {
    this.syncCart();
  },
  syncCart() {
    const cart = app.globalData.cartItems || [];
    const subtotal = cart.reduce(
      (sum, entry) => sum + entry.product.price * entry.quantity,
      0
    );
    this.setData({ cart, subtotal });
  },
  removeItem(event) {
    const { id } = event.currentTarget.dataset;
    const cart = (app.globalData.cartItems || []).filter(
      (entry) => entry.product.id !== id
    );
    app.globalData.cartItems = cart;
    this.syncCart();
  },
  clearCart() {
    app.globalData.cartItems = [];
    this.syncCart();
  }
});
