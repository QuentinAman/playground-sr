import React from 'react';
import { Icon } from '../Icon';

export const DangerLink = ({ className = "", ...props }) => (
    <div className={`flex text-xs ${className}`}>
        <Icon src='danger' className="mr-2" width="10px"/>
        <button
            {...props}
            className="underline"
        />
    </div>
);
