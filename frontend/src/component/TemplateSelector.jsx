import { Check, Layout } from 'lucide-react';
import React, { useState } from 'react'

const TemplateSelector = ({ selectedtemplates, onChange }) => {

    const [isOpen, setIsOpen] = useState(false);

    const templates = [
        {
            id: "classic",
            name: "Classic",
            preview: "Display your info in simple styled way and clear sections"
        },
        {
            id: "minimal-image",
            name: "Minimal Image",
            preview: "Minimal design wiht neat clean structure and typography"
        },
        {
            id: "minimal",
            name: "Minimal",
            preview: "Ultra-clean design that puts your content in front and center"
        },
        {
            id: "modern",
            name: "Modern",
            preview: "Modernized structure for your resume with high profiled typography"
        }
    ]
    return (
        <div className="relative">
            <button className="flex items-center z-50 gap-2 text-sm text-blue-600 bg-gradient-to-br from-blue-50 hover:to-blue-100 ring-blue-300 hover:ring transition-all px-3 py-2 rounded-xl " onClick={() => setIsOpen(prev => !prev)}>
                <Layout size={18} /><span className='max-sm:hidden'>Template</span>
            </button>
            {
                isOpen && (

                    <>
                        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>

                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 p-3 mt-2 space-y-3 z-50 bg-white rounded-md border border-gray-300 shadow-lg" onClick={e => e.stopPropagation()}>
                                {
                                    templates.map((template) => (
                                        <div key={template.id} onClick={() => { onChange(template.id); setIsOpen(false) }} className={`relative p-2 border rounded-lg cursor-pointer transition-all ${selectedtemplates === template.id ? "border-blue-400 bg-blue-100" : "border-gray-300 hover:border-gray-400 hover:bg-gray-100"}`}>
                                            {
                                                selectedtemplates === template.id && (
                                                    <div className="absolute top-2 right-2">
                                                        <div className="size-5 bg-blue-400 rounded-full flex items-center justify-center">
                                                            <Check className="w-3 h-3 text-white" />
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            <div className='space-y-1'>
                                                <h4 className="font-medium text-gray-800">{template.name}</h4>
                                                <div className="mt-2 p-2 bg-blue-50 rounded-md text-gray-500 text-xs italic">{template.preview}
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                            </div>
                    </>
                )
            }

        </div>

    )
}

export default TemplateSelector
