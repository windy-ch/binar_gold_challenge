// import models
const {Item} = require("../models")

module.exports = {
    getListItem: async (filters) => {
        let options = {}
        if (typeof filters !== "undefined" || filters !== null) {
            options.where = filters
        }
        let Items = []

        // error handling
        try{
            Items = await Item.findAll(options)
        } catch (e) {
            console.log(e)
        }

        return Items
    },

    getItemByID: async (id) => {
        let Item = null
        try{
            Item =  await Item.findOne({
                where: {id: id}
            })
        } catch (e) {
            console.log(e)
        }

        return Item
    }

}