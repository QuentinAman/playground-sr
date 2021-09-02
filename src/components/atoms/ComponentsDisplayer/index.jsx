import React from 'react';

/**
 * Component component displayer
 * @component
 *
 * @example
 *  <ComponentsDisplayer title="Boutons">
        <Button>S'inscrire</Button>
        <Button color="yellow">S'inscrire</Button>
        <Button color="red">S'inscrire</Button>
        <Button color="green">S'inscrire</Button>
    </ComponentsDisplayer>
 *
 * @type {React.FC<{
 *  title?: string,
 *  children: React.ReactNode,
 *  className?: string
 * }>}
 */
export const ComponentsDisplayer = ({
    title,
    children,
    color = "white",
    className,
    columns = 'auto-fit',
    ...props
}) => (
    <div
        {...props}
        className={`bg-${color} relative grid grid-cols-${columns} justify-items-center gap-5 border-black border-2 rounded-2xl p-5 m-5 mt-10 ${
            className || ''
        }`}
    >
        <p className="absolute -top-5 left-5 bg-white px-3 text-2xl font-bold">
            {title}
        </p>
        {children}
    </div>
);
