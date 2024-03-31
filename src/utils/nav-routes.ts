const NAVROUTES = [
    {
        name: 'Home',
        path: '/',
        exact: true,
        submenus: false,
    },
    {
        name: 'About',
        path: '/about',
        exact: true,
        submenus: false,
    },
    {
        name: 'Projects',
        path: '/projects',
        exact: true,
        submenus: [
            {
                name: 'Project 1',
                path: '/projects/project-1',
                exact: true,
            },
            {
                name: 'Project 2',
                path: '/projects/project-2',
                exact: true,
            },
            {
                name: 'Project 3',
                path: '/projects/project-3',
                exact: true,
            },
        ],
    },
    {
        name: 'Contact',
        path: '/contact',
        exact: true,
        submenus: false,
    },
];

export default NAVROUTES;
