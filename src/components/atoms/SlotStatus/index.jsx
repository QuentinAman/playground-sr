import React from 'react';
import { Status } from '../SlotStatus/status';
import { InformationTag } from '..';

/**
 * Component slot status
 * @component
 *
 * @example
 *  <SlotStatus status="available" />
 *
 * @type {React.FC<{
 *  status: "available"|"unavailable"|"waiting"|"busy"|"confirmed",
 * }>}
 */
export const SlotStatus = ({ status = 'unavailable' }) => {
    const statusInfos = Status[status] || Status['unavailable'];
    return (
        <InformationTag
            color={statusInfos.color || 'white'}
            icon={statusInfos.icon || null}
            text={statusInfos.text}
        />
    );
};
