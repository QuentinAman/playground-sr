import React from 'react';
import { Icon } from '../Icon';

export const ClipBoardText = ({text, ...props }) => {

    return (
        <div className="flex items-center" {...props}>
            <a className="mr-10 font-thin text-xs" href={text}>{text}</a>
            <Icon src="clipboard" className="mr-2" width="12px" onClick={() => {
                const input = document.createElement("input")
                input.value = text;
                document.body.appendChild(input)
                input.select()
                document.execCommand("copy")
                input.remove()
            }}/>
        </div>
    )
};
