import React from 'react';

export const Divider = ({ children, right, bottom, ...props }) => {
    return (
        <div className={`w-full flex ${right ? "flex-row-reverse" : ""} gap-3`}>
            {children}
            <div className={`border-solid w-full border-b self-${bottom ? "end" : "center"} border-black`}>
            </div>
        </div>
    );
};
