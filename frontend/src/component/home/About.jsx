import React from 'react'
import Image1 from './assets/Image2.jpg'
import Image2 from './assets/Image3.jpg'
const About = () => {
  return (
    <div className = "features" id="about">
      <div className="bg-amber-400/75 py-16 px-4 flex flex-col items-center">
      
    <div className="text-center flex flex-col items-center mb-12">
         <h1 className=" border-2 border-solid rounded-lg p-4 text-[30px] font-medium text-slate-900 mb-4 text-shadow-lg font-extrabold">Build a professional resume in minutes. Choose a modern template, customize your details and create a resume that showcases your skills, experience and achievements</h1>
        <h2 className="text-[24px] font-medium text-slate-900 mb-2 text-shadow-lg">
            Features you avail. in this website
        </h2>
        <p className="text-black text-slate-600 max-w-md leading-relaxed">
            Can Create a simple CV's as your self
        </p>
    </div>

    <div className="flex flex-wrap items-center justify-center gap-6 max-w-6xl w-full">
    
        <div className="bg-white border border-zinc-200 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-lg p-4 flex flex-col items-center">
            <img src="https://assets.prebuiltui.com/components/feature-sections/ai-avatar-image1.png" alt="AI Character Maker" className="w-full max-w-56 object-cover mb-6"/>
            <div className="w-full max-w-56 flex flex-col h-full">
                <h3 className="text-base font-medium text-slate-900 mb-2">
                    Add Image
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-3">
                    You can add a image and remove the background of that image
                </p>
                <div className='flex items-end justify-end'>
                        <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="transition-transform duration-300 group-hover:translate-x-1">
                        </svg>
                </div>
            </div>
        </div>

    
        <div className="bg-white border border-zinc-200 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-lg p-4 flex flex-col items-center">
            <img src ={Image1} alt="Multicolor Option" className="w-full max-w-56 object-cover mb-6"/>
            <div className="w-full max-w-56 flex flex-col h-full">
                <h3 className="text-base font-medium text-slate-900 mb-2">
                    Customize Profile Color
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-3">
                    Create a template and you can customize the layout color
                </p>
                <div className='flex items-end justify-end'>
                
                        <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="transition-transform duration-300 group-hover:translate-x-1">
                        </svg>
                </div>
            </div>
        </div>

    
        <div className="bg-white border border-zinc-200 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-lg p-4 flex flex-col items-center">
            <img src={Image2} alt="AI Paintings" className="w-full max-w-56 object-cover mb-6"/>
            <div className="w-full max-w-56 flex flex-col h-full">
                <h3 className="text-base font-medium text-slate-900 mb-2">
                    Default categories
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-3">
                    Can add your details by filling the details of your info
                </p>
                <div className='flex items-end justify-end'>
                        <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="transition-transform duration-300 group-hover:translate-x-1">
                        </svg>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default About
