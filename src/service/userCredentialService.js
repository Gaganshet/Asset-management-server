const { UserLoginModel } = require('../db/model/userCredentialModel');
const crypto = require('crypto');

const insertUserLoginData = async(loginData) => {
  const {email, loginName, password } = loginData;

  const salt = crypto.randomBytes(Math.ceil(10/2)).toString('hex').slice(0, 10);

  const prehash = crypto.createHmac('sha512', salt);
  prehash.update(password);
  const hash = prehash.digest('hex');

  console.log(UserLoginModel);

  const userLoginDetailsDao = new  UserLoginModel({
    email,
    loginName:email,
    hash,
    salt,
    create_date: new Date()
  });
  const result = await userLoginDetailsDao.save();
  return result;
}

const validatePassword = async(loginData) => {
  const {email, password } = loginData;
  const emailDetails = await UserLoginModel.findOne({ email });
  if(!emailDetails){
    console.log("The mail is present");
    return "failed";
  }

  const { salt, hash } = emailDetails;
  const preHash = crypto.createHmac('sha512', salt);
  preHash.update(password);
  const hashToValidate = preHash.digest('hex'); 

  if(hash === hashToValidate ){
    return "success";
  } else {
    return "fail";
  }
}




//Testing code remove after checking.
/*insertUserLoginData({email : 'nayanarshet5@gmail.com', loginName: 'nayana', password: 'nayana@5'});
validatePassword({email : 'nayanarshet5@gmail.com', password: 'nayana@5d'});



*
*/

module.exports = {
    insertUserLoginData
}
