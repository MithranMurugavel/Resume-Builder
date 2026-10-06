import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ResumePreview from '../component/ResumePreview';
import { dummyResumeData } from '../assets/assets';
import { LifeLine } from 'react-loading-indicators'
import NotFound from '../component/NotFound';
const Preview = () => {

  const { resumeId } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [resumeData, setResumeData] = useState(null);

  const loadData = async () => {
    const update = dummyResumeData.find(
      (resume) => resume._id === resumeId
    );

    setResumeData(update);
    setLoading(false)
  };



  useEffect(() => {
    loadData();
  }, [resumeId]);

  if (isLoading) {
    return <div className='min-h-screen flex flex-col items-center justify-center'>
              <LifeLine color="#2a342a" size="large" text="Loading" />
          </div>

  }

  return resumeData ? (
    <div className="bg-slate-100">
      <div className="max-w-3xl mx-auto py-10">

        <ResumePreview
          data={resumeData}
          template={resumeData.template}
          accentColor={resumeData.accentColor}
          classes="py-4 bg-white"
        />

      </div>
    </div>
  ) : (
    <div>
      <NotFound/>
    </div>
  );
};

export default Preview;