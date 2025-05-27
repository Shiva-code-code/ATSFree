const FilterBar = () => {
    return (
      <div className="mb-6 flex flex-col lg:flex-row gap-4">
        <input
          type="text"
          placeholder="Search for jobs (e.g., Software Engineer, Remote)"
          className="w-full lg:flex-1 rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  
        <select className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-700 focus:ring-blue-500">
          <option>All Locations</option>
          <option>Remote</option>
          <option>New York</option>
          <option>India</option>
        </select>
  
        <select className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-700 focus:ring-blue-500">
          <option>All Work Types</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Internship</option>
        </select>
      </div>
    );
  };
  
  export default FilterBar;
  