"use client"
import { Job } from "@/app/api/(services)/jobs/route";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[] | []>([]);

  const getJobs = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/jobs',
        {
          method: "GET",
        });
      if (res) {
        const data = await res.json();
        if (data) {
          setJobs(data);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    getJobs();
  }, []);
  // console.log(jobs);
  return <main>
    <h1>Jobs</h1>
    <ul className="flex flex-col gap-4 h-screen ">
      {
        jobs.map((job: Job) => (
          <div key={job.title} className="p-8 m-auto container bg-secondary w-2/3">
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            {/* Render other job properties as needed */}
          </div>
        ))
      }
    </ul>
  </main>;
}
