
//controller for creating a resume data
//POST:/api/resume/create

import Resume from "../models/Resume";

export const createResume = async (req, res) => {

    try {
        const userId = req.userId;
        const { title } = req.body;

        const newResume = await Resume.create({ userId, title })

        return res.status(200).json({
            message: "Resume data created successfully"
        })

    } catch (error) {
        return res.status(400).json({ message: "Error occured in Resume data creation" })
    }
}

//controller for delete a resume data
//DELETE://api/resume/delete

export const deleteResume = async (req, res) => {

    try {
        const userId = req.userId;
        const { resumeId } = req.params;

        await Resume.findOneAndDelete({ userId, _id: resumeId });
        return res.status(200).json({
            message: "Resume data created successfully"
        })

    } catch (error) {
        return res.status(400).json({ message: "Error occured in Resume data creation" })
    }
}

export const getResumeById = async (req, res) => {

    try {
        const userId = req.userId;
        const { resumeId } = req.params;

        const resume = await Resume.findOne({ userId, _id: resumeId })

        if (!resume) {
            return res.status(404).json({
                message: "Resume not found"
            })
        }

        resume.__v = undefined
        resume.createdAt = undefined;
        resume.updateAt = undefined;
        return res.status(200).json({
            message: "Resume data found",
            data: resume
        })

    } catch (error) {
        return res.status(400).json({ message: "Error occured in get Resume data by id" })
    }
}

export const getPublicResumeById = async (req, res) => {

    try {
        const { resumeId } = req.params;
        const resume = await Resume.findOne({ public: true, _id: resumeId })

        if (!resume) {
            return res.status(404).json({ message: "Resume not found" })
        }
        return res.status(200).json({
            message: "Resume data found",
            data: resume
        })

    } catch (error) {
        return res.status(400).json({ message: "Error occured in Resume data availability" })
    }
}

//controller for updating a resume
//PUT: /api /resume/update

export const updateResume = async (req, res) => {
    try {
        const userId = req.userId;
        const { resumeId, resume, rmvBackground } = req.body;

        const image = req.file;

        let resumeDataCopy = JSON.parse(resume);

       const data= await Resume.findByIdAndUpdate({userId,_id:resumeId},resumeDataCopy,{new:true});

       return res.status(200).json({
        message:"Saved successfully",
        data
       })
    }
    catch (error) {
        return res.status(400).json({ message: "Error occured in updation of Resume data" })
    }
}

