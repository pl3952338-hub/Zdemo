# Zdemo 微信小程序

原生微信小程序，实现扫码、拍照、数量、表单、记录保存与详情查看，所有数据存储在本地缓存，可直接使用微信开发者工具运行。

## 页面结构

- `pages/index/index`：主界面，提供扫码、拍照、数量输入和表单提交。
- `pages/records/index`：记录列表，从本地缓存读取所有已提交项，可跳转到详情。
- `pages/record-detail/index`：展示单条记录的详情（扫码结果、图片、备注等）。

## 数据持久化

`utils/storage.js` 封装 `wx.getStorage`/`wx.setStorage`，`utils/records.js` 提供记录加载与保存接口，全部通过 `zdemo_scan_records` key 维护。

## 运行

1. 打开微信开发者工具，选择 `Zdemo` 文件夹作为项目结构。
2. 使用模拟器内“扫码”/“拍照”按钮触发设备能力，填写数量，提交即可将记录写入本地。
3. 进入“记录列表”可查看历史条目，点击任意一项即可查看详情。

## 版本控制

`app.js` 负责初始化记录缓存；`app.json` 声明页面路径；`app.wxss` 定义全局可复用样式。
