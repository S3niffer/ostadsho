/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                lightWhite: '#ffffff',
                lightSecondaryWhite: '#ededed',
                lightThirdWhite: '#f9f9f9',
                lightFourthWhite: '#f5f5f5',
                lightFifthhWhite: '#FFFFFF7A',
                Gray: '#4b515a',
                SecondaryGray: '#cccccc',
                ThirdGray: '#69727d',
                FourthGray: '#bababa',
                FifthGray: '#868686',
                darksixthGray: '#4b515a',
                darkseventhGray: '#717070',
                yellowColor: '#ffc737',
                main: '#52ac66',
                secnodryMain: '#6acc62',
                light_green: '#52AC661F',
                darkBlack: '#101214',
                darkSecondaryBlack: '#201c1c',
                darkThirdBlack: '#2b3034',
                darkFourthBlack: '#1A1D1F'
            },
            screens: {
                '2xs': '380px',
                'xs': '450px',
                'bml': '900px'
            },
            fontFamily: {
                yekaBakh: 'yekaBakh',
                yekaBakhBold: 'yekaBakhBold',
                yekaBakhLight: 'yekaBakhLight',
                yekaBakhHeavy: 'yekaBakhHeavy',
                danafa: 'danafa',
                danafaBold: 'danafaBold',
                RokhFaNumLight: 'RokhFaNumLight',
                RokhFaNumBold: 'RokhFaNumBold',
            },
        },
        container: {
            center: true,
            screens: {
                'sm': '640px',
                'md': '768px',
                'bml': '860px',
                'lg': '1024px',
                'xl': '1280px'
            }
        }
    },
    plugins: [],
}

