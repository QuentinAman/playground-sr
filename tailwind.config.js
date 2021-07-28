module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    theme: {
        extend: {
            gridTemplateColumns: {
                'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))',
            },
            height: {
                max: 'max-content',
            },
            minWidth: {
                14: '14em',
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
            },
            transitionProperty: {
                tooltip: 'max-height opacity',
            },
        },
    },
};
