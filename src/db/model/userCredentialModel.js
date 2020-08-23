const mongoConnector = require('../configuration');
const { connect, model } = mongoConnector;

const { userLoginSchema } = require('../schema/userCredentialSchema.js');

const UserLoginModel = model("UserLogin", userLoginSchema);


module.exports = {
    UserLoginModel
}