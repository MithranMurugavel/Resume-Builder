import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets';
import { ArrowLeftIcon, Briefcase, ChevronLeft, ChevronRight, FileText, FolderIcon, GraduationCap, Sparkles, User } from 'lucide-react';

const ResumeBuilder = () => {

  const { resumeId } = useParams();

  const [resume, setResume] = useState({
    _id: '',
    title: '',
    personal_info: {},
    professional_summary: "",
    experience: [],
    education: [],
    project: [],
    skills: [],
    template: "classic",
    accent_color: "#3B82F6",
    public: false,
  })
  const [activeSection, setActiveSection] = useState(0);
  const [rmvBackground, setrmvBackground] = useState(false);
  const section = [
    { id: "personal", name: "Personal Info", icon: User },
    { id: "summary", name: "Sumarry", icon: FileText },
    { id: "experience", name: "Experience", icon: Briefcase },
    { id: "education", name: "Education", icon: GraduationCap },
    { id: "projects", name: "Project", icon: FolderIcon },
    { id: "skills", name: "Skills", icon: Sparkles }
  ]

  const active = section[activeSection];
  const loadData = async () => {

    const res = dummyResumeData.find(resume => resume._id === resumeId)

    if (res) {
      setResume(res);
      document.title = res.title;
    }
  }

  useEffect(() => {
    loadData();
  }, [])
  return (
    <div>
      <div className=" ml-8 max-w-7xl max-auto px-4 py-6">
        <Link to={'/app'} className="inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all">
          <ArrowLeftIcon className="size-4 " /> Back to Dashboard
        </Link>
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div  className="grid lg:grid-cols-12 gap-8">
          {/* LeftSection */}
          <div className="relative lg:col-span-5 rounded-lg overflow-hidden">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1">
              <hr className="absolute top-0 left-0 right-0 border-2 border-gray-400"/>
              <hr className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-500 to-green-600 border-none transition-all duration-500" style={{width:`${activeSection *100 / (section.length-1)}%`}}/>

              <div className="flex justify-between items-center mb-6 border-b border-gray-300 py-1">

  {/* Left side */}
  <div>
    {activeSection !== 0 && (
      <button onClick={()=> setActiveSection((prev)=>Math.max(prev-1,0))}
        className="flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all duration-500"
      >
        <ChevronLeft className="size-4" />
        Previous
      </button>
    )}
  </div>

  {/* Right side */}
  <div>
    <button onClick={()=>{setActiveSection((prev)=>Math.min(prev+1,section.length-1))}}
      className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all ${
        activeSection === section.length - 1 ? 'opacity-50' : ''
      }`}
      disabled={activeSection === section.length - 1}
    >
      Next
      <ChevronRight className="size-4" />
    </button>
  </div>

</div>
            </div>
          </div>

          {/* RightSection */}
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default ResumeBuilder
