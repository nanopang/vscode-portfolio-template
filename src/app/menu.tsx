"use client";

import Icons from "@/assets/icons";
import React from "react";
import clsx from "clsx";
import { Tooltip } from "@chakra-ui/react";

const btn = "text-grey hover:text-grey-white cursor-pointer p-3 ";
const btnActive = "text-grey-white border-l-2 border-l-primary";

const Menu = () => {
  return (
    <div className="left-0 flex h-full w-[20%] border border-dark-grey bg-dark">
      <div className="text-grey border-r border-dark-grey flex flex-col items-stretch">
        <Tooltip hasArrow placement="right" label="Explorer">
          <div className={clsx(btn, btnActive)}>
            <Icons name="files" />
          </div>
        </Tooltip>

        <Tooltip hasArrow placement="right" label="Search">
          <div className={btn}>
            <Icons name="search" />
          </div>
        </Tooltip>

        <div className="flex-1 flex flex-col justify-center items-center">
          <Tooltip hasArrow placement="right" label="About Me">
            <div className={`${btn}`}>
              <Icons name="account" />
            </div>
          </Tooltip>
          <Tooltip hasArrow placement="right" label="Linkedin">
            <div className={btn}>
              <Icons name="linkedin" />
            </div>
          </Tooltip>

          <Tooltip hasArrow placement="right" label="Github">
            <div className={btn}>
              <Icons name="github" />
            </div>
          </Tooltip>

          <Tooltip hasArrow placement="right" label="Contact">
            <div className={btn}>
              <Icons name="mail" />
            </div>
          </Tooltip>
        </div>

        <div className="flex-[0.5] flex flex-col justify-end items-center">
          <Tooltip hasArrow placement="right" label="Setting">
            <div className={clsx(btn)}>
              <Icons name="setting" />
            </div>
          </Tooltip>
        </div>
      </div>
      <div className="text-grey-white flex-1 text-xs font-medium">
        <div className="py-3 px-6">EXPLORER</div>
      </div>
    </div>
  );
};

export default Menu;
