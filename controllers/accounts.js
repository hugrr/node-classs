const get = (request,Response) => {
    console.log(request,ur);
    Response.status(200).json({user: 'hugo rojas'});

};

module.exports ={
get

}
