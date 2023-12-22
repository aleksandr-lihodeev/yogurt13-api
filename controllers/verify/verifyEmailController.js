import Auth from "../../models/Auth.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()
export const verifyEmailController = async (req, res) => {
    try {
        const {token} = req.params;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await Auth.findOneAndUpdate(
            {email: decoded.email},
            {verified: true},
            {new: true}
        );
        if (!user) {
            return res.status(404).send({message: "User not defined"});
        }

        const htmlPage = `
    <div>
      <h1>Verify success</h1>
      <a href="https://yogurt13.onrender.com/">Back to profile</a>
    </div>
    `;

        return res.status(200).send(htmlPage);
    } catch (e) {
        return res.status(500).send("Internal Server Error");
    }
};
