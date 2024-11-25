import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
// import RecentWorksComp from "./recentWorks";
function FreeHome() {
  const [isSideOpen, setSideOpen] = useState(false);

  const closeSideBar = () => setSideOpen(false);

  const toggleSideBar = () => setSideOpen(!isSideOpen);
  return (
    <>
      <header className="flex flex-row justify-between items-center w-full h-1/2 px-4 py-3 border">
        <div className="flex flex-row justify-center items-center">
          <div className="flex justify-center items-center mr-2 px-2 cursor-pointer">
            <IoMdMenu className="w-6 h-6" onClick={toggleSideBar} />
          </div>
          <div className="text-3xl lg:text-4xl px-2">CollabZone</div>
        </div>
        <a href="/login">
          <button className="text-2xl">Logout</button>
        </a>
      </header>
      <SidePanel isOpen={isSideOpen} closeSideBar={closeSideBar} />
      <main>
        <div className="w-screen flex items-center justify-start px-4 py-2">
          <h1 className="text-4xl">DashBoard</h1>
        </div>
      </main>
    </>
  );
}

function SidePanel({ isOpen, closeSideBar }) {
  return (
    <div
      className={`fixed inset-y-0 left-0 bg-black text-white w-64 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50 flex flex-col items-center justify-start `}
    >
      <button className="ml-auto mr-4 mt-3" onClick={closeSideBar}>
        &times;
      </button>
      <div className="flex flex-col items-center h-3/4 justify-center">
        <div className="py-4">Account</div>
        <div className="py-4">Profile</div>
        <div className="py-4">History</div>
        <div className="py-4">Schedules</div>
        <div className="py-4">Payment history</div>
      </div>
    </div>
  );
}
export default FreeHome;
