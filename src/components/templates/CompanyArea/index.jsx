import React from 'react';

export const CompanyArea = ({ children, tag, heading, color, ...props }) => {
    return (
        <div
            className={`max-w-meetingCard framed-item w-full flex flex-col overflow-hidden`}
        ></div>
    );
};
