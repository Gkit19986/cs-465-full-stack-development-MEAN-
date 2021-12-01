const mongoose = require('mongoose'); //.set('debug', true);
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
    console.log('tripsList')
    // return res
    // .status(200)
    // .json([
    //     {
    //         "code":"GALR210214",
    //         "name":"Gale Reef",
    //         "length":" 4 nights/ 5 days",
    //         "start": "2021-02-14T08:00:00z",
    //         "resort":"Emerald Bay, 3 stars",
    //         "perPerson": "799.99",
    //         "image": "reef1.jpg",
    //         "description":"<p>Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida. Vestibulum sit amet porttitor odio. Nulla facilisi. Fusce at pretium felis. </p>"
            
    //     },{
    //         "code":"DAWR210315",
    //        "name":"Dawson's Reef",
    //        "length":" 4 nights/ 5 days",
    //        "start": "2021-03-15T08:00:00z",
    //        "resort":"Blue Lagoon, 4 stars",
    //        "perPerson": "1199.99",
    //        "image":"reef2.jpg",
    //        "description":"<p>Integer magna leo, posuere et dignissim vitae, porttitor at odio. Pellentesque a metus nec magna placerat volutpat. Nunc nisi mi, elementum sit amet aliquet quis, tristique quis nisl. Curabitur odio lacus, blandit ut hendrerit </p> "
    //     },
    //     {
    //         "code":"CLAR210621",
    //         "name":"Claire Reef",
    //         "length":" 4 nights/ 5 days",
    //        "start": "2021-06-21T08:00:00z",
    //        "resort":"Coral Sands, 5 stars",
    //        "perPerson": "1999.99",
    //         "image":"reef3.jpg",
    //         "description":"<p>Vulputate eget libero. In hac habitasse platea dictumst. Integer purus justo, egestas eu consectetur eu, cursus in tortor. Quisque nec nunc ac mi ultrices iaculis. </p> "
    //     }]);
    Model
        .find({}) // empty filter for all
        .exec((err, trips) => {
            console.log('mongo trips',err, trips);
            if (!trips) {
                return res
                    .status(404)
                    .json({ "message": "trips not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trips);
            }
        });
};

// GET: /trips:tripCode - returns a single trip
const tripsFindByCode = async (req, res) => {
                    return res
                    .status(200)
                    .json({
                        "1":{
                            "code":"GALR210214",
                            "name":"Gale Reef",
                            "length":" 4 nights/ 5 days",
                            "start": "2021-02-14T08:00:00z",
                            "resort":"Emerald Bay, 3 stars",
                            "perPerson": "799.99",
                            "image": "reef1.jpg",
                            "description":"<p>Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida. Vestibulum sit amet porttitor odio. Nulla facilisi. Fusce at pretium felis. </p>"
                            
                        }});
    // Model
    //     .find({ 'code': req.params.tripCode })
    //     .exec((err, trips) => {
    //         if (!trips) {
    //             return res
    //                 .status(404)
    //                 .json({ "message": "trip not found" });
    //         } else if (err) {
    //             return res
    //                 .status(404)
    //                 .json(err);
    //         } else {
    //             return res
    //                 .status(200)
    //                 .json(trips);
    //         }
    //     });
};

module.exports = {
    tripsList,
    tripsFindByCode
};