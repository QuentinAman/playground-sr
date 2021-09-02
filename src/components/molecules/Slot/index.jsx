import React from 'react';
import { Status } from './status';
import { SlotStatus } from '../../atoms/SlotStatus';

/**
 * Component slot
 * @component
 *
 * @example
 *  <Slot
        status="available"
        hours="14h00 - 14h15"
        onClick={() => console.log('available')}
    />
 *
 * @type {React.FC<{
 *  status: "available"|"unavailable"|"waiting"|"busy"|"confirmed",
 *  className?: string,
 *  hours: string,
 *  name: string,
 *  onClick: Function
 */
export const Slot = ({ status, hours, name, onClick, className, ...props }) => {
    const statusInfos = Status[status] || Status['unavailable'];

    return (
        <div
            {...props}
            className={`${className || ''} cbg-${
                statusInfos.color
            } max-w-slotCard framed-item py-2 px-1 cursor-pointer flex flex-col items-center text-center`}
            onClick={onClick}
        >
            <p className="text-sm">{hours}</p>
            <p className="text-sm my-2.5">{name}</p>
            <SlotStatus status={status} />
        </div>
    );
};
