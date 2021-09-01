import React from 'react';
import { Button } from '../../atoms';
import { Card } from '../../molecules';

/**
 * Component slot
 * @component
 *
 * @example
 *   <Slot
        status="available"
        hours="14h00 - 14h15"
        onClick={() => console.log('available')}
    />
 *
 * @type {React.FC<{
 *  status: "available"|"unavailable"|"waiting"|"busy"|"confirmed",
 *  title: String,
 *  bgColor: String,
 *  textColor?: String,
 *  className?: String,
 *  icon: String,
 *  subTitle: String,
 *  description: String,
 *  logoOrganizer: [String]
 */
export const AreaCard = ({
    title,
    bgColor,
    textColor = 'black',
    className,
    icon,
    subTitle,
    description,
    logoOrganizer = [],
    ...props
}) => {
    return (
        <Card
            {...props}
            className={className || ''}
            title={title}
            bgColor={bgColor}
            textColor={textColor}
            icon={icon}
        >
            <h3 className="mb-4 font-semibold">{subTitle}</h3>
            <p className="mb-3 text-sm">{description}</p>
            <Button className="mb-3">Visiter</Button>
            <div className="flex">
                {logoOrganizer.map((logo) => {
                    return (
                        <img
                            className="mr-6"
                            src={`/images/organizers/${logo}`}
                        />
                    );
                })}
            </div>
        </Card>
    );
};
