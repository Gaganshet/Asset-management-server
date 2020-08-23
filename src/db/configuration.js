const mongoConnector = require('mongoose');

const dbType = "mongodb://";
const port = 27017;
const host = "192.168.57.68";
const database = "nayana_learn";

const  dBconnection= `${dbType}${host}:${port}/${database}`;

mongoConnector.connect(dBconnection, { useNewUrlParser: true, useUnifiedTopology: true });
mongoConnector.Promise = global.Promise;

module.exports = mongoConnector;