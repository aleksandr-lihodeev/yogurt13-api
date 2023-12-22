import Crud from "../../models/Crud.js";

export const statusCrudController = async (req, res) => {
  try {
    const updatedItem = await Crud.findByIdAndUpdate(
      req.params.id,
      { status: true },
      { new: true }
    );
    if (!updatedItem) {
      res.status(404).send({ message: "Item not found" });
    } else {
      res.status(200).send(updatedItem);
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
