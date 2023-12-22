import Crud from "../../models/Crud.js";
import {deleteImageFromS3} from "../../aws/awsDelete.js";

export const deleteCrudController = async (req, res) => {
    try {
        const crud = await Crud.findById(req.params.id);
        if (crud.imageUrl) {
            const imageKey = new URL(crud.imageUrl).pathname.split("/").pop();
            await deleteImageFromS3(imageKey, "crud");
        }
        const deletedItem = await Crud.findByIdAndDelete(req.params.id);
        if (!deletedItem) res.status(404).send({message: "Item not found"});
        else res.status(200).send({message: "Item deleted successfully"});
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};
