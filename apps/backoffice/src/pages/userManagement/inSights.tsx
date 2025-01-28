import { ProductsIcon, ServicesIcon, UserIcon } from "../../assets";

export const InSightsData = [
    {
        text: 'Total no. of users',
        value: '1267',
        icon: <UserIcon
            sx={{
                fontSize: '22px',
                '& path': {
                    fill: '#ffb656'
                }
            }} />
    },
    {
        text: 'Total no. of active users',
        value: '1098',
        icon: <UserIcon
            sx={{
                fontSize: '22px',
                '& path': {
                    fill: '#50c587'
                }
            }} />
    },
    {
        text: 'Total no. of products added',
        value: '76',
        icon: <ProductsIcon
            sx={{
                fontSize: '22px',
                '& path': {
                    fill: '#3095a9'
                }
            }} />
    },
    {
        text: 'Total no. of services taken',
        value: '8',
        icon: <ServicesIcon
            sx={{
                fontSize: '22px',
            }} />
    }
]