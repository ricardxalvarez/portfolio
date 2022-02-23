import birth from './img/birth.png'
import cart from './img/cart.png'
import cocktails from './img/cocktails.png'
import grocery from './img/grocery.png'
import lama from './img/lama.png'
import submenu from './img/submenu.png'
import history from './img/history.png'
import calculus from './img/calculus.png'
import politics from './img/politics.png'
import german from './img/german.png'
import head from './img/head.png'

export const languages = [
    {
        id: 1,
        title: 'html',
        img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
                <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
                <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
                <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"/>
                <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"/>
            </svg>
    },
    {
        id: 2,
        title: 'css',
        img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
                <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52"/>
                <path fill="#30a9dc" d="M226 472l149-41 35-394H226"/>
                <path fill="#ecedee" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"/>
                <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"/>
            </svg>
    },
    {
        id: 3,
        title: 'javascript',
        img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">
                <rect width="630" height="630" fill="#f7df1e"/>
                <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/>
            </svg>
    },
    {
        id: 4,
        title: 'react',
        img: <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 32 32"><g transform="matrix(.05696 0 0 .05696 .647744 2.43826)" fill="none" fill-rule="evenodd"><circle r="50.167" cy="237.628" cx="269.529" fill="#00d8ff"/><g stroke="#00d8ff" stroke-width="24"><path d="M269.53 135.628c67.356 0 129.928 9.665 177.107 25.907 56.844 19.57 91.794 49.233 91.794 76.093 0 27.99-37.04 59.503-98.083 79.728-46.15 15.29-106.88 23.272-170.818 23.272-65.554 0-127.63-7.492-174.3-23.44-59.046-20.182-94.61-52.103-94.61-79.56 0-26.642 33.37-56.076 89.415-75.616 47.355-16.51 111.472-26.384 179.486-26.384z"/><path d="M180.736 186.922c33.65-58.348 73.28-107.724 110.92-140.48C337.006 6.976 380.163-8.48 403.43 4.937c24.248 13.983 33.042 61.814 20.067 124.796-9.8 47.618-33.234 104.212-65.176 159.6-32.75 56.788-70.25 106.82-107.377 139.272-46.98 41.068-92.4 55.93-116.185 42.213-23.08-13.3-31.906-56.92-20.834-115.233 9.355-49.27 32.832-109.745 66.8-168.664z"/><path d="M180.82 289.482C147.075 231.2 124.1 172.195 114.51 123.227c-11.544-59-3.382-104.11 19.864-117.566 24.224-14.024 70.055 2.244 118.14 44.94 36.356 32.28 73.688 80.837 105.723 136.173 32.844 56.733 57.46 114.21 67.036 162.582 12.117 61.213 2.31 107.984-21.453 121.74-23.057 13.348-65.25-.784-110.24-39.5-38.013-32.71-78.682-83.253-112.76-142.115z"/></g></g></svg>
    },
]

