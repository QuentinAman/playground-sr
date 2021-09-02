import React from 'react';
import { Icon } from '../Icon';

/**
 * Component link
 * @component
 *
 * @example
 *  <Link href="localhost/home" isUnique={true} color="blue">Go to home</Link>
 *
 * @type {React.FC<{
 *  href: string,
 *  isUnique: Boolean,
 *  color: "blue"|"darkred"|"lightgray"|"gray"|"white",
 *  className?: string,
 *  text?: string,
 *  children: React.ReactNode
 * }>}
 */
export const Link = ({
    href,
    color = 'lightgray',
    children,
    className,
    isUnique = false,
    ...props
}) => (
    <a
        {...props}
        className={`${className || ''} link-${color} flex items-center px-1 ${
            isUnique
                ? 'uppercase font-semibold h-max py-1 text-xs'
                : 'font-bold w-max text-sm'
        }`}
        href={href}
        target="_blank"
    >
        {children}
        {isUnique && <Icon src="link-arrow" className="ml-2" width="12px" />}
    </a>
);
