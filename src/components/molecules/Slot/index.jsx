import React from 'react';
import { Status } from './status';
import { SlotStatus } from '../../atoms/SlotStatus';

/**
 * Component slot
 * @component
 *
 * @example
 *   <Slot
        status="available"
        hours="14h00 - 14h15"
        onClick={() => console.log('available')}
    />
 *
 * @type {React.FC<{
 *  status: "available"|"unavailable"|"waiting"|"busy"|"confirmed",
 *  className?: String,
 *  hours: String,
 *  name: String,
 *  onClick: Function
 */
export const Slot = ({ status, hours, name, onClick, className, ...props }) => {
    const statusInfos = Status[status] || Status['unavailable'];

    return (
        <div
            {...props}
            className={`${className || ''} cbg-${
                statusInfos.color
            } max-w-slotCard framed-item-p cursor-pointer flex flex-col items-center text-center`}
            onClick={onClick}
        >
            <p>{hours}</p>
            <p className={'my-2.5'}>{name}</p>
            <SlotStatus status={status} />
        </div>
    );
};
