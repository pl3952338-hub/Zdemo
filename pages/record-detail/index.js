const records = require('../../utils/records');

Page({
  data: {
    record: null
  },
  onLoad(options) {
    if (!options.id) return;
    records.findRecordById(options.id).then((entry) => {
      this.setData({
        record: entry
      });
    });
  }
});
