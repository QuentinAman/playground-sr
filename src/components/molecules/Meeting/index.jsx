import React from 'react';
import  { Status } from './status';
import { SlotStatus, Button } from '../../atoms/'

export const Meeting = ({status, ...props}) => {

    const statusInfos = Status[status]

    return (
            <div className={`max-w-meetingCard framed-item flex flex-col overflow-hidden`}>
                <div className={`cbg-${statusInfos.color} p-2 prevent-hover font-bold grid grid-cols-1 gap-10`}>
                    <SlotStatus status={statusInfos.text} />
                    <p className="text-xl">Lorem Ipsum - Lorem Ipsum</p>
                </div>
                <div className={"bg-white p-2 grid grid-cols-2 gap-2"}>
                    <p className="col-span-2 font-bold">Date - Hour</p>
                    <Button className={`col-span-${statusInfos.grid}`}>VOIR SON CV</Button>
                    <Button color='red' className={`col-start-${statusInfos.start} col-end-${statusInfos.end}`}>ANNULER</Button>
                    <Button color={`${statusInfos.btnColor}`} className={`col-start-${statusInfos.start2} col-end-${statusInfos.end2}`}>{statusInfos.btnText}</Button> 
                </div>
            </div>
)};
