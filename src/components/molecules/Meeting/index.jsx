import React from 'react';
import { Status } from './status';
import { SlotStatus, Button } from '../../atoms/';

/**
 * Component button
 * @component
 *
 * @example
 *  <Button width="w-full" color="blue">My button</Button>
 *
 * @type {React.FC<{
 *  status: "available"|"unavailable"|"waiting"|"busy"|"confirmed",
 *  className?: string
 */
export const Meeting = ({ status, className, ...props }) => {
    const statusInfos = Status[status];

    return (
        <div
            {...props}
            className={`${
                className || ''
            } max-w-meetingCard framed-item w-full flex flex-col overflow-hidden`}
        >
            <div
                className={`cbg-${statusInfos.color} p-2 prevent-hover font-bold grid grid-cols-1 gap-10`}
            >
                <SlotStatus status={statusInfos.text} />
                <p className="text-xl">Lorem Ipsum - Lorem Ipsum</p>
            </div>
            <div className={'bg-white p-2 grid grid-cols-2 gap-2'}>
                <p className="col-span-2 font-bold">Date - Hour</p>
                <Button
                    width="w-full"
                    className={`col-span-${statusInfos.grid}`}
                >
                    VOIR SON CV
                </Button>
                <Button
                    width="w-full"
                    color="red"
                    className={`col-start-${statusInfos.start} col-end-${statusInfos.end}`}
                >
                    ANNULER
                </Button>
                <Button
                    width="w-full"
                    color={`${statusInfos.btnColor}`}
                    className={`col-start-${statusInfos.start2} col-end-${statusInfos.end2}`}
                >
                    {statusInfos.btnText}
                </Button>
            </div>
        </div>
    );
};
