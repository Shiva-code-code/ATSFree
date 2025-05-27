import Head from "next/head";
import { useState } from "react";
import UploadBox from "@/components/UploadBox";
import ATSScoreCard from "@/components/ATSScoreCard";
import FilterBar from "@/components/FilterBar";
import JobListingCard from "@/components/JobListingCard";
import UserFeedback from "@/components/UserFeedback";
import Topbar from "@/components/Topbar";
import jobs from "@/data/jobs";

export default function Home() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescFile, setJobDescFile] = useState<File | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [showJobsModal, setShowJobsModal] = useState(false); // 👈 modal state

  const getCardStyle = (id: string) => {
    if (hoveredCard === id) return "scale-[1.03] z-10";
    if (hoveredCard !== null) return "scale-95 opacity-80";
    return "";
  };

  return (
    <>
      <Head>
        <title>CareerConnect | ATS Resume Analyzer</title>
        <meta
          name="description"
          content="Upload your resume to get an ATS score and live job matches from LinkedIn, Naukri, Indeed."
        />
      </Head>

      <Topbar />

      <main className="bg-slate-200 min-h-screen pt-24 p-4 lg:p-8 font-sans relative">
        {/* Modal backdrop */}
        {showJobsModal && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setShowJobsModal(false)}
          />
        )}

        {/* Modal content */}
        {showJobsModal && (
          <div className="fixed z-50 top-1/2 left-1/2 w-[90%] max-w-4xl max-h-[80vh] overflow-auto -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-3xl shadow-xl transition-all">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-slate-800">
                All Job Listings
              </h2>
              <button
                className="text-slate-500 hover:text-red-500 text-sm"
                onClick={() => setShowJobsModal(false)}
              >
                ✕ Close
              </button>
            </div>
            <FilterBar />
            <div className="space-y-4 mt-4">
              {jobs.map((job, idx) => (
                <JobListingCard
                  key={idx}
                  job={job}
                  isActive={false}
                  isDimmed={false}
                  onHover={() => {}}
                  onLeave={() => {}}
                />
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <div
              onMouseEnter={() => setHoveredCard("resume")}
              onMouseLeave={() => setHoveredCard(null)}
              className={`transition-all duration-300 ${getCardStyle("resume")}`}
            >
              <UploadBox
                label="Upload Resume"
                file={resumeFile}
                setFile={setResumeFile}
                type="resume"
              />
            </div>

            <div
              onMouseEnter={() => setHoveredCard("jobdesc")}
              onMouseLeave={() => setHoveredCard(null)}
              className={`transition-all duration-300 ${getCardStyle("jobdesc")}`}
            >
              <UploadBox
                label="Upload Job Description"
                file={jobDescFile}
                setFile={setJobDescFile}
                type="jobdesc"
              />
            </div>

            <div
              onMouseEnter={() => setHoveredCard("feedback")}
              onMouseLeave={() => setHoveredCard(null)}
              className={`transition-all duration-300 ${getCardStyle("feedback")}`}
            >
              <UserFeedback />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            <div
              onMouseEnter={() => setHoveredCard("ats")}
              onMouseLeave={() => setHoveredCard(null)}
              className={`transition-all duration-300 ${getCardStyle("ats")}`}
            >
              <ATSScoreCard resumeFile={resumeFile} jobDescFile={jobDescFile} />
            </div>

            <div
              onMouseEnter={() => setHoveredCard("jobs")}
              onMouseLeave={() => setHoveredCard(null)}
              className={`transition-all duration-300 ${getCardStyle("jobs")}`}
            >
              <section className="bg-white p-6 rounded-3xl shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-slate-800">
                    Live Job Listings
                  </h2>
                  <button
                    onClick={() => setShowJobsModal(true)}
                    className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-2xl hover:bg-blue-700"
                  >
                    View All
                  </button>
                </div>
                <FilterBar />
                <div className="space-y-4 mt-4">
                  {jobs.slice(0, 2).map((job, idx) => (
                    <JobListingCard
                      key={idx}
                      job={job}
                      isActive={false}
                      isDimmed={false}
                      onHover={() => {}}
                      onLeave={() => {}}
                    />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
