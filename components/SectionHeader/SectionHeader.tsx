import React from "react";

const SectionHeader = ({headerClasses, subheadClasses, header , subheader, headerSpan, headerSpanClasses}: {headerClasses?: string, subheadClasses?: string, header: string, subheader: string, headerSpan?: string, headerSpanClasses?: string}) => {
  return (
    <div>
      <h2 className={`text-2xl font-bold text-center ${headerClasses}`}>{header} <span className={`${headerSpanClasses}`}>{headerSpan}</span></h2>
      <p className={`text-center mt-2 ${subheadClasses}`}>
        {subheader}
      </p>
    </div>
  );
};

export default SectionHeader;
