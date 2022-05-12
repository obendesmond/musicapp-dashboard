import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function Index() {
  return (
    <>
      <div className="hidden bg-myDark h-[auto] w-[100%] min-h-[100vh] md:flex">
        <div className="flex-[0.2]">
          <LeftSection />
        </div>
        <div className="flex-[0.8]">
          <RightSection />
        </div>
      </div>
      <div className="block md:hidden">
        <p className="text-myDark text-3xl">
          This app is not yet responsive for this device, get an MD and above
          (LG,XL...)
        </p>
      </div>
    </>
  );
}
