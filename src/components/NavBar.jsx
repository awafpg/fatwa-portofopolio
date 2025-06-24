import React from "react";

const NavBar = () => {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="bg-black flex justify-between items-center px-[50px] py-3">
        <div className="flex items-center gap-10">
          <a href="/">
            <img src="/Logo.jpg" alt="nav-logo" className="h-10" />
          </a>
          <a
            href="/"
            className="text-white text-2xl font-bold hover:text-[#eb374e]"
          >
            Fatwa Penata Gama
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/contact"
            className="bg-[#eb374e] text-white px-3 py-2 rounded hover:bg-[#d10621]"
          >
            Contact me
          </a>
          <a
            href="/contact"
            className="bg-[#eb374e] text-white px-3 py-2 rounded hover:bg-[#d10621] hidden"
          >
            <span className="material-symbols-outlined">support_agent</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
