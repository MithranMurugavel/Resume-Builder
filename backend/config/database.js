import mongoose from "mongoose"

const connectDB = async () => {

    try {
        mongoose.connection.on("connected", () => {
            console.log("Database connection is established")
        })

        let mongodbURI = process.env.MONGODB_URI;
        const projectName = "resume-builder"
        if (!mongodbURI) {
            throw new Error("MONGODB_URI environment");
        }

        if (mongodbURI) {
        await mongoose.connect(`${mongodbURI}/${projectName}`)
        console.log("mongodb connection successful");
        }
    } catch (error) {
        console.log(error);
    }
}

export {connectDB};