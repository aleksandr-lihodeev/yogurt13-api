import {model, Schema} from "mongoose";

const CrudSchema = new Schema(
    {
        title: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        status: {
            type: Boolean,
            default: false,
            require: true,
        },
        imageUrl: {
            type: String,
            required: false,
        },

        userId: {
            type: Schema.Types.ObjectId,
            ref: "Register",
            require: true,
        },
    },
    {timestamps: true}
);
export default model("Crud", CrudSchema);
