module.exports = {
    theme: {
        extend: {
            gridTemplateColumns: {
                'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))',
            },
            height: {
                max: 'max-content',
            },
            width: {
                max: 'max-content',
            },
            maxHeight: {
                max: 'max-content',
            },
            minWidth: {
                14: '14em',
                17: '17rem',
                21: '21rem',
            },
            maxWidth: {
                94: '94%',
            },
            borderWidth: {
                1: '1px',
            },
            inset: {
                '4px': '4px',
                '3px': '3px',
                '2.5px': '2.5px',
            },
            transitionProperty: {
                tooltip: 'max-height opacity',
            },
            scale: {
                30: '.8',
            },
        },
    },
};
