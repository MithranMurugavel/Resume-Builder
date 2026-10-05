import React, { useState } from 'react'
import Alert from './Alert';
import { Briefcase, Plus, Trash2 } from 'lucide-react';

const Projects = ({data,onChange}) => {
     
    const[isError,setIsError] = useState(false);

     const addProjects = () => {
        if (data.length >= 3) {
            setIsError("Max eduerience added");
            return;
        }
        const  Project = {
                name: "",
                type: "",
                description: "",
            }
        onChange([...data, Project]);

    }
    console.log(data.length);
    const removeProjects = (index) => {
        const update = data.filter((_, id) => id !== index);
        onChange(update);
    }

    const updateProjects = (index, field, value) => {
        const updated = [...data];
        updated[index] = { ...updated[index], [field]: value };
        onChange(updated)
    }
  return (
    <div>
              <div className='flex items-center justify-between'>
                <div>
                    <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'>Projects</h3>
                    <p className='text-sm text-gray-500'>Add your Projects</p>
                </div>
                <button onClick={addProjects} className={`flex items-center gap-2 px-3 py-2 text-sm text-purple-700 rounded-md transition-all duration-200 ease-out ${data.length > 2 ? "text-slate-300 bg-gray-100" : " bg-purple-100  hover:bg-purple-200 hover:scale-105"}`}>
                    <Plus className="size-4" />
                    Add Projects
                </button>
            </div>
            {isError && (
                <div className="fixed top-18 left-5 z-50">
                    <Alert
                        message={isError}
                        onClose={() => { setIsError("") }} />
                </div>
            )}
            {
                data.length == 0 ? (
                    <div className="text-center py-8 text-gray-400">
                        <Briefcase className="w-12 h-8 mx-auto mb-1 text-gray-300" />
                        <p>No Projects added </p>
                        <p className='text-sm'>Click "Add Projects" to get started.</p>
                    </div>
                ) : (
                    <div className='mt-8 space-y-4'>
                        {
                            data.map((edu, ind) => (
                                <div key={ind} className='p-2 border border-gray-200 rounded-lg space-y-3'>
                                    <div className='flex justify-between items-start'>
                                        <h4>Project {ind + 1}</h4>
                                        <button type="button" onClick={() => removeProjects(ind)} className="text-red-400 hover:text-red-600 border p-1 rounded-md mt-0.5 hover:scale-110 hover:shadow-md transition">
                                            <Trash2 className='size-3 
                                            transition-colors' />
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 ">
                                        <input value={edu.name || ""} type="text" onChange={(e) => updateProjects(ind, "name", e.target.value)} className=" border-2 border-gray-300 px-3 py-2 text-sm rounded-md" placeholder='Project Name' />

                                        <input value={edu.type || ""} onChange={(e) => updateProjects(ind, "type", e.target.value)} type="text" placeholder="Tech Stack" className=" border-2 border-gray-300 px-3 py-2 text-sm rounded-md" />

                                        <textarea value={edu.description || ""} onChange={(e) => updateProjects(ind, "description", e.target.value)} type="text" className="md:w-109 h-32 border-2 border-gray-300 px-3 py-2 text-sm rounded-md" placeholder="Field of Study" />
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

export default Projects
