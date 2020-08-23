const mongoConnector = require('../configuration.js');
const {connect, Schema } = mongoConnector;

const computingAssetsSchema = Schema({
  type : String,
  componentName : String,
  serialId : String,
  purchasedDate : { type : Date },
  warrantyExpDate : { type : Date }
});

module.exports = {
    computingAssetsSchema
}