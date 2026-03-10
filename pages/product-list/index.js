const { products } = require('../../data/products');
const app = getApp();

Page({
  data: {
    products
  },
  openDetail(event) {
    const { id } = event.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/product-detail/index?id=${id}`
    });
  },
  addToCart(event) {
    const { id } = event.currentTarget.dataset;
    const product = products.find((item) => item.id === id);
    if (product) {
      app.addToCart(product);
      wx.showToast({
        title: '已加入购物车',
        icon: 'success'
      });
    }
  }
});
