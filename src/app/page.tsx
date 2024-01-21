"use client";

import React from "react";

const Page = () => {
  const [state, setState] = React.useState(false);

  return (
    <div className="text-white">
      <div>Hello there, this page is still in progress.... 🦧</div>
    </div>
  );
};

export default Page;

const Test = ({ name }: any) => {
  const [state, setState] = React.useState(0);

  return <div onClick={() => setState(state + 1)}>hello</div>;
};
