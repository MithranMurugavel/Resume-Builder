import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets';
import { ArrowLeftIcon, Briefcase, FileText, FolderIcon, GraduationCap, Sparkles, User } from 'lucide-react';

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
  const [activeSection,setActiveSection] = useState(0);
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
      <div>
        <div>
          {/* LeftSection */}
          <div></div>

          {/* RightSection */}
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default ResumeBuilder
