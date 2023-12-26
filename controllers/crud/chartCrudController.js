import Crud from "../../models/Crud.js";

export const chartCrudController = async (req, res) => {
    try {
        const crudsTrue = await Crud.find({ status: true });
        const crudsFalse = await Crud.find({ status: false });
        res.status(200).send({crudsTrue,crudsFalse})
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};
