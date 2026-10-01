import { User } from 'lucide-react'
import React from 'react'

const PersonalInfo = ({ data, onChange, rmvBackground, setrmvBackground }) => {

    const  handleChange =(field,value)=>
    {
        onChange({...data,[field]:value})

    }

    return (
        <div>
            <h3 className="text-lg font-semibold text-gray-900">Personal Info</h3>
            <p className="text-sm text-blue-500"> Get Started with the personal info</p>

            <div className=" flex items-center gap-2">
                <label>
                    {
                        data.image ? (
                            <img className="w-16 h-16 rounded-full object-cover mt-5 ring ring-slate-400 cursor-pointer" src = {typeof data.image == 'string' ? data.image : URL.createObjectURL(data.image)} />
                        ) : (
                            <div className="inline-flex items-center gap-2 mt-5 text-slate-600 hover:text-slate-800 cursor-pointer">
                                <User className="size-17 p-2.5 border rounded-full " />
                            </div>)
                    }
                    <input onChange={(e) => handleChange("image", e.target.file[0])} type="file" accept="image/jpeg, image/png" className="hidden" />
                </label>
            </div>
        </div>
    )
}

export default PersonalInfo
