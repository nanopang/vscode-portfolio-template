import Icons from "@/assets/icons";
import clsx from "clsx";
import React from "react";

const paths: string[] = ["src", "app", "tabs.tsx"];

const tab = "pl-6 pr-2 py-2 bg-dark flex justify-center items-center border-r border-r-dark-grey border-b border-b-dark-grey pt-2";
const tabActive = "pt-1 border-t-2 border-t-primary border-b-0 bg-editor font-semibold";

const Tabs = () => {
  const isScrolled = true;

  return (
    <div className="">
      <div className="flex flex-row flex-warp bg-dark text-white overflow-x-auto">
        <div className={clsx(tab, tabActive)}>
          <span className="text-sm">hello.md</span>
          <div className="hover:bg-[#333434] cursor-pointer p-[3px] ml-2 rounded">
            <Icons name="close" className="text-[0.8em]" />
          </div>
        </div>
        <div className={clsx(tab)}>
          <span className="text-sm">hello.md</span>
          <div className="hover:bg-[#333434] cursor-pointer p-[3px] ml-2 rounded">
            <Icons name="close" className="text-[0.8em]" />
          </div>
        </div>
      </div>
      <div className={clsx("border-t border-t-dark-grey mt-[-1px]")}>
        <div className="text-grey-white flex items-center text-sm space-x-1 ml-4 mt-1">
          {paths.map((path, index) => {
            return (
              <React.Fragment key={index}>
                <span className="text-grey-white hover:text-white cursor-pointer">{path}</span>
                {index !== paths.length - 1 && <Icons name="chevron-right" className="text-[1em]" />}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
