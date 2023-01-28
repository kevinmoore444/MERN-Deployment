const PetController = require('../controllers/pet.controller')

module.exports = (app) => {
    // Test
    app.get('/api/test', PetController.testApi)
    
    // Create One
    app.post("/api/pets", PetController.addPet)

    // Display All
    app.get("/api/pets", PetController.allPets)

    // Display One
    app.get("/api/pet/:id", PetController.onePet)
    
    // Update One
    app.put("/api/pet/:id", PetController.updatePet)

    // Delete One
    app.delete("/api/pet/:id", PetController.deletePet)

}