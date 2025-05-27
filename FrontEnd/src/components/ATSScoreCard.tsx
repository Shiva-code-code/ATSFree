import React from "react";

interface ATSScoreCardProps {
  resumeFile: File | null;
  jobDescFile: File | null;
}

const ATSScoreCard: React.FC<ATSScoreCardProps> = ({ resumeFile, jobDescFile }) => {
  const score = 75;

  return (
    <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-slate-800 text-xl font-semibold">ATS Score</h2>
        <div className="relative w-16 h-16">
          <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
            <circle
              className="text-slate-200"
              strokeWidth="4"
              stroke="currentColor"
              fill="transparent"
              r="16"
              cx="18"
              cy="18"
            />
            <circle
              className="text-blue-600"
              strokeWidth="4"
              strokeDasharray="100"
              strokeDashoffset={100 - score}
              stroke="currentColor"
              fill="transparent"
              r="16"
              cx="18"
              cy="18"
              style={{ transition: "stroke-dashoffset 0.6s ease" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-blue-600 font-semibold text-lg">
            {score}%
          </div>
        </div>
      </div>

      <p className="text-slate-600 text-sm mb-4">
        Based on your resume and the uploaded job description.
      </p>

      <h3 className="text-slate-800 font-medium mb-3">Resume Improvement Suggestions</h3>
      <ul className="space-y-3">
        <li className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all">
          <p className="font-semibold text-blue-600">Keywords</p>
          <p className="text-slate-600 text-sm">
            Add specific keywords from the job description to your skills section.
          </p>
        </li>
        <li className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all">
          <p className="font-semibold text-blue-600">Quantifiable Results</p>
          <p className="text-slate-600 text-sm">
            Use numbers to show your impact (e.g. “Improved X by 25%”).
          </p>
        </li>
        <li className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all">
          <p className="font-semibold text-blue-600">Resume Summary</p>
          <p className="text-slate-600 text-sm">
            Tailor your resume summary for this specific role.
          </p>
        </li>
      </ul>

      {/* 👇 View More Suggestions Link */}
      <div className="mt-6 justify-center flex">
        <button
          className="text-purple-600 hover:text-purple-800 text-sm font-semibold flex items-center justify-center gap-1 transition-all"
        >
          View More Suggestions
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
};

export default ATSScoreCard;
