import { Briefcase, Plus, Sparkles, Trash, Trash2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Alert from './Alert';

const Experience = ({ data, onChange }) => {

    const [isError,setIsError] = useState(false);
    const addExperience = () => {
         if (data.length >= 3) {
        setIsError("Max Experience added");
        return;
    }
        const experience = {
            company: "",
            position: "",
            start_date: "",
            end_date: "",
            description: "",
            is_current: ""
        };
        onChange([...data, experience]);
    }
    // console.log(data);
    const removeExperience = (index) => {
        const updated = data.filter((_, ind) => ind !== index);
        onChange(updated);
    }

    const updateExperience = (index, field, value) => {
        const updated = [...data];
        updated[index] = { ...updated[index], [field]: value };
        onChange(updated)
    }

    return (
        <div>
            <div className='flex items-center justify-between'>
                <div>
                    <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'>Experience</h3>
                    <p className='text-sm text-gray-500'>Add your job experience</p>
                </div>
                <button onClick={addExperience} className={`flex items-center gap-2 px-3 py-2 text-sm text-purple-700 rounded-md transition-all duration-200 ease-out ${data.length > 2 ? "text-slate-600 bg-gray-300":" bg-purple-100  hover:bg-purple-200 hover:scale-105"}`}>
                    <Plus className="size-4" />
                    Add Experience
                </button>
            </div>
            {isError && (
              <div className="fixed bottom-5 right-5 z-50">
                <Alert
                  message={isError}
                  onClose={()=>{setIsError("")}}
                />
              </div>
            )}
            {
                 data.length == 0 ? (
                    <div className="text-center py-8 text-gray-400">
                        <Briefcase className="w-12 h-8 mx-auto mb-1 text-gray-300" />
                        <p>No experience added </p>
                        <p className='text-sm'>Click "Add Experience" to get started.</p>
                    </div>
                ) : (
                    <div className='mt-8 space-y-4'>
                        {
                            data.map((exp, ind) => (
                                <div key={ind} className='p-2 border border-gray-200 rounded-lg space-y-3'>
                                    <div className='flex justify-between items-start'>
                                        <h4>Experience {ind + 1}</h4>
                                        <button type="button" onClick={() => removeExperience(ind)} className="text-red-400 hover:text-red-600 border p-1 rounded-md mt-0.5 hover:scale-110 hover:shadow-md transition">
                                            <Trash2 className='size-3 
                                            transition-colors' />
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 ">
                                        <input value={exp.company || ""} type="text" onChange={(e) => updateExperience(ind, "company", e.target.value)} className=" border-2 border-gray-300 px-3 py-2 text-sm rounded-md" placeholder='Conpany Name' />

                                        <input value={exp.position || ""} onChange={(e) => updateExperience(ind, "position", e.target.value)} type="text" placeholder="Job Title" className=" border-2 border-gray-300 px-3 py-2 text-sm rounded-md" />

                                        <input value={exp.start_date || ""} onChange={(e) => updateExperience(ind, "start_date", e.target.value)} type="month" className=" border-2 border-gray-300 px-3 py-2 text-sm rounded-md" />

                                        <input value={exp.end_date || ""} onChange={(e) => updateExperience(ind, "end_date", e.target.value)} type="month" className=" border-2 border-gray-300 px-3 py-2 text-sm rounded-md disabled:bg-gray-100" disabled={exp.is_current} />
                                    </div>
                                    <label className={` flex gap-2 text-sm ${exp.is_current ? "" : "text-gray-400"}`}>
                                        <input type="checkbox" checked={exp.is_current || false} onChange={(e) => { updateExperience(ind, "is_current", e.target.checked ? true : false); }} /> <span >Current employee</span>
                                    </label>
                                    <div className='space-y-2'>
                                        <div className='flex items-center justify-between ml-1.5'>
                                            <label className='text-sm font-medium text-gray-700'>Job Description</label>
                                            <button className="flex items-center gap-2 px-3 py-2  text-sm bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200 hover:scale-105 transition-all duration-200 ease-out cursor-pointer"><Sparkles size={18} />AI Enhancer</button>
                                        </div>
                                        <textarea onChange={(e) =>
                                            updateExperience(ind, "description", e.target.value)} value={exp.description || ""} className="w-full h-42 text-sm px-3 border-2 border-gray-300 py-2 rounded-lg resize-none" placeholder="Describe your key responsibility and achievements..." />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Experience
