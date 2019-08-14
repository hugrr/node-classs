const get = (request,res) => {
    console.log(request,url);
    res.status(200).json({token: ''});
};

const postoken =( req,res)=> {
console.log(req,url);
res.status(200).json({token: 'xxxxx-xxxx-xxxx-xxxx'});


};
module.exports ={


    get,
    postoken
}