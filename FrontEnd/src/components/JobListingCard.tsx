import { Job } from "@/types/Job";

interface Props {
  job: Job;
}

const JobListingCard = ({ job }: Props) => {
  return (
  
    <div className="flex justify-between items-start lg:items-center p-4 border border-slate-200 rounded-lg bg-white hover:shadow-md hover:border-blue-300 transition-all">
      <div>
        <p className="font-semibold text-slate-800 text-base hover:text-blue-600 transition-colors">{job.title}</p>
        <p className="text-sm text-slate-600">{job.company} · {job.location}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {job.type.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full hover:bg-slate-200 transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start lg:items-end gap-2">
        <a
          href={job.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-blue-700 transition"
        >
          Apply Now
        </a>
        <span className="text-xs text-slate-500">via {job.source}</span>
      </div>
    </div>
  );
};

export default JobListingCard;
