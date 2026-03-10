const records = require('./utils/records');

App({
  globalData: {
    records: []
  },
  onLaunch() {
    records.loadRecords().then((stored) => {
      this.globalData.records = stored;
    });
  },
  refreshRecords(callback) {
    records.loadRecords().then((stored) => {
      this.globalData.records = stored;
      if (typeof callback === 'function') {
        callback(stored);
      }
    });
  }
});
