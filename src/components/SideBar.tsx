import { useState } from "react";
import { RiHome5Fill, RiMailFill, RiUserSearchLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { SiElasticstack } from "react-icons/si";
import { FaInbox } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";

function SideBar({ onMenuItemClick }: any) {
  const [selectedItem, setSelectedItem] = useState('/');

  const handleMenuItemClick = (path: string) => {
    setSelectedItem(path);
    onMenuItemClick(path);
  };

  return (
    <div className="dark:bg-[#1c1c1f] bg-white overflow-y-scroll no-scrollbar h-screen w-16 flex flex-col justify-between items-center py-4 border-r-2 dark:border-[#343A40] border-[#E0E0E0] left-0 top-0 fixed z-10">
      <div className="rounded-[2px]">
        <img src="https://app.reachinbox.ai/assets/logo.svg" className="h-10 mb-8 rounded-[2px] object-left" alt="Logo" />
      </div>
      <div className="text-[#AEAEAE] text-[28px] space-y-8">
        <div className={`cursor-pointer p-2 ${selectedItem === '/' ? 'bg-gray-600 text-white rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/')}>
          <RiHome5Fill />
        </div>
        <div className={`cursor-pointer p-2 ${selectedItem === '/search' ? 'bg-gray-600 text-white rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/search')}>
          <RiUserSearchLine />
        </div>
        <div className={`cursor-pointer p-2 ${selectedItem === '/mail' ? 'bg-gray-600 text-white rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/mail')}>
          <RiMailFill />
        </div>
        <div className={`cursor-pointer p-2 ${selectedItem === '/send' ? 'bg-gray-600 text-white rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/send')}>
          <IoIosSend />
        </div>
        <div className={`cursor-pointer p-2 ${selectedItem === '/stack' ? 'bg-gray-600 text-white rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/stack')}>
          <SiElasticstack />
        </div>
        <div className={`cursor-pointer p-2 ${selectedItem === '/inbox' ? 'bg-gray-600 text-white rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/inbox')}>
          <FaInbox />
        </div>
        <div className={`cursor-pointer p-2 ${selectedItem === '/stacks' ? 'bg-gray-600 text-white rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/stacks')}>
          <IoStatsChartSharp />
        </div>
      </div>
      <div 
        className="w-[48px] h-[56px] p-[12px_8px] bg-gray-700 opacity-0 rounded-[2px_0px_0px_0px]">
        <img src="https://example.com/path-to-your-profile-image.jpg" className="rounded-full h-full w-full" alt="Profile" />
      </div>
    </div>
  );
}

export default SideBar;
