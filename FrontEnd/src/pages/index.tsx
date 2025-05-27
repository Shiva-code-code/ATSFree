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

  return (
    <>
      <Head>
        <title>CareerConnect | ATS Resume Analyzer</title>
        <meta
          name="description"
          content="Upload your resume to get an ATS score and live job matches from LinkedIn, Naukri, Indeed."
        />
      </Head>

      <main className="bg-slate-50 min-h-screen font-sans">
        {/* Full-width Topbar */}
        <Topbar />

        {/* Main Content with padding */}
        <div className="p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* LEFT COLUMN: Upload Boxes + Feedback */}
            <div className="flex flex-col gap-6 lg:col-span-1">
              <UploadBox
                label="Upload Resume"
                file={resumeFile}
                setFile={setResumeFile}
                type="resume"
              />
              <UploadBox
                label="Upload Job Description"
                file={jobDescFile}
                setFile={setJobDescFile}
                type="jobdesc"
              />
              <UserFeedback />
            </div>

            {/* RIGHT COLUMN: ATS Score + Job Listings */}
            <div className="flex flex-col gap-8 lg:col-span-2">
              <ATSScoreCard
                resumeFile={resumeFile}
                jobDescFile={jobDescFile}
              />

              <section className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-semibold mb-4 text-slate-800">
                  Live Job Listings
                </h2>
                <FilterBar />
                <div className="space-y-4 mt-4">
                  {jobs.map((job, idx) => (
                    <JobListingCard key={idx} job={job} />
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
