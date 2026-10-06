import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ResumePreview from '../component/ResumePreview';
import { dummyResumeData } from '../assets/assets';

const Preview = () => {

  const { resumeId } = useParams();

  const [resumeData, setResumeData] = useState(null);
  
  const loadData = async () => {
    const update = dummyResumeData.find(
      (resume) => resume._id === resumeId
    );

    setResumeData(update);
  };

  useEffect(() => {
    loadData();
  }, [resumeId]);

  useEffect(() => {
    console.log(resumeData);
  }, [resumeData]);

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
      <div>No resume found</div>
    </div>
  );
};

export default Preview;