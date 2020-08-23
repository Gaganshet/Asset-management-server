const mongoConnector = require('../configuration.js');
const { connect, Schema } = mongoConnector;

const userLoginSchema = Schema({
  email : String,
  loginName : String,
  hash: String,
  salt : String,
  create_date : { type: Date },
  update_date : { type: Date, default: Date.now }
});

module.exports = {
    userLoginSchema
}