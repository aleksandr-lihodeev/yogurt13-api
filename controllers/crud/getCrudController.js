import Crud from "../../models/Crud.js";

export const getCrudController = async (req, res) => {
  const search = req.query.search || "";
  const status = req.query.status || "";

  try {
    const query = {};

    if (search) {
      query.title = { $regex: search, $options: "i" };
    }
    if (status) {
      query.status = status;
    }

    const total = await Crud.countDocuments(query);

    const filter = query
      ? { userId: req.user.userId, ...query }
      : { userId: req.user.userId };
    const products = await Crud.find(filter);
    res.status(200).send({
      products,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server Error");
  }
};
