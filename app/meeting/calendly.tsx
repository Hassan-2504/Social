"use client";

import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="w-full ">
      <InlineWidget
        styles={{ height: "1000px" }}
        url="https://calendly.com/hassanfarooq2504/apex-social-solutions"
      />
    </div>
  );
};

export default Calendly;
