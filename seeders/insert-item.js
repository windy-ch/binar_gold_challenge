module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Items", [
            {
                name: "Kecap",
                category: "bahan makanan",
                price: 10000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Bedak",
                category: "Kecantikan",
                price: 125000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Kamper",
                category: "Rumah Tangga",
                price: 5000,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ])
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Items", null, {})
    }
}