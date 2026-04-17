import React from "react";
export default function Navbar() {
    return (
      <div className="fixed top-0 w-full z-50 backdrop-blur bg-black/30">
        <div className="max-w-6xl mx-auto flex justify-between p-4">
          {/* <h1 className="font-semibold">Rohit N</h1> */}
          <div className="space-x-6 text-sm">
            <a href="#projects">Work</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    );
  }