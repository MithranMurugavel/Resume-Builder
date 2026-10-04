import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets';
import { ArrowLeftIcon, Briefcase, ChevronLeft, ChevronRight, FileText, FolderIcon, GraduationCap, Sparkles, User } from 'lucide-react';
import PersonalInfo from '../component/PersonalInfo';
import ResumePreview from '../component/ResumePreview';
import TemplateSelector from '../component/TemplateSelector';
import ColorPicker from '../component/ColorPicker';
import ProfileSummary from '../component/ProfileSummary';
import Experience from '../component/Experience';
import Alert from '../component/Alert';

const ResumeBuilder = () => {

  const { resumeId } = useParams();
  const [error, setError] = useState("");
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
  const validateSection = () => {

    if (active.id === "personal") {
      const { full_name, email } = resume.personal_info;

      if(!full_name?.trim() && !email?.trim()){
        setError("Full Name and Email is required");
        return false
      }
      if (!full_name?.trim()) {
        setError("Full Name is required");
        return false;
      }

      if (!email?.trim()) {
        setError("Email Address is required");
        return false;
      }
    }

    setError("");
    return true;
  };

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
        <div className="grid lg:grid-cols-12 gap-8">
          {/* LeftSection */}
          <div className="relative lg:col-span-5 rounded-lg overflow-hidden">
            <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-6 pt-1">
              <hr className="absolute top-0 left-0 right-0 border-2 border-gray-400" />
              <hr className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-500 to-green-600 border-none transition-all duration-1000" style={{ width: `${activeSection * 100 / (section.length - 1)}%` }} />

              <div className="grid grid-cols-3 items-center mb-6 border-b border-gray-300 py-1 gap-16">
                {/* Left side of form nav*/}
                <div className="mr-24">
                  {activeSection !== 0 && (
                    <button onClick={() => setActiveSection((prev) => Math.max(prev - 1, 0))}
                      className="flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all duration-500">
                      <ChevronLeft className="size-4" />
                      Previous
                    </button>
                  )}
                </div>
                {/* Middle of form nav */}
                <div className="flex justify-center gap-2 ml-8">
                  <TemplateSelector selectedtemplates={resume.template} onChange={(template) => setResume(prev => ({ ...prev, template }))} />
                  <ColorPicker selectedColor={resume.accent_color} onChange={(accent_color) => setResume((prev) => ({ ...prev, accent_color }))} />
                </div>
                {/* Right side form nav */}
                <div>
                  <button
                    onClick={() => {
                      if (!validateSection()) return;

                      setActiveSection((prev) =>
                        Math.min(prev + 1, section.length - 1)
                      );
                    }}
                    className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all pl-14 ${activeSection === section.length - 1 ? 'opacity-50' : ''
                      }`}
                    disabled={activeSection === section.length - 1}
                  >
                    Next
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>
              {/* Form Content */}
              <div>
                {active.id == "personal" && (
                  <PersonalInfo data={resume.personal_info} onChange={(data) => setResume(prev => ({ ...prev, personal_info: data }))} rmvBackground={rmvBackground} setrmvBackground={setrmvBackground} />
                )}
                {
                  active.id == "summary" && (
                    <ProfileSummary data={resume.professional_summary} onChange={(data) => { setResume(prev => ({ ...prev, professional_summary: data })) }} />
                  )
                }
                {
                  active.id == "experience" && (
                    <Experience data={resume.experience} onChange={(value) => { setResume(prev => ({ ...prev, experience: value })) }} />
                  )
                }
              </div>
            </div>
            {error && (
              <div className="fixed bottom-5 right-5 z-50">
                <Alert
                  message={error}
                  onClose={() => setError("")}
                />
              </div>
            )}
          </div>
          {/* RightSection */}
          <div className="lg:col-span-7 max-lg:mt-6">
            <div>
            </div>
            <ResumePreview data={resume} template={resume.template} accentColor={resume.accent_color} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ResumeBuilder
