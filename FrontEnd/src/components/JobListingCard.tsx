import { Job } from "@/types/Job";

interface Props {
  job: Job;
}

const JobListingCard = ({ job }: Props) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-lg transition-all">
      <div>
        <p className="font-semibold text-slate-800 text-base">{job.title}</p>
        <p className="text-sm text-slate-600">
          {job.company} · {job.location}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {job.type.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-col items-start lg:items-end gap-2">
        <a
          href={job.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-2xl hover:bg-blue-700"
        >
          Apply Now
        </a>
        <span className="text-xs text-slate-500">via {job.source}</span>
      </div>
    </div>
  );
};

export default JobListingCard;