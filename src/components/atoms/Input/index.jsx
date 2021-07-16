import React from "react";
import { RequiredField } from "../";

export const Input = ({className, ...props}) => {

  return (
    <div className="framed-item relative">
      <input {...props} className={`input ${className || ''}`} />
      {props.required && (
        <RequiredField />
      )}
    </div>
  );
}