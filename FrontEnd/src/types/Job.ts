export interface Job {
  title: string;
  company: string;
  location: string;
  type: string[];
  source: string;
  applyUrl: string;
  atsScore?: 85; // 👈 Add this
}

      