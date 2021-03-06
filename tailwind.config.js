module.exports = {
    theme: {
        extend: {
            gridTemplateColumns: {
                'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))',
                'auto-fit-1': 'repeat(auto-fit, minmax(10em, 1fr))',
                'list-element': 'max-content 1fr max-content',
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
                slotCard: '11rem',
                meetingCard: '22rem',
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
                'max-h': 'max-height',
                tooltip: 'max-height opacity',
            },
            scale: {
                30: '.8',
            },
        },
    },
};
