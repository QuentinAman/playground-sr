import React from 'react';
import { Button } from '../../atoms';
import { Card } from '../../molecules';

export const AreaCard = ({
    title,
    bgColor,
    textColor = 'black',
    icon,
    subTitle,
    description,
    logoOrganizer = [],
}) => {
    return (
        <Card title={title} bgColor={bgColor} textColor={textColor} icon={icon}>
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
