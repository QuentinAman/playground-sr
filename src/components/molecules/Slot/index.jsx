import React from 'react';
import  { Status } from './status';
import { SlotStatus } from '../../atoms/SlotStatus';

export const Slot = ({status, hours, name, onClick, ...props}) => {

    const statusInfos = Status[status] || Status['unavailable']

    return (
            <div className={`cbg-${statusInfos.color} max-w-slotCard framed-item-p cursor-pointer flex flex-col items-center text-center`}  onClick={onClick}>
                <p>{hours}</p>
                <p className={"my-2.5"}>{name}</p>
                <SlotStatus status={status} />
            </div>
)};
