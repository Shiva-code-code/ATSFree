import { useState } from "react";

const UserFeedback = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg space-y-6">
      <h3 className="text-slate-800 text-lg font-semibold">User Feedback</h3>

      {/* Static Testimonials */}
      <div className="space-y-4">
        <div className="p-4 bg-slate-50 rounded-lg">
          <p className="text-sm font-medium text-slate-800">Alex J. ⭐⭐⭐⭐☆</p>
          <p className="text-slate-600 text-sm">
            “This tool significantly improved my resume’s ATS score! The suggestions were spot-on and easy to implement.”
          </p>
        </div>
        <div className="p-4 bg-slate-50 rounded-lg">
          <p className="text-sm font-medium text-slate-800">Maria S. ⭐⭐⭐⭐⭐</p>
          <p className="text-slate-600 text-sm">
            “I landed more interviews after using CareerConnect. The live job listings are a great bonus too.”
          </p>
        </div>
      </div>

      {/* Feedback Form */}
      <div className="pt-4 border-t border-slate-200">
        <h4 className="text-slate-700 font-semibold mb-2">Share Your Experience</h4>
        <input
          type="text"
          placeholder="e.g., John Doe"
          className="w-full mb-3 px-4 py-2 border border-slate-300 rounded text-sm focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex items-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              className={`cursor-pointer text-2xl ${
                star <= rating ? "text-yellow-400" : "text-slate-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
        <textarea
          rows={3}
          placeholder="Tell us about your experience..."
          className="w-full mb-3 px-4 py-2 border border-slate-300 rounded text-sm resize-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default UserFeedback;
