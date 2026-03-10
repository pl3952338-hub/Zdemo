const { products } = require('../../data/products');
const app = getApp();

Page({
  data: {
    product: null
  },
  onLoad(options) {
    const product = products.find((item) => item.id === options.id);
    if (product) {
      this.setData({ product });
    }
  },
  addToCart() {
    const { product } = this.data;
    if (product) {
      app.addToCart(product);
      wx.showToast({
        title: '已加入购物车',
        icon: 'success'
      });
    }
  }
});