export const projects = [
    {
        id: 0,
        title: 'LAMA',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis iure laboriosam nesciunt repudiandae quaerat quam saepe aspernatur voluptatem ducimus fugiat, quod dicta libero consequatur deserunt autem odio itaque earum? Blanditiis!',
        img: lama,
        link: 'https://lama-e-commerce.netlify.app/',
        github: 'https://github.com/ricardxalvarez/e-commerce',
    },
    {
        id: 1,
        title: 'COCKTAILS',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis iure laboriosam nesciunt repudiandae quaerat quam saepe aspernatur voluptatem ducimus fugiat, quod dicta libero consequatur deserunt autem odio itaque earum? Blanditiis!',
        img: cocktails,
        link: 'https://ricardoscocktails.netlify.app/',
        github: 'https://github.com/ricardxalvarez/cocktails',
    },
    {
        id: 2,
        title: 'SUBMENUS',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis iure laboriosam nesciunt repudiandae quaerat quam saepe aspernatur voluptatem ducimus fugiat, quod dicta libero consequatur deserunt autem odio itaque earum? Blanditiis!',
        img: submenu,
        link: 'https://submenusbyricardo.netlify.app/',
        github: 'https://github.com/ricardxalvarez/submenus',
    },
    {
        id: 3,
        title: 'GROCERY BUD',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis iure laboriosam nesciunt repudiandae quaerat quam saepe aspernatur voluptatem ducimus fugiat, quod dicta libero consequatur deserunt autem odio itaque earum? Blanditiis!',
        img: grocery,
        link: 'https://grocerybudbyricardo.netlify.app/',
        github: 'https://github.com/ricardxalvarez/grocerybud',
    },
    {
        id: 4,
        title: 'SHOPPING CART',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis iure laboriosam nesciunt repudiandae quaerat quam saepe aspernatur voluptatem ducimus fugiat, quod dicta libero consequatur deserunt autem odio itaque earum? Blanditiis!',
        img: cart,
        link: 'https://shoppingcartbyricardo.netlify.app/',
        github: 'https://github.com/ricardxalvarez/cart',
    },
    {
        id: 5,
        title: 'BIRTHDAY REMINDER',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis iure laboriosam nesciunt repudiandae quaerat quam saepe aspernatur voluptatem ducimus fugiat, quod dicta libero consequatur deserunt autem odio itaque earum? Blanditiis!',
        img: birth,
        link: 'https://remindmybirthday.netlify.app/',
        github: 'https://github.com/ricardxalvarez/birthdayreminder',
    },
]

export const courses = [
    {
        title: 'HTML Full Course',
        link: 'https://youtu.be/7mdEvKyLoYM',
        shortcut: 'HTML',
        given: 'Simplilearn'
    },
    {
        title: 'Curso de HTML5 desde CERO (Completo)',
        link: 'https://youtu.be/kN1XP-Bef7w',
        shortcut: 'HTML',
        given: 'Soy Dalto',
    },
    {
        title: 'Curso de CSS desde CERO (Completo)',
        link: 'https://youtu.be/OWKXEJN67FE',
        shortcut: '',
        given: 'Soy Dalto',
    },
    {
        title: 'Curso de JAVASCRIPT desde CERO (Completo) - Nivel JUNIOR',
        link: 'https://youtu.be/z95mZVUcJ-E',
        shortcut: '',
        given: 'Soy Dalto',
    },
    {
        title: 'Curso de JAVASCRIPT desde CERO (Completo) - Nivel MID LEVEL',
        link: 'https://youtu.be/xOinGb2MZSk',
        shortcut: '',
        given: 'Soy Dalto',
    },
    {
        title: 'Curso de JAVASCRIPT desde CERO (Completo) - Nivel Master',
        link: 'https://youtu.be/EbMi1Qj4rVE',
        shortcut: '',
        given: 'Soy Dalto',
    },
    {
        title: 'Angular Tutorial for Beginners: Learn Angular & TypeScript',
        link: 'https://youtu.be/k5E2AVpwsko',
        shortcut: '',
        given: 'Programming with Mosh',
    },
    {
        title: 'Full React Course 2020 - Learn Fundamentals, Hooks, Context API, React Router, Custom Hooks',
        link: 'https://youtu.be/4UZrsTqkcW4',
        shortcut: '',
        given: 'freeCodeCamp.org',
    },
    {
        title: 'Code 15 React Projects - Complete Course',
        link: 'https://youtu.be/a_7Z7C_JCyo',
        shortcut: '',
        given: 'freeCodeCamp.org',
    },
]

export const hobbie = [
    {
        title: 'Calculus',
        img: calculus,
    },
    {
        title: 'History',
        img: history,
    },
    {
        title: 'Politics',
        img: politics,
    },
    {
        title: 'German Learning',
        img: german,
    },
    {
        title: 'Listening to Music',
        img: head,
    },
]