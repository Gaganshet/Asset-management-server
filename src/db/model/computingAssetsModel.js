const mongoConnector = require('../configuration.js');
const { connect, model } = mongoConnector;

const { computingAssetsSchema } = require('../schema/computingAssetsSchema.js');

const computingAssetsModel = model('computingAssets', computingAssetsSchema );

module.exports = {
    computingAssetsModel 
}