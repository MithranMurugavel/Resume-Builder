import { Plus, Sparkle, X } from 'lucide-react';
import React, { useState } from 'react'
import Alert from './Alert';

const SkillSection = ({ data, onChange }) => {

    const [newSkill, setNewSkill] = useState("");
    const [isError,setIsError] = useState(false)
    const addSkill = () => {

        if(data.length>=12){
            setIsError("Max no. of skills added");
            setNewSkill("")
            return;
        }
        if (newSkill.trim() && !data.includes(newSkill.trim())) {
            onChange([...data, newSkill.trim()])
            setNewSkill("");
        }
    }

    const removeSkill = ( index ) => {
           
        onChange(data.filter((_, i) => i !== index));
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && data.length <= 12) {
            e.preventDefault();
            addSkill();
        }
    }
    return (
        <div>
            <div>
                <h2 className='flex items-center gap-2 text-lg font-semibold text-gray-900'>Skills</h2>
                <p className="text-sm text-gray-500">Add your technical and soft skills</p>
            </div>
            <div>
                <input type="text" placeholder="Enter your skills" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm mt-2 mr-1" onChange={(e) => setNewSkill(e.target.value)} value={newSkill} onKeyDown={handleKeyPress} />
                <button onClick={addSkill} disabled={!newSkill.trim} className="flex items-center justify-end mt-3 mb-3 gap-2 px-3 py-2 text-sm bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200 hover:scale-105 transition-all duration-200 ease-out disable:opacity-50 disabled:cursor-not-allowed"><Plus size={20} />Add skill</button>
            </div>
            {
                data.length > 0 ? (

                    <div className='flex flex-wrap gap-2'>
                        {
                            data.map((skill, index) => (
                                <span key={index} className='flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'>
                                    {skill}
                                    <button onClick={() => removeSkill(index)} className='ml-1 hover:bg-blue-200 rounded-full p-0.5 transition-colors' disabled={isError ? true:false}>
                                        <X size={14} />
                                    </button>
                                </span>
                            ))
                        }
                    </div>

                ) : (
                    <div className='text-center py-6 text-gray-500'>
                         <Sparkle className="w-10 h-10 mx-auto mb-2 text-gray-300"/>
                        <p>
                         No Skills added yet
                        </p>
                        <p className="text-sm">
                            Click add your skills to the resume
                        </p>
                    </div>
                )

            }
            <div className='relative mt-24 bg-blue-50 p-3 rounded-lg'>
                <p className='text-sm text-blue-800'>Add 8-12 relavent skills</p>
            </div>
             {isError && (
                <div className="fixed top-18 left-5 z-50">
                    <Alert
                        message={isError}
                        onClose={() => { setIsError("") }}/>
                       
                </div>
            )}
        </div>
    )
}

export default SkillSection
