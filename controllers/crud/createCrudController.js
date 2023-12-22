import upload from "../../aws/awsConfig.js";
import Crud from "../../models/Crud.js";

export const createCrudController = async (req, res) => {
    try {
        const uploadMiddleware = upload("crud");
        uploadMiddleware.single("image")(req, res, async function (err) {
            if (err) {
                return res.status(500).send("Error uploading file");
            }

            console.log(req.body)
            console.log(req.file.location)


            const {title, descr} = req.body
            if (!title || !descr) {
                return res.status(200).send({message: "One of input is not defined"});
            }
            const imageUrl = req.file ? req.file.location : null;

            const crud = {
                title,
                description: descr,
                userId: req.user.userId,
            };

            if (imageUrl) {
                crud.imageUrl = imageUrl;
            }

            const newCrud = new Crud(crud);
            await newCrud.save();
            res.status(200).send(newCrud);

        })
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};
