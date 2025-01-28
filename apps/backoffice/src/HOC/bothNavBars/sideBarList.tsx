import { ProductsIcon, UserIcon, ProdktLogo } from "../../assets";

export const SideBarList = [
    {
        id: '8ec7aec0-f243-46d0-963f-f09d9a5b6790',
        name: 'Users Management',
        link: '/user',
        is_select: false,

        icon: (selected: boolean) => (<UserIcon
            sx={{
                fontSize: '22px',
                '& path': {
                    fill: selected ? '#0E70EB' : '#8e959d'
                }
            }} />),
    },
    {
        id: '3c9cc6d4-3937-4aa6-80ff-5d400d57fae4',
        name: 'Products Management',
        link: null,
        icon: (selected: boolean) => (<ProductsIcon
            sx={{
                fontSize: '22px',
                '& path': {
                    fill: selected ? '#0E70EB' : '#8e959d'
                }
            }} />),
        is_select: false,

        sublinks: [
            {
                id: 'c5f057a3-7bf4-4db7-b6e7-6d8e5cd0667a',
                name: 'Products',
                link: '/products',
                icon: null,

            },
            {
                id: '56d0de67-1f7c-4631-8ac9-974ebd5c75e0',
                name: 'Categories',
                link: '/categories',
                icon: null,
            }
        ]

    }
]

