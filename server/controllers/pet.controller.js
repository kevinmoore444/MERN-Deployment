const Pet = require("../models/pet.model")

// testApi
module.exports.testApi = (req, res) => {
    res.json({Status: 'This is a test'})
}


// addPet
module.exports.addPet = (req, res) => {
    const newPet = req.body
    Pet.create(newPet)
    .then(pet => res.json(pet))
    .catch(err => res.status(400).json(err))
}

// display allPets
module.exports.allPets = (req, res) => {
    Pet.find()
    .then(pets => res.json(pets))
    .catch(err => res.json(err))
}

// display onePet
module.exports.onePet = (req, res) => {
    const idFromParams = req.params.id
    Pet.findOne({_id: idFromParams})
    .then(onepet => res.json(onepet))
    .catch(err => res.json(err))
}

// updatePet
module.exports.updatePet = (req, res) => {
    const idfromParams = req.params.id
    const newValue = req.body
    Pet.findOneAndUpdate({_id: idfromParams}, newValue, {new: true, runValidators: true})
    .then(updatedValue => res.json(updatedValue))
    .catch(err => res.status(400).json(err))
}

// deletePet
module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
    .then(message => res.json(message))
    .catch(err => res.json(err))
}


