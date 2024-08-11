import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { TbReload } from "react-icons/tb";

function AllInbox({
  data,
  loadMail,
}: {
  data: any;
  loadMail: (threadId: number) => void;
}) {
  async function reloadHandler() {
    const token = localStorage.getItem("token");
    await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
      headers: {
        Authorization: token,
      },
    });

    console.log("clicked");
  }

  if (!Array.isArray(data)) {
    console.error("Data is not an array:", data);
    return null;
  }
  return (
    <div className="border-r-2 bg-white dark:bg-black border-[#E0E0E0] dark:border-[#2B2F33] h-full overflow-y-scroll no-scrollbar">
      <div className="px-4 pt-4 flex justify-between items-start">
        <div className="px-4 ">
          <div className="text-2xl py-2 text-[#4285F4] font-semibold flex items-center">
            All Inbox(s)
            <FaAngleDown className="ml-2 font-normal mt-1 cursor-pointer" />
          </div>
          <div className="text-black dark:text-[#8b8b8b] font-medium">
            {data.length}/25{" "}
            <span className="text-[#7F7F7F] dark:text-[#7F7F7F] font-light">Inboxes selected</span>
          </div>
        </div>
        <div
          className="p-2 mt-2 bg-white dark:bg-[#25262B] border border-gray-200 dark:border-gray-800 mr-4 rounded-xl cursor-pointer"
          onClick={reloadHandler}
        >
          <TbReload className="text-black dark:text-white" />
        </div>
      </div>

      <div className="my-4 px-6">
        <div className="relative">
          <input
            placeholder="Search"
            className="w-full bg-[#F4F6F8] dark:bg-[#23272C] rounded-lg py-2 pl-8 pr-3 text-sm border border-[#DFE3E8] dark:border-[#FFFFFF1A] text-black dark:text-white"
          />
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
        <div className="flex justify-between py-4">
          <div className="text-black dark:text-white text-sm">
            <span className="bg-[#ECECEC] dark:bg-[#222426] text-[#5C7CFA] px-3 py-1 rounded-full">
              {data.length}
            </span>{" "}
            New Replies
          </div>
          <div className="flex items-center text-black dark:text-white text-sm">
            Newest <FaAngleDown className="ml-2 text-lg" />
          </div>
        </div>
      </div>

      <div>
        {data.map((email: any) => (
          <Mail
            key={email.id}
            fromEmail={email.fromEmail}
            subject={email.subject}
            threadId={email.threadId}
            loadMail={loadMail}
          />
        ))}
      </div>
    </div>
  );
}

function Mail({
  fromEmail,
  subject,
  threadId,
  loadMail,
}: {
  fromEmail: string;
  subject: string;
  threadId: number;
  loadMail: (threadId: number) => void;
}) {
  const trimSubject = (subject: string, wordCount: number) => {
    const words = subject.split(" ");
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(" ") + " ...";
    }
    return subject;
  };
  const handleMailClick = () => {
    loadMail(threadId);
  };

  return (
    <div
      className="border-t border-[#E0E0E0] dark:border-[#2B2F33] mx-6 py-3 cursor-pointer"
      onClick={handleMailClick}
    >
      <div>
        <div className="flex justify-between">
          <div className="text-black dark:text-white text-sm font-medium">{fromEmail}</div>
          <div className="text-[#919EAB] dark:text-[#919EAB] text-xs font-light pr-3">Mar 7</div>
        </div>
        <div className="py-1 text-gray-700 dark:text-[#E1E0E0] text-sm font-normal">
          {trimSubject(subject, 7)}
        </div>
        <div className="flex space-x-2 mt-1">
          <div className="bg-[#F0F0F0] dark:bg-[#222426] px-3 py-1 rounded-full text-[#57E0A6] text-xs flex items-center">
            <GoDotFill className="mr-1 text-sm" />
            Interested
          </div>
          <div className="flex items-center bg-[#F0F0F0] dark:bg-[#222426] px-3 py-1 rounded-full text-[#000] dark:text-white text-xs">
            <IoIosSend className="mr-1 text-sm" />
            Campaign Name
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllInbox;
