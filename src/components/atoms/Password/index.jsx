import React, { useState } from 'react';
import { Input, Icon } from '../';

/**
 * Component password
 * @component
 *
 * @example
 *   <Password placeholder="Password" required/>
 *
 * @type {React.FC<{
 *  placeholder: String,
 *  className?: String,
 *  required?: Boolean
 * }>}
 */
export const Password = ({ placeholder, className, ...props }) => {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <div className="relative w-full">
            <Input
                {...props}
                placeholder={placeholder}
                style={{ paddingRight: '2em' }}
                type={isHidden ? 'password' : 'text'}
                className={`${className || ''} pr-6`}
            />
            <Icon
                className="absolute right-3.5 top-2 cursor-pointer"
                src={isHidden ? 'hiddenSymbol' : 'shownSymbol'}
                onClick={() => setIsHidden(!isHidden)}
            />
        </div>
    );
};
