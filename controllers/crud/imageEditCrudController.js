import upload from "../../aws/awsConfig.js";
import Crud from "../../models/Crud.js";
import { deleteImageFromS3 } from "../../aws/awsDelete.js";

export const imageEditCrudController = async (req, res) => {
  try {
    const uploadMiddleware = upload("crud");
    uploadMiddleware.single("image")(req, res, async function (err) {
      if (err) {
        return res.status(500).send("Error uploading file");
      }

      const crud = await Crud.findById(req.params.id);
      if (crud.imageUrl) {
        const imageKey = new URL(crud.imageUrl).pathname.split("/").pop();
        await deleteImageFromS3(imageKey, "crud");
        await Crud.findByIdAndUpdate(req.params.id, { imageUrl: "" });
      }

      const imageUrl = req.file.location;

      console.log(imageUrl);
      console.log(req.params.id);

      if (!imageUrl)
        return res.status(404).send({ message: "Image is not defined" });

      const updatedData = {};

      if (imageUrl) updatedData.imageUrl = imageUrl;

      const updatedCrud = await Crud.findByIdAndUpdate(
        req.params.id,
        updatedData,
        {
          new: true,
        },
      );
      if (!updatedCrud)
        return res.status(404).send({ message: "User not found" });

      res.status(200).send({
        updatedCrud,
        message: "Crud's image is update success",
      });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
