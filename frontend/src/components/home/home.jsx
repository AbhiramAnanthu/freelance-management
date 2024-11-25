import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BsBuildingFill } from "react-icons/bs";
function Home() {
  return (
    <div className="overflow-x-hidden">
      <header className="flex flex-row justify-between items-center w-full h-1/2 px-4 py-3">
        <div className="text-4xl">collabZone</div>
        <a href="/login">
          <button className="text-2xl">Login</button>
        </a>
      </header>
      <main className="w-screen border py-3 border-gray-900/40">
        <div className="text-center flex flex-col justify-center items-center h-[600px]">
          <h1 className="text-4xl lg:text-6xl p-2">Welcome to collabZone</h1>
          <div className="text-gray-800/100 py-5 mt-2 w-3/4">
            "Empowering Connections, Building Success" <br /> Discover a
            platform where talented freelancers meet visionary employers. Post
            projects, find skilled professionals, and collaborate seamlessly to
            bring your ideas to life. Whether you're hiring or seeking your next
            gig, we've got you covered!
          </div>
        </div>
      </main>
      <footer className="w-screen flex flex-col items-center justify-evenly p-4">
        {" "}
        <div className="text-lg font-bold mb-4">Contacts</div>{" "}
        <div className="flex flex-col lg:flex-row gap-4-t pt-4 w-full lg:justify-center">
          {" "}
          <div className="flex flex-col lg:flex-row items-center justify-center py-2 px-10  lg:py-0">
            {" "}
            <FaPhone className="text-lg" />{" "}
            <span className="px-2 text-center">+91 8547376353</span>{" "}
          </div>{" "}
          <div className="flex flex-col lg:flex-row items-center justify-center py-2 px-10 lg:py-0">
            {" "}
            <MdOutlineMail className="text-lg" />{" "}
            <span className="px-2 text-center">abhiramajithr@gmail.com</span>{" "}
          </div>{" "}
          <div className="flex flex-col lg:flex-row items-center justify-center py-2 px-10 lg:py-0">
            {" "}
            <BsBuildingFill className="text-lg" />{" "}
            <span className="px-2 text-center">
              {" "}
              123 Main Street, Apt 4B, Springfield, IL 62704, United States{" "}
            </span>{" "}
          </div>{" "}
        </div>{" "}
      </footer>
    </div>
  );
}

export default Home;
