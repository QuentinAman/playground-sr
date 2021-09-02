import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '../';

/**
 * Component tool tip
 * @component
 *
 * @example
 *  <Tooltip className="justify-self-start">
        Lorem ipsum
    </Tooltip>
 *
 * @type {React.FC<{
 *  className?: string,
 *  children: React.ReactNode
 * }>}
 */
export const Tooltip = ({ className, children, ...props }) => {
    const [isVisible, setIsVisible] = useState(false);
    const tooltipRef = useRef(null);
    let x, width;

    useEffect(() => {
        if (tooltipRef.current) {
            x = tooltipRef.current.getBoundingClientRect().x;
            width = tooltipRef.current.getBoundingClientRect().width;

            if (x < 0) {
                tooltipRef.current.style.left = Math.abs(x) + 20 + 'px';
                tooltipRef.current.style.textAlign = 'left';
            } else if (x + width > window.innerWidth) {
                tooltipRef.current.style.left =
                    window.innerWidth - (x + width + 5) + 'px';
                tooltipRef.current.style.textAlign = 'right';
            } else {
                tooltipRef.current.style.left = '50%';
                tooltipRef.current.style.textAlign = 'left';
            }
        }
    }, [tooltipRef.current]);

    return (
        <div
            {...props}
            className={`relative ${className || ''}`}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            <Icon className="cursor-pointer" src="tooltip" />
            <div
                ref={tooltipRef}
                className={`w-max opacity-0 top-8 px-4 transform transition-tooltip duration-300 -translate-x-2/4 py-2 max-w-xs border-1 border-black absolute z-50 bg-gray-50 rounded-xl ${
                    isVisible ? 'opacity-100' : ''
                }`}
            >
                <div
                    className={`overflow-auto transition-tooltip max-h-0 ${
                        isVisible ? 'max-h-64' : ''
                    }`}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
