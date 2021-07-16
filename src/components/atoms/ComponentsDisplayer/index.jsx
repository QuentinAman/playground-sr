import React from "react";

export const ComponentsDisplayer = ({ title, children, ...props }) => (
  <div {...props} className="relative grid grid-cols-auto-fit justify-items-center gap-5 border-black border-2 rounded-2xl p-5 m-5 mt-10">
    <p className="absolute -top-5 left-5 bg-white px-3 text-2xl font-bold">{title}</p>
    {children}
  </div>
)