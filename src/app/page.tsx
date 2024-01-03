"use client";
import LoadingSpinner from "@/components/ui/Loading/Loading";
import React, { useState, useEffect } from "react";

export default function Home() {
  // throw new Error("Something went rong");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or any asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 10);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="main">{/* <h1>Welcome to my website</h1> */}</div>
      )}
    </div>
  );
}
