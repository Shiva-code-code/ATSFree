import React, { ChangeEvent } from "react";

interface UploadBoxProps {
  label: string;
  file: File | null;
  setFile: (file: File | null) => void;
  type: "resume" | "jobdesc";
}

const UploadBox: React.FC<UploadBoxProps> = ({ label, file, setFile, type }) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-blue-500 hover:bg-slate-50 transition-colors group cursor-pointer">
        <span className="material-icons-outlined text-6xl text-slate-400 group-hover:text-blue-500 transition-colors">
          {type === "resume" ? "cloud_upload" : "description"}
        </span>
        <p className="text-slate-700 text-lg font-semibold mt-4 group-hover:text-blue-600 transition-colors">
          Drag & drop your {type === "resume" ? "resume" : "job description"}
        </p>
        <p className="text-slate-500 text-sm mt-1 group-hover:text-blue-500 transition-colors">
          or click to browse (PDF, DOCX, TXT)
        </p>
        <input
          type="file"
          accept=".pdf,.doc,.docx,.txt"
          onChange={handleFileChange}
          className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
        />
      </div>

      <button
        className={`mt-4 w-full flex items-center justify-center gap-2 h-10 px-4 rounded-lg text-sm font-medium text-white ${
          type === "resume" ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-600 hover:bg-slate-700"
        } shadow-sm hover:shadow-md active:scale-[0.98] transition-all`}
        onClick={() => {
          alert(file ? `${file.name} selected.` : "No file selected");
        }}
      >
        <span className="material-icons-outlined text-xl">upload_file</span>
        <span className="truncate">Upload {type === "resume" ? "Resume" : "Job Description"}</span>
      </button>
    </div>
  );
};

export default UploadBox;
