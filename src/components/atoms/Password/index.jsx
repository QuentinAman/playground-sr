import React, { useState } from 'react';
import { Input, Icon } from '../';

export const Password = ({ ...props }) => {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <div className="relative w-full">
            <Input
                {...props}
                type={isHidden ? 'password' : 'text'}
                className="pr-6"
            />
            <Icon
                className="absolute right-3.5 top-2 cursor-pointer"
                src={isHidden ? 'hiddenSymbol' : 'shownSymbol'}
                onClick={() => setIsHidden(!isHidden)}
            />
        </div>
    );
};
