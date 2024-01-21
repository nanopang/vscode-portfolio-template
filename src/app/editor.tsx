import React, { FC, PropsWithChildren } from "react";

// a array of numbers from 1 to 100

const Editor: FC<PropsWithChildren & { numberOfLines?: number }> = ({ children, numberOfLines = 0 }) => {
  return (
    <div className="bg-editor flex overflow-auto mt-4">
      <div className="flex flex-col items-end text-grey text-sm w-[4%] mr-[3%]">
        {Array.from(Array(numberOfLines).keys()).map(number => (
          <div key={number}>{number + 1}</div>
        ))}
      </div>
      <div className="flex-1 text-grey">{children}</div>
    </div>
  );
};

export default Editor;
