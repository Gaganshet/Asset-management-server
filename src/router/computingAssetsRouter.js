const express = require('express');
const router = express.Router();

const computingAssetsService = require('../service/computingAssetsService.js');

router.post('/assetsData', async(req, res, next) => {
  const { parameter } = req.body;
  const assetResult = await computingAssetsService.insertComputingAssetsData(parameter, next);
  res.send(assetResult);
});

//findOne
router.get('/getSingleAssetData', async(req, res, next) => {
  const { _id } = req.query;
  const sinleAssetData = await computingAssetsService.singleComputingAssetData(_id, next);
  res.send(sinleAssetData);
});

//findById
router.get('/getAllAssetsDataById', async(req, res, next) => {
  const { _id } = req.query;
  const allProjectedAssetData = await computingAssetsService.getComputingAssetDataById(_id, next);
  res.send(allProjectedAssetData[0]);
});

//find
router.get('/getAllAssetsData', async(req, res, next) => {
  const allAssetData = await computingAssetsService.findAllComputingAssetsData(next);
  res.send(allAssetData);
});

//projection
router.get('/getAllAssetsDataByProjection', async(req, res, next) => {
  const allProjectedAssetData = await computingAssetsService.findSomeComputingAssetsData(next);
  res.send(allProjectedAssetData);
});

//updateMany
router.put('/updateAssetDataById', async(req, res, next) => {
  const { parameter } = req.body;
  const { _id } = parameter;
  const singleDataRemovedResult = await computingAssetsService.updateAssetDataById(_id);
  res.send(singleDataRemovedResult);
});

//deleteOneData
router.delete('/deleteOneData', async(req, res, next) => {
  const { parameter } = req.body;
  const { _id } = parameter;
  const allDataRemovedResult = await computingAssetsService.deleteAssetData(_id);
  res.send(allDataRemovedResult);
});

//deleteAll
router.delete('/deleteAllAssetData', async(req, res, next) => {
  const allDataRemovedResult = await computingAssetsService.deleteAll(next);
  res.send(allDataRemovedResult);
});

//delete By id
router.delete('/deleteById', async(req, res, next) => {
  const { _id } = req.body;
  const allDataRemovedResult = await computingAssetsService.deleteById(_id);
  res.send(allDataRemovedResult);
});

module.exports = router;