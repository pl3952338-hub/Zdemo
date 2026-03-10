const records = require('../../utils/records');

Page({
  data: {
    records: []
  },
  onShow() {
    this.load();
  },
  load() {
    records.loadRecords().then((list) => {
      this.setData({ records: list });
    });
  },
  openDetail(event) {
    const { id } = event.currentTarget.dataset;
    if (!id) return;
    wx.navigateTo({
      url: `/pages/record-detail/index?id=${id}`
    });
  }
});
