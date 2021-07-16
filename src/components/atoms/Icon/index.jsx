import React from "react";

export const Icon = ({ src, width, ...props }) => (
  <img {...props} src={`/icons/${src}.svg`} width={width || "16px"} />
)