const storage = require('./storage');

function loadRecords() {
  return storage.getRecords();
}

function addRecord(payload) {
  const entry = {
    id: `rec-${Date.now()}`,
    createdAt: new Date().toISOString(),
    ...payload
  };
  return loadRecords().then((existing) => {
    const next = [entry, ...existing];
    return storage.saveRecords(next).then(() => entry);
  });
}

function findRecordById(id) {
  return loadRecords().then((list) => list.find((item) => item.id === id) || null);
}

module.exports = {
  loadRecords,
  addRecord,
  findRecordById
};
