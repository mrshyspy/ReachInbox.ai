import React, { useEffect, useState, Suspense, lazy } from "react";
import axios from "axios";
import Spinner from "./Spinner"; // Adjust the path if needed

const AllInbox = lazy(() => import("./AllInbox"));
const CenterPage = lazy(() => import("./CenterPage"));
const RightSection = lazy(() => import("./RightSection"));

interface Thread {
  id: number; // Assuming Thread ID is a number
  // Add other thread properties as needed
}

const MainPage: React.FC = () => {
  const [datas, setData] = useState<Thread[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedThread, setSelectedThread] = useState<number | null>(null);
  const [threadLoading, setThreadLoading] = useState(false); // New state for thread loading
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const response = await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/list", {
          headers: {
            Authorization: token,
          },
        });

        setData(response.data.data);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const loadMail = async (threadId: number) => {
    setSelectedThread(threadId);
    setThreadLoading(true); // Set thread loading state to true

    try {
      // Simulate fetching data or performing some async action
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      setError("Error loading thread. Please try again.");
      console.error("Error loading thread:", error);
    } finally {
      setThreadLoading(false); // Set thread loading state to false
    }
  };

  if (loading) {
    return (
      <div className="bg-[#ECEFF3] dark:bg-black dark:text-white text-[#5B5F66] flex h-screen w-full justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#ECEFF3] dark:bg-black dark:text-white text-[#5B5F66] flex h-screen w-full justify-center items-center">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#ECEFF3] dark:bg-black text-white pt-16 flex w-full h-screen">
      <div className="w-1/4 h-full">
        <Suspense fallback={<Spinner />}>
          <AllInbox data={datas} loadMail={loadMail} />
        </Suspense>
      </div>
      <div className="w-2/4 h-full relative">
        {threadLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70">
            <Spinner />
          </div>
        )}
        <Suspense fallback={<Spinner />}>
          <CenterPage selectedThread={selectedThread !== null ? selectedThread.toString() : ''} />
        </Suspense>
      </div>
      <div className="w-1/4 h-full">
        <Suspense fallback={<Spinner />}>
          <RightSection />
        </Suspense>
      </div>
    </div>
  );
};

export default MainPage;
