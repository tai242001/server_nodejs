const { Author, Bag } = require("../model/model");


const authorController = {
    addauthor: async (req, res) => {
        try {
            const newAthor = new Author(req.body);
            const saveAuthor = await newAthor.save();
            res.status(200).json(saveAuthor);
        }
        catch (err) {
            res.status(500).json(err);

        }
    }

};
module.exports = authorController;