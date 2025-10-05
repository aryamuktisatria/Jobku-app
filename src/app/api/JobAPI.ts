import { jobs } from "./jobs";

export interface Job {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  salary_from: number;
  salary_to: number;
  employment_type: string;
  application_deadline: string;
  qualifications: string;
  contact: string;
  job_category: string;
  is_remote_work: number;
  number_of_opening: number;
  created_at: string;
  updated_at: string;
}

/** Ambil semua job (fake API) */
export const fetchAllJobs = async (): Promise<Job[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(jobs), 300));
};

/** Ambil 5 job pertama */
export const fetchFeaturedJobs = async (): Promise<Job[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(jobs.slice(0, 5)), 300));
};

/** Ambil detail job berdasarkan ID */
export const fetchJobDetail = async (jobId: string): Promise<Job | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const job = jobs.find((item) => item.id === jobId);
      resolve(job || null);
    }, 300);
  });
};