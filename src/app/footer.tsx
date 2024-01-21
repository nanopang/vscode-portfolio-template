import Icons from "@/assets/icons";
import React from "react";

const Footer = () => {
  return (
    <div className="flex bg-dark text-[0.8em] text-grey-white items-center font-semibold">
      <div className="bg-primary px-3 py-1 flex items-center">
        <Icons name="remote" className=" text-white text-[0.8em]" />
        <span className="text-white ml-1">Nanopang.dev</span>
      </div>
      <div className="flex-1 flex items-center space-x-3">
        <div className="flex items-center ml-1">
          <Icons name="source-control" className="mx-1 text-[0.8em]" />
          <span className="">main</span>
          <Icons name="sync" className="mx-1 text-[0.8em]" />
        </div>

        <div className="flex space-x-1 items-center">
          <Icons name="error" />
          <span>3</span>
          <Icons name="warning" />
          <span>3</span>
          <Icons name="info" />
          <span>3</span>
        </div>
        <div className="flex-1 flex justify-end space-x-4 font pr-6">
          <div>Spaces: 2</div>
          <div>UTF-8</div>
          <div>LF</div>
          <div>MEME Level: 999</div>
          <div>Powered by: Doge Engine™</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
