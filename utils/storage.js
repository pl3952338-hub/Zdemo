const STORAGE_KEY = 'zdemo_scan_records';

function getRecords() {
  return new Promise((resolve) => {
    wx.getStorage({
      key: STORAGE_KEY,
      success(res) {
        resolve(Array.isArray(res.data) ? res.data : []);
      },
      fail() {
        resolve([]);
      }
    });
  });
}

function saveRecords(records) {
  return new Promise((resolve, reject) => {
    wx.setStorage({
      key: STORAGE_KEY,
      data: records,
      success() {
        resolve(records);
      },
      fail(err) {
        reject(err);
      }
    });
  });
}

module.exports = {
  getRecords,
  saveRecords
};
