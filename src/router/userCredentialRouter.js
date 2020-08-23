const express = require('express');
const router = express.Router();
const userCredentialService = require('../service/userCredentialService');

router.get('/getUserLoginData', async (req, res, next) => {
  const userData = await userCredentialService.getUserLoginDetails(req, res, next);
  res.send(userData);
});

router.post('/saveLoginUserData', async (req, res, next) => {
  const loginDetails = await userCredentialService.insertUserLoginData(req.body, next);
  res.send(loginDetails);
});

module.exports = router;