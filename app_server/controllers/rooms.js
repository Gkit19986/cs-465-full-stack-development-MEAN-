const fs = require ('fs');
const trips =JSON.parse( fs.readFileSync('./data/rooms.json','utf8'));


const travel = ( req, res)=>{
    pageTitle = process.env.npm_package_description + 'rooms' ;
    res.render('rooms', {title:'Traveler Gatewayss', rooms});

};
module.exports ={
    rooms
}