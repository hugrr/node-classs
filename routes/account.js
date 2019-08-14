const router = require('express').Router();
const accountController = require('../controllers/accounts')

router.get('/', accountController.get);


module.exports=router;