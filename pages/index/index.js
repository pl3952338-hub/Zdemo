const records = require('../../utils/records');

const initialForm = {
  productName: '',
  quantity: '1',
  notes: '',
  scannedCode: '',
  photo: ''
};

Page({
  data: {
    form: { ...initialForm },
    submitting: false,
    timestamp: ''
  },
  onLoad() {
    this.setData({
      timestamp: new Date().toLocaleString()
    });
  },
  handleInput(event) {
    const { field } = event.currentTarget.dataset;
    const value = event.detail.value || '';
    this.setData({
      [`form.${field}`]: value
    });
  },
  handleScan() {
    const page = this;
    wx.scanCode({
      onlyFromCamera: false,
      success(res) {
        page.setData({
          'form.scannedCode': res.result || res.path || ''
        });
      },
      fail() {
        wx.showToast({
          title: '扫码取消',
          icon: 'none'
        });
      }
    });
  },
  takePhoto() {
    const page = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['camera'],
      success(res) {
        page.setData({
          'form.photo': res.tempFilePaths[0]
        });
      },
      fail() {
        wx.showToast({
          title: '拍照取消',
          icon: 'none'
        });
      }
    });
  },
  gotoRecords() {
    wx.navigateTo({
      url: '/pages/records/index'
    });
  },
  handleSubmit() {
    const { form } = this.data;
    if (!form.productName.trim()) {
      wx.showToast({
        title: '请输入产品名称',
        icon: 'none'
      });
      return;
    }
    const quantity = parseInt(form.quantity, 10);
    if (Number.isNaN(quantity) || quantity <= 0) {
      wx.showToast({
        title: '请输入有效数量',
        icon: 'none'
      });
      return;
    }
    this.setData({ submitting: true });
    const payload = {
      productName: form.productName.trim(),
      quantity,
      notes: form.notes.trim(),
      scannedCode: form.scannedCode,
      photo: form.photo
    };
    records
      .addRecord(payload)
      .then(() => {
        wx.showToast({
          title: '记录保存成功',
          icon: 'success'
        });
        this.resetForm();
      })
      .catch(() => {
        wx.showToast({
          title: '本地保存失败',
          icon: 'none'
        });
      })
      .finally(() => {
        this.setData({ submitting: false });
      });
  },
  resetForm() {
    this.setData({
      form: { ...initialForm },
      timestamp: new Date().toLocaleString()
    });
  }
});
