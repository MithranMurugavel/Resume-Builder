import { Briefcase, Plus, Sparkles, Trash, Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import Alert from './Alert';
const Education = ({ data, onChange }) => {

    const [isError, setIsError] = useState(false);
    const addEducation = () => {
        if (data.length >= 3) {
            setIsError("Max eduerience added");
            return;
        }
        const education =
        {
            institution: "",
            degree: "",
            field: "",
            graduation_date: "",
            gpa: ""
        }
        onChange([...data, education]);

    }

    const removeEducation = (index) => {
        const update = data.filter((_, id) => id !== index);
        onChange(update);
    }

    const updateEducation = (index, field, value) => {
        const updated = [...data];
        updated[index] = { ...updated[index], [field]: value };
        onChange(updated)
    }
    return (
        <div>
            <div className='flex items-center justify-between'>
                <div>
                    <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'>Education</h3>
                    <p className='text-sm text-gray-500'>Add your job Education</p>
                </div>
                <button onClick={addEducation} className={`flex items-center gap-2 px-3 py-2 text-sm text-purple-700 rounded-md transition-all duration-200 ease-out ${data.length > 2 ? "text-slate-300 bg-gray-100" : " bg-purple-100  hover:bg-purple-200 hover:scale-105"}`}>
                    <Plus className="size-4" />
                    Add Education
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
                        <p>No Education added </p>
                        <p className='text-sm'>Click "Add Education" to get started.</p>
                    </div>
                ) : (
                    <div className='mt-8 space-y-4'>
                        {
                            data.map((edu, ind) => (
                                <div key={ind} className='p-2 border border-gray-200 rounded-lg space-y-3'>
                                    <div className='flex justify-between items-start'>
                                        <h4>Education {ind + 1}</h4>
                                        <button type="button" onClick={() => removeEducation(ind)} className="text-red-400 hover:text-red-600 border p-1 rounded-md mt-0.5 hover:scale-110 hover:shadow-md transition">
                                            <Trash2 className='size-3 
                                            transition-colors' />
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 ">
                                        <input value={edu.institution || ""} type="text" onChange={(e) => updateEducation(ind, "institution", e.target.value)} className=" border-2 border-gray-300 px-3 py-2 text-sm rounded-md" placeholder='Institution Name' />

                                        <input value={edu.degree || ""} onChange={(e) => updateEducation(ind, "degree", e.target.value)} type="text" placeholder="Degree (e.g. B.E, B.com, ...)" className=" border-2 border-gray-300 px-3 py-2 text-sm rounded-md" />

                                        <input value={edu.field || ""} onChange={(e) => updateEducation(ind, "field", e.target.value)} type="text" className=" border-2 border-gray-300 px-3 py-2 text-sm rounded-md" placeholder="Field of Study" />

                                        <input value={edu.graduation_date || ""} onChange={(e) => updateEducation(ind, "graduation_date", e.target.value)} type="month" className=" border-2 border-gray-300 px-3 py-2 text-sm rounded-md"/>

                                        <input value={edu.gpa || ""} onChange={(e) => updateEducation(ind, "gpa", e.target.value)} type="text" className=" border-2 border-gray-300 px-3 py-2 text-sm rounded-md" placeholder="GPA or Percentage" />
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

export default Education
