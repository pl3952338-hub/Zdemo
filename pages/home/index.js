const { products } = require('../../data/products');

Page({
  data: {
    hero: {
      title: 'Zdemo 演示小程序',
      subtitle: '原生框架 + 购物流程演示'
    },
    spotlight: products.slice(0, 2),
    overview: [
      '精选商品推荐',
      '购物车实时同步',
      '原生视图与导航'
    ]
  },
  gotoProductList() {
    wx.navigateTo({
      url: '/pages/product-list/index'
    });
  },
  gotoCart() {
    wx.navigateTo({
      url: '/pages/cart/index'
    });
  },
  openDetail(event) {
    const { id } = event.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/product-detail/index?id=${id}`
    });
  }
});
