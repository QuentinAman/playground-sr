import React from 'react';
import { InformationTag } from '../../atoms/';

export const ColorCard = ({ children, tag, heading, color, ...props }) => {
    return (
        <div
            className={`max-w-meetingCard framed-item w-full flex flex-col overflow-hidden`}
        >
            <div className={`bg-${color || 'bg-gray-400'} p-2`}>
                {tag && <InformationTag text={tag} />}
                <h1 className="text-xl normal-case font-semibold mt-8">
                    {heading}
                </h1>
            </div>
            <div className="bg-white p-2">{children}</div>
        </div>
    );
};
