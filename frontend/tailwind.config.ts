import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF571A',
                background: '#1E252B',
                bgColor2: '#f8ddba',
                bgColor3: '#a59075',
                dark3: '#262D34',
                dark4: '#394047',
                tag: '#C5D0E6',
                textColor: '#7a6448',
                textColor2: '#604e38',
            },
            boxShadow: {
                'inner-reverse': 'inset 0px -1px 1px rgba(0, 0, 0, 0.1)',
            },
            animation: {
                'spin-slow': 'spin 5s linear infinite reverse',
            },
        },
    },
    plugins: [],
} satisfies Config;
