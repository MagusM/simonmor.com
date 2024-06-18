import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from '../assets';

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'work',
        title: 'Work',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

const services = [
    {
        title: 'Web Developer',
        icon: web,
    },
    {
        title: 'React Native Developer',
        icon: mobile,
    },
    {
        title: 'Backend Developer',
        icon: backend,
    },
    {
        title: 'Content Creator',
        icon: creator,
    },
];

const technologies = [
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'Redux Toolkit',
        icon: redux,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'MongoDB',
        icon: mongodb,
    },
    {
        name: 'Three JS',
        icon: threejs,
    },
    {
        name: 'git',
        icon: git,
    },
    {
        name: 'figma',
        icon: figma,
    },
    {
        name: 'docker',
        icon: docker,
    },
];

const experiences = [
    {
        title: 'Senior Full Stack',
        company_name: 'Doorloop',
        icon: 'https://assets.website-files.com/5f073e32d304276cc8b4ff30/5fbc3a52d85118b32ac45bbd_Blue%20Emblem%20-%20Transparent%20Background.svg',
        iconBg: '#E6DEDD',
        iconSize: 'w-[80%] h-[80%]',
        date: '2022 - present',
        points: [
            'Developing and maintaining web applications using React.js, Express.js, TypeScript and other related technologies.',
            'Spearhead the development of the next-gen Doorloop app, elevating it from startup level to a corporate-standard product that is stable and profitable.',
            'Lead business-sensitive implementations and refactoring efforts within the startup environment.',
            'Mentor new developers, providing guidance and support to enhance team capabilities and performance.',
        ],
    },
    {
        title: 'Full Stack Team Leader',
        company_name: 'Carwiz',
        icon: 'https://ik.imagekit.io/carwiz/web-assets/carwiz_logo_2023.svg',
        iconBg: '#E6DEDD',
        iconSize: 'w-[80%] h-[80%]',
        date: '2020 - 2022',
        points: [
            'Developing and maintaining web applications using React.js, Next.js, Node.js and other related technologies.',
            'Led the development of CarWiz, successfully bringing it from a startup level to a stable and profitable product for the company.',
            'Managed a team of 4 developers, established working methods with the team, and implemented Agile and sprints.',
            'Successfully rebuilt the entire application infrastructure for CarWiz, including cloud infrastructure, DB, and other services, resuling in a more efficient and scalable',
        ],
    },
    {
        title: 'Full Stack Team Leader',
        company_name: 'Matrix BI',
        icon: 'https://www.matrix.co.il/wp-content/themes/matrix_IL/assets/images/logo-matrix-new.png',
        iconBg: '#E6DEDD',
        iconSize: 'w-[80%] h-[80%]',
        date: '2019 - 2020',
        points: [
            'Developing and maintaining web applications using React.js, Node.js and other related technologies.',
            'Led the development of the national application of epidemiology investigation used by the Israeli government and Health Department.',
            'Managed a team, established working methods with the team, and implemented Agile and sprints.',
            'Helped define project vision, short and long-term goals, and increased the quality of the service, bringing the application to be ready for even shelf product within months.',
        ],
    },

    {
        title: 'Full stack Developer',
        company_name: 'Wobi',
        icon: 'https://www.wobi.co.il/wp-content/uploads/2019/03/wobi-logo.svg',
        iconBg: '#E6DEDD',
        date: '2018 - 2019',
        points: [
            'Developing and maintaining web applications using React.js, Node.js, PHP and other related technologies.',
            "Built the company's main product server and client-side to support ongoing demand for client activities.",
            'Refactored outdated, unscalable code into a modern app architecture.',
            'Integrated Salesforce system as a CRM layer and refactored system services to work with it.',
        ],
    },
    {
        title: 'Backend Developer',
        company_name: 'Walla!NEWS',
        icon: 'https://friends.walla.co.il/assets/images/logo/walla_blue.svg',
        iconBg: '#E6DEDD',
        iconSize: 'w-[83%] h-[83%]',
        date: '2016 - 2018',
        points: [
            'Developing and maintaining web applications using PHP and other related technologies.',
            'Led and developed the Mail Application with constantly releasing new features and functionalities.',
            'Engineered configuration server in PHP to provide the best mail service.',
            'Built and maintained Open Source API and in-house "CASTLE" framework implementation.',
            'In charge of data migration to CLOUD using AWS (Amazon Web Services)',
        ],
    },
    {
        title: 'Backend Developer',
        company_name: 'Wiser',
        icon: 'https://www.wiser.com/wp-content/uploads/2020/10/wiser-icon-logo-blue-navigation-RGB-CS-180x84@2xC-300x140.png',
        iconBg: '#E6DEDD',
        iconSize: 'w-[95%] h-[95%]',
        date: '2015 - 2016',
        points: [
            'Developing and maintaining web applications using PHP and other related technologies.',
        ],
    },
];

const testimonials = [
    {
        testimonial:
            'I thought it was impossible to make a website as beautiful as our product, but Simon proved me wrong.',
        name: 'Sara Lee',
        designation: 'CFO',
        company: 'Acme Co',
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Simon does.",
        name: 'Chris Brown',
        designation: 'COO',
        company: 'DEF Corp',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
        testimonial:
            "After Simon optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: 'Lisa Wang',
        designation: 'CTO',
        company: '456 Enterprises',
        image: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
];

const projects = [
    {
        name: 'Car Rent',
        description:
            'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'mongodb',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwind',
                color: 'pink-text-gradient',
            },
        ],
        image: carrent,
        source_code_link: 'https://github.com/',
    },
    {
        name: 'Job IT',
        description:
            'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'restapi',
                color: 'green-text-gradient',
            },
            {
                name: 'scss',
                color: 'pink-text-gradient',
            },
        ],
        image: jobit,
        source_code_link: 'https://github.com/',
    },
    {
        name: 'Trip Guide',
        description:
            'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
        tags: [
            {
                name: 'nextjs',
                color: 'blue-text-gradient',
            },
            {
                name: 'supabase',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: tripguide,
        source_code_link: 'https://github.com/',
    },
];

type InnerLinkType = {
    title: string;
    href: string;
};

const innerNavigation = [
    {
        title: 'home',
        href: '#',
        active: true,
    },
    {
        title: 'about',
        href: '#about',
        active: true,
    },
    {
        title: 'work',
        href: '#work',
        active: true,
    },
    {
        title: 'services',
        href: '#services',
        active: false,
    },
    {
        title: 'testimonials',
        href: '#feedback',
        active: true,
    },
    {
        title: 'pricing',
        href: '#pricing',
        active: false,
    },
    {
        title: 'contact',
        href: '#contact',
        active: true,
    },
    {
        title: 'privacy policy',
        href: '#privacy',
        active: false,
    },
    {
        title: 'terms & conditions',
        href: '#terms',
        active: false,
    },
];

const outerNavigation = [
    {
        title: 'gitHub',
        href: 'https://github.com/MagusM',
        active: true,
    },
    {
        title: 'css-battle',
        href: 'cssbattle.dev/player/simonmor',
        active: true,
    },
    {
        title: 'medium',
        href: 'https://medium.com/@simomor',
        active: true,
    },
    {
        title: 'read.cv',
        href: 'https://read.cv/simon_mor',
        active: true,
    },
];

export {
    services,
    technologies,
    experiences,
    testimonials,
    projects,
    innerNavigation,
    outerNavigation,
};
