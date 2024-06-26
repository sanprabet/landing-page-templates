/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
    theme: {
        extend: {
            colors: {
                'main-green': '#122315',
                'secondary-green': '#54DD4A',
                'secondary-green-grey': '#8df382',

                'main-blue': '#001C30',
                'secondary-blue': '#01a9c1',
                'secondary-blue-grey': '#37B7C3',
                'white-cream': '#F3EDE4',
                'white-cream-light': '#f7f3ed',
            },
        },
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
};
