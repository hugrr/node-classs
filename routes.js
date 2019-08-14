


const router = require('express').Router();
const respSuccess ={
    status: "SUCCESS",
    message: " Ola k3 ase"

}


router.get('/', (request, response)=> {
    response.send('HOLA MUNDO DE NUEVO');
   
});

router.get('/peo', (request, response)=> {
    response.status(200).json(respSuccess);
   
});
router.post('/peo', (request, response)=> {
    console.log(request.body.test);

    response.send('HOLA MUNDO DE NUEVO');
   
});   
 
module.exports=router;