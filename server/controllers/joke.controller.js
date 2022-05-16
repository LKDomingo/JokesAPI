const Joke = require("../models/joke.model");//import the model so tha thte controller knows how to talk to the databas to query the database

module.exports.sayHello = (req, res) => {
    res.json({ msg: "hello JokeAPI test again" });
}

//find all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => {
            res.json({ results: allJokes });
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}


//find one quote
module.exports.findOneJoke = (req, res) => {
    console.log('----------finding one joke----------');
    Joke.find({ _id: req.params.id })
        .then(oneJoke => {
            res.json({ results: oneJoke })
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}


//create a joke
module.exports.createJoke = (req, res) => {
    //req.body represents form information
    Joke.create(req.body)
        .then(newJoke => {
            res.json({ results: newJoke })
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}


//update a joke
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id }, //specify which quote to update
        req.body, //specify the form information to update the quote with 
        { new: true, runValidators: true }  //make sure we have new content and validate it
    )
        .then(updatedJoke => {
            res.json({ results: updatedJoke });
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}


//delete a joke
// module.exports.deleteJoke = (req, res) => {
//     console.log('----------deleting joke----------');
//     Joke.deleteOne({ _id: req.params.id })
//         .then(deletedJoke => {
//             console.log('got the deleted joke')
//             res.json({ results: deletedJoke })
//         })
//         .catch(err => {
//             res.json({ msg: "Something went wrong", error: err })
//         })
// }

module.exports.deleteJoke = (req, res) => {
    console.log('----------DELETING one joke----------');
    console.log(req.params.id);
    Joke.findByIdAndDelete({ _id: req.params.id })
        .then(deletedJoke => {
            res.json({ results: deletedJoke })
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}
