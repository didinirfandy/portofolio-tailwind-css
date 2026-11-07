module.exports = {
    content: ['index.html'],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '16px',
        },
        extend: {
            colors: {
                primary: '#22d3ee',
                secondary: '#64748b',
                secondarybg: '#a7b5c9',
                dark: '#0f172a',
                ink: '#07111f',
            },
            fontFamily: { display: ['Syne', 'sans-serif'], mono: ['DM Mono', 'monospace'] },
            boxShadow: { glow: '0 12px 40px rgba(34, 211, 238, 0.22)' },
            screens: {
                '2xl': '1320px',
            },
        },
    },
    plugins: [],
};
