import React from "react";

export const Status = {
    waiting: {
        btnColor: 'green',
        btnText: 'CONFIRMER',
        color: 'yellow',
        text: 'waiting',
        grid: '1',
        start: '1',
        end: '2',
        start2: '2',
        end2: '3',
    },
    busy: {
        btnColor: 'white',
        btnText: <div>ACCEDER A LA VISIO<br/><span className="font-normal text-sm normal-case">Dans 1 jour 14h 15m</span></div>,
        color: 'green',
        text: 'confirmed',
        grid: '1',
        start: '2',
        end: '3',
        start2: '1',
        end2: '3',
    },
};
