const { computingAssetsModel } = require('../db/model/computingAssetsModel.js');
const crypto = require('crypto');

//1.save operation
const insertComputingAssetsData = async(assetsData) => {
  console.log('started');
  const { type, componentName, serialId, purchasedDate, warrantyExpDate} = assetsData;

  const computingAssetsDao = new computingAssetsModel({
    type,
    componentName,
    serialId,
    purchasedDate,
    warrantyExpDate
  });
//const computingAssetsDao = new computingAssetsModel(assetsData);
  console.log(computingAssetsDao);
  const savedResults = await computingAssetsDao.save();
  return savedResults;
}

//2.findOne operation
const singleComputingAssetData = async (_id) => {
  const singleData = await computingAssetsModel.findOne({ _id});
  console.log(singleData);
  return singleData;
}

const getComputingAssetDataById = async (_id) => {
  const singleData = await computingAssetsModel.findById( _id );
  console.log(singleData);
  return singleData;
}

//3.find all Operation
const findAllComputingAssetsData = async() => {
  const allData = await computingAssetsModel.find();
  return allData;
}


//4.find some by using projection operation
const findSomeComputingAssetsData = async() => {
  const projection = {type:1, componentName: 1};
  const allData = await computingAssetsModel.find({}, projection);
  console.log(allData);
  return allData;
}

//update operation
const updateAssetDataById = async( parameter ) => {
  const { _id, dataToUpdate } = parameter;
  const filterCondition = { _id };
  const updateParam = { $set: dataToUpdate};
  const dataUpdatedById = await computingAssetsModel.updateMany(filterCondition, updateParam);
  return dataUpdatedById;
}

//6.delete one operation
const deleteAssetData = async(toBeDeletedData) =>{
  const deltedData = await computingAssetsModel.deleteOne(toBeDeletedData);
  console.log(deltedData);
  
  const finalResult = await findAllComputingAssetsData();
  return finalResult
}

//7 Delete Many
const deleteAll = async() => {
  const data =  await computingAssetsModel.deleteMany();
  console.log(data);
  return data;
}

//deleteById and return remaining
const deleteById = async(_id) => {
  console.log('idddddddddd',_id);
  const data = await computingAssetsModel.findByIdAndRemove({_id});
  console.log('dataaaaaaaaaaaaaaa',data);
  const allDataAfterDeleting = await findAllComputingAssetsData();
  console.log('allDataAfterDeletinggg',allDataAfterDeleting);
  return allDataAfterDeleting;
}

module.exports = {
    insertComputingAssetsData,
    singleComputingAssetData,
    findAllComputingAssetsData,
    findSomeComputingAssetsData,
    deleteAssetData,
    deleteAll,
    updateAssetDataById,
    getComputingAssetDataById,
    deleteById
}

//Testing code to test this whether it works or not

//1
//const purchasedDate = new Date();
//const warrantyExpDate = new Date();
//insertComputingAssetsData({type:'keyboard', componentName:'keyboard', serialId:'keyboard',purchasedDate, warrantyExpDate });

//2
//find operation
//singleComputingAssetData({ serialId : 'moues1'});

//3
//find operation
//findAllComputingAssetsData();

//4
//findSomeComputingAssetsData();

//6
//deleteAssetData({ type : 'keyboard', serialId :'keyboard'});

//7
//deleteAll();

//updateAssetDataById('5dca96d0b06b5029608ecd0f', {componentName:'change the name'} );

//8
//getComputingAssetDataById('5dcb8ef6cc00b127b42c23ac');

//9
//deleteById('5dcaa427cb55e825ecacc27d');