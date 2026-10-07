import User from "../models/User.js";
import jwt from "jsonwebtoken"

const generateToken = (userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_KEY, { expiresIn: '3d' })
    return token;
}
// controller for user regestration
//Method:POST api/users/register
export const registerUser = async (req, res) => {

    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Missing details",
                data: req.body
            })
        }

        const check = await User.findOne({ email });

        if (check) {
            return res.status(400).json({
                message: "User already exist",
                data: check
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, password: hashedPassword });

        const token = generateToken(newUser._id);
        newUser.password = undefined;

        return res.status(201).json({ message: "User created", token, user: newUser })
    } catch (error) {

        return res.status(400).json({
            message: "Error occured in registration"
        })

    }
}

// controller for user login
//Method:POST api/users/login

export const loginUser = async (req,res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Missing details",
                data: req.body
            })
        }

        const check = await User.findOne({ email });

        if (!check) {
            return res.status(400).json({
                message: "Invalid email or password",
                data: check
            })
        }

        if(!check.comparePassword(password)){
            return res.status(400).json({message:"Invalid email or password"})
        }

        const token = generateToken(check._id);
        check.password = undefined;

        return res.status(200).json({ message: "Login successful", token, user: check })
    } catch (error) {

        return res.status(400).json({
            message: "Error occured in registration"
        })

    }
}

// controller for user data by id
//Method:GET api/users/data

export const getUserById = async (req,res) => {
    try {
        
        const userId = req.userId;

        const data = await User.findById(userId);

        if(!user){
            return res.status(404).json({
                message:"User not found",
                data:this.data
            })
        }

        data.password = undefined;

        return res.status(200).json({
            message:"User exist",
            data:this.data
        })
    } catch (error) {

        return res.status(400).json({
            message: "Error occured in get data by id"
        })

    }
}