import React, { useState } from 'react';
import { Icon } from '../';

export const InputFile = ({ color, title, className }) => {
    const [fileNumber, setFileNumber] = useState(0);

    return (
        <div className={className || ''}>
            <input
                onChange={(e) => setFileNumber(e.currentTarget.files.length)}
                id="input-file"
                className="w-0 absolute pointer-events-none"
                type="file"
            />
            <label
                htmlFor="input-file"
                className={`${
                    color ? `cbg-${color}` : 'cbg-white'
                } button framed-item-p font-bold uppercase flex justify-center select-none w-full`}
            >
                <div className="flex text-xs">
                    {fileNumber == 0 ? (
                        <>
                            <Icon src="upload" className="mr-2" width="10px" />
                            {title || 'Choisir un fichier'}
                        </>
                    ) : (
                        <>
                            <Icon src="checked" className="mr-2" width="12px" />
                            1 fichier sélectionné
                        </>
                    )}
                </div>
            </label>
        </div>
    );
};
