import { FilePenLineIcon, PencilIcon, PlusIcon, Trash2Icon, UploadCloudIcon, XIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { dummyResumeData } from '../assets/assets'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const colors = ["#d83dac", "#eea812", "#cc3c6c", "#f2fe00", "#6cc41f"];
  const [data, setData] = useState([]);
  const [createResume, setCreateResume] = useState(false);
  const [uploadExisting, setUploadExisting] = useState(false);
  const [title, setTitle] = useState('');
  const [resume, setResume] = useState("");
  const [editResumeId, setEditResumeId] = useState('');
  const navigate = useNavigate();
  const loadData = async () => {
    setData(dummyResumeData)
  }

  const ResumeCreate = async (event) => {
    event.preventDefault();
    setCreateResume(false);
    navigate(`builder/res123`)

  }

  const ResumeUpload = async (event) => {
    event.preventDefault();
    setUploadExisting(false);
    navigate(`builder/${resume._id}`)
  }

  const editTitle = async (event) => {
    event.preventDefault();
     setData(prev =>
        prev.map(resume =>
            resume._id === editResumeId
                ? { ...resume, title: title }
                : resume
        )
    );

    setEditResumeId('');
    setTitle('');
  }

  const deleteResume = async (resumeId) => {
    const confirm = window.confirm("Are you sure want to delete this file");

    if (confirm) {
      setData(prev => prev.filter(resume => resume._id !== resumeId))
    }
  }
  useEffect(() => {
    loadData()
  }, [])
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-1xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden">Welcom, Jhon</p>
        <div className="flex gap-4" >
          <button onClick={() => setCreateResume(true)} className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashe border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 curson-pointer">
            <PlusIcon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-600 text-white rounded-full group-hover:from-indigo-500 group-hover:to-indigo-400" />
            <p className="text-sm group-hover:text-indigo-700 transition-all duration-300">Create Resume</p>
          </button>
          <button onClick={() => setUploadExisting(true)} className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashe border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 curson-pointer">
            <UploadCloudIcon className="size-11  p-2.5 bg-gradient-to-br from-purple-400 to-indigo-500 text-white rounded-full group-hover:from-indigo-500
            group-hover:to-purple-400 transition-all duration-300"/>
            <p className="text-sm group-hover:text-purple-700 transition-all duration-300">Upload Existing</p>
          </button>
        </div>
        <hr className="border-slate-500 my-6 sm:w-[305px]" />
        <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
          {
            data.map((resume, index) => {
              const basecolor = colors[index % colors.length];
              return (
                <button onClick={() => { navigate(`builder/${resume._id}`) }} key={index} className="relative w-full sm:max-w-40 h-52 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer" style={{ background: `linear-gradient(135deg, ${basecolor}10,${basecolor}40)`, borderColor: basecolor + '40' }}>

                  <FilePenLineIcon className="size-7 group-hover:scale-105 transition-all " style={{ color: basecolor }} />
                  <p className="text-sm group-hover:scale-105 transition-all px-2 text-center" style={{ color: basecolor }}>{resume.title}</p>
                  <p className="absolute text-[11px] bottom-3 text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center" style={{ color: basecolor }}>Updated on {new Date(resume.updatedAt).toLocaleDateString()}</p>

                  <div onClick={e => e.stopPropagation()} className="absolute top-1 right-1 group-hover:flex items-center hidden">
                    <Trash2Icon onClick={() => { deleteResume(resume._id) }} className="size-7 p-1.5 text-slate-700 hover:bg-white/50 rounded-lg hover:scale-123" />
                    <PencilIcon onClick={() => { setEditResumeId(resume._id); setTitle(resume.title) }} className="size-7 p-1.5 hover:bg-white/50 rounded-lg text-slate-700 hover:scale-123 " />
                  </div>
                </button>
              )
            })
          }
        </div>
        {
          createResume && (
            <form onSubmit={ResumeCreate} onClick={() => setCreateResume(false)} className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center">
              <div className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6" onClick={e => e.stopPropagation()}>
                <h2 className="text-xl font-bold mb-4">Create a Resume</h2>
                <input onchange ={(e)=>{setTitle(e.target.value)}} value={title}type="text" placeholder="Enter your file name" className="w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600 border rounded" required />
                <div className="flex justify-end">
                  <button className="w-24 py-2 bg-black text-white rounded-xl hover:bg-blue-600 transition-color" type="submit">Create</button>
                </div>
                <XIcon onClick={() => { setCreateResume(false); setTitle('') }} className="absolute top-4 right-4 text-black rounded hover:bg-red-400 hover:text-white cursor-pointer" />
              </div>
            </form>
          )
        }

        {
          uploadExisting && (
            <form onSubmit={ResumeUpload} onClick={() => setUploadExisting(false)} className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center">
              <div className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-xl font-bold mb-4">Upload Resume</h2>
                <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Enter your file name" className="w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600 border rounded" required />
                <div>
                  <label htmlFor="resume-input" className="block text-sm text-slate-700">
                    Select Resume File
                    <div className="flex flex-col items-center justify-center gap-2 border group text-slate-400 border-slate-400 border-dashed rounded-md p-4 py-10 my-4 hover:border-blue-600 hover:text-blue-600 cursor-pointer transition-colors">
                      {
                        resume ? (
                          <p className="text-green-700">{resume.name}</p>
                        ) : (
                          <>
                            <UploadCloudIcon className="size-14 stroke-1" />
                            <p>Upload Resume</p>
                          </>
                        )
                      }
                    </div>
                  </label>
                  <input id="resume-input" type="file" onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setResume(file);
                      setTitle(file.name);
                    }
                  }} accept=".pdf" hidden />
                </div>
                <div className="flex justify-end">
                  <button className="w-24 py-2 bg-black text-white rounded-xl hover:bg-blue-600 transition-color" type="submit">Upload</button>
                </div>
                <XIcon onClick={() => { setUploadExisting(false); setTitle(''); setResume("")}} className="absolute top-4 right-4 text-black rounded hover:bg-red-400 hover:text-white cursor-pointer" />
              </div>
            </form>
          )
        }

        {
         editResumeId && (
    <form
        onSubmit={editTitle}
        onClick={() => setEditResumeId('')}
        className="fixed inset-0 bg-black/70 backdrop-blur z-10 flex items-center justify-center">
        <div
            className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
            onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold mb-4">
                Edit a Resume
            </h2>

            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                placeholder="Enter your file name"
                className="w-full px-4 py-2 mb-4 border rounded"
                required/>
            <div className="flex justify-end">
                <button
                    className="w-24 py-2 bg-black text-white rounded-xl hover:bg-blue-600 transition-colors"
                    type="submit">
                    Update
                </button>
            </div>

            <XIcon
                onClick={() => {
                    setEditResumeId('');
                    setTitle('');
                }}
                className="absolute top-4 right-4 cursor-pointer"/>
        </div>
    </form>
)}
      </div>
    </div>
  )
}

export default Dashboard
