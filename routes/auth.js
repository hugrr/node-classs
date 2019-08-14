


const router = require('express').Router();


router.post('/token', (request, response)=> {
    console.log(request.url);
    response.status(200).json({token:'xxxxx-xxxx-xxxx-xxxx'});
   
});

module.exports=router;