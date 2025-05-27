const Topbar = () => {
  return (
    <header className="w-full bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2 text-blue-600 font-bold text-xl tracking-tight">
        <svg
          className="w-6 h-6 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 6.18L4.24 7 12 3.82 19.76 7 12 8.18z" />
          <path d="M12 12l-10-5v10l10 5 10-5V7l-10 5zm0 6.18L4.24 17 12 13.82 19.76 17 12 18.18z" />
        </svg>
        <span>CareerConnect</span>
      </div>

      {/* Avatar */}
      <div
        className="w-10 h-10 rounded-full bg-cover bg-center ring-1 ring-slate-300 shadow-sm"
        style={{
          backgroundImage:
            'url("https://randomuser.me/api/portraits/women/79.jpg")',
        }}
      />
    </header>
  );
};

export default Topbar;
