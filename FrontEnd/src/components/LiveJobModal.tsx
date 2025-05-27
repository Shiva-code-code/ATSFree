import { Job } from "@/types/Job";
import JobListingCard from "./JobListingCard";
import FilterBar from "./FilterBar";

interface Props {
  jobs: Job[];
  onClose: () => void;
}

const LiveJobModal = ({ jobs, onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center px-4 py-10">
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-5xl max-h-[80vh] overflow-y-auto p-6 animate-fadeIn">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-slate-800">All Job Listings</h2>
          <button
            onClick={onClose}
            className="text-sm text-slate-600 hover:text-red-500 font-medium px-2 py-1 rounded"
          >
            ✕ Close
          </button>
        </div>
        <FilterBar />
        <div className="mt-4 space-y-4">
          {jobs.map((job, idx) => (
            <JobListingCard key={idx} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveJobModal;
