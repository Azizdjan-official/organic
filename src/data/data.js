
import product1 from '../images/product1.png'
import product2 from '../images/product2.png'
import product3 from '../images/product3.png'
import product4 from '../images/product4.png'
import product5 from '../images/product5.png'
import product6 from '../images/product6.png'
import product7 from '../images/product7.png'
import product8 from '../images/product8.png'
import product9 from '../images/product9.png'
import product10 from '../images/product10.png'
import product11 from '../images/product11.png'
import product12 from '../images/product12.png'



import offer1 from '../images/offer1.png'
import offer2 from '../images/offer2.png'
import offer3 from '../images/offer3.png'
import offer4 from '../images/offer4.png'

import portfolio1 from '../images/portfolio1.png'
import portfolio2 from '../images/portfolio2.png'
import portfolio3 from '../images/portfolio3.png'
import portfolio4 from '../images/portfolio4.png'
import portfolio5 from '../images/portfolio5.png'
import portfolio6 from '../images/portfolio6.png'


import team1 from '../images/teamcart1.png'
import team2 from '../images/teamcart2.png'
import team3 from '../images/teamcart3.png'
import team4 from '../images/teamcart4.jpg'
import team5 from '../images/teamcart5.jpg'
import team6 from '../images/teamcart6.jpg'
import Home from './../pages/homepage/home';
import About from './../pages/about/about';
import Shop from './../pages/shop/Shop';
import ShopSingle from './../pages/shop-single/ShopSingle';
import Service from './../pages/otherpages/servicepage/Service';
import ServerSingle from './../pages/otherpages/service-single/ServerSingle';
import Portfolio from './../pages/otherpages/portfolio/Portfolio';
import PortfolioSingle from './../pages/otherpages/portfolioSingle/PortfolioSingle';
import Team from './../pages/otherpages/team/Team';
import Blog from './../pages/otherpages/blog/Blog';
import BlogSingle from './../pages/otherpages/blogSingle/BlogSingle';
import ContactUs from './../pages/otherpages/contactPage/ContactUs';
import Licences from './../pages/otherpages/licences/Licences';
import ChangeLog from './../pages/otherpages/changelog/ChangeLog';
import ProtectedPage from './../pages/otherpages/protectedpage/ProtectedPage';
import ErrorPage from './../pages/otherpages/404Page/ErrorPage';


// export const Routers = [
//     {
//         path: "/",
//         page: <Home/>
//     },
//     {
//         path: "/about",
//         page: <About/>
//     },
//     {
//         path: "/shop",
//         page: <Shop/>
//     },
//     {
//         path: "/shop-single",
//         page: <ShopSingle/>
//     },
//     {
//         path: "/service",
//         page: <Service/>
//     },
//     {
//         path: "/service-single",
//         page: <ServerSingle/>
//     },
//     {
//         path: "/portfolio",
//         page: <Portfolio/>
//     },
//     {
//         path: "/portfolio-single",
//         page: <PortfolioSingle/>
//     },
//     {
//         path: "/team",
//         page: <Team/>
//     },
//     {
//         path: "/blog",
//         page: <Blog/>
//     },
//     {
//         path: "/blog-single",
//         page: <BlogSingle/>
//     },
//     {
//         path: "/contact",
//         page: <ContactUs/>
//     },
//     {
//         path: "/licences",
//         page: <Licences/>
//     },
//     {
//         path: "/changelog",
//         page: <ChangeLog/>
//     },
//     {
//         path: "/protectedpage",
//         page: <ProtectedPage/>
//     },
//     {
//         path: "*",
//         page: <ErrorPage/>
//     },

// ]


export const HomeProductCartInfo = [
    {
        id:1,
        type: "Vegetable",
        image: product1,
        title: "Calabrese Broccoli",
        oldprice: "$20.00",
        newprice: "$13.00"
    },
    {
        id:2,
        type: "Fresh",
        image: product2,
        title: "Fresh Banana Fruites",
        oldprice: "$20.00",
        newprice: "$14.00"
    },
    {
        id:3,
        type: "Millets",
        image: product3,
        title: "White Nuts",
        oldprice: "$20.00",
        newprice: "$15.00"
    },
    {
        id:4,
        type: "Vegetable",
        image: product4,
        title: "Vegan Red Tomato",
        oldprice: "$20.00",
        newprice: "$17.00"
    },
    {
        id:5,
        type: "Health",
        image: product5,
        title: "Mung Bean",
        oldprice: "$20.00",
        newprice: "$11.00"
    },
    {
        id:6,
        type: "Nuts",
        image: product6,
        title: "Brown Hazelnut",
        oldprice: "$20.00",
        newprice: "$12.00"
    },
    {
        id:7,
        type: "Fresh",
        image: product7,
        title: "Eggs",
        oldprice: "$20.00",
        newprice: "$17.00"
    },
    {
        id:8,
        type: "Fresh",
        image: product8,
        title: "Zelco Suji Elaichi Rusk",
        oldprice: "$20.00",
        newprice: "$15.00"
    },
    {
        id:9,
        type: "Health",
        image: product9,
        title: "Mung Bean",
        oldprice: "$20.00",
        newprice: "$11.00"
    },
    {
        id:10,
        type: "Nuts",
        image: product10,
        title: "White Hazelnut",
        oldprice: "$20.00",
        newprice: "$12.00"
    },
    {
        id:11,
        type: "Fresh",
        image: product11,
        title: "Fresh Corn",
        oldprice: "$20.00",
        newprice: "$17.00"
    },
    {
        id:12,
        type: "Fresh",
        image: product12,
        title: "Organic Almonds",
        oldprice: "$20.00",
        newprice: "$15.00"
    },
]
export const HomeCustomerCartInfo = [
    {
        id:1,
        title: "100%",
        info: "Organic"
    },
    {
        id:2,
        title: "285",
        info: "Active Product"
    },
    {
        id:3,
        title: "350+",
        info: "Organic Orchads"
    },
    {
        id:4,
        title: "25+",
        info: "Years of Farming"
    },
    
]

export const HomeOfferCartInfo = [
    {
        id:1,
        type: "Vegetable",
        image: offer1,
        title: "Mung Bean",
        oldprice: "$20.00",
        newprice: "$11.00"
    },
    {
        id:2,
        type: "Fresh",
        image: offer2,
        title: "Brown Hazelnut",
        oldprice: "$20.00",
        newprice: "$12.00"
    },
    {
        id:3,
        type: "Millets",
        image: offer3,
        title: "Onion",
        oldprice: "$20.00",
        newprice: "$17.00"
    },
    {
        id:4,
        type: "Vegetable",
        image: offer4,
        title: "Cabbage",
        oldprice: "$20.00",
        newprice: "$17.00"
    },
    
]

export const PortfolioCartInfo = [
    {
        id:1,
        image: portfolio1,
        title: "Green & Tasty Lemon",
        text: "Fruits",
    },
    {
        id:2,
        image: portfolio2,
        title: "Organic Carrot",
        text: "Farmer",
    },
    {
        id:3,
        image: portfolio3,
        title: "Organic Betel Leaf",
        text: "Leaf",
    },
    {
        id:4,
        image: portfolio4,
        title: "Natural Tommato",
        text: "Fruits",
    },
    {
        id:5,
        image: portfolio5,
        title: "Black Raspberry",
        text: "Farmer",
    },
    {
        id:6,
        image: portfolio6,
        title: "Honey Orange",
        text: "Farmer",
    },
    
    
]
export const TeamInfo = [
    {
        id:1,
        image: team1,
        name: "Giovani Bacardo",
        job: "Farmer",
    },
    {
        id:2,
        image: team2,
        name: "Marianne Loreno",
        job: "Designer",
    },
    {
        id:3,
        image: team3,
        name: "Riga Pelore",
        job: "Farmer",
    },
    {
        id:4,
        image: team4,
        name: "Keira Knightley",
        job: "Farmer",
    },
    {
        id: 5,
        image: team5,
        name: "Scott Lawrence",
        job: "Designer",
    },
    {
        id:6,
        image: team6,
        name: "Karen Allen",
        job: "Farmer",
    },
    
    
    
]
export const NewsCardInfo = [
    {
        id:1,
        classname: "greencard",
        title: "The Benefits of Vitamin D & How to Get It"
    },
    {
        id:2,
        classname: "redcard",
        title: "Our Favorite Summertime Tomato"
    },
    {
        id:3,
        classname: "purplecard",
        title: "Benefits of Vitamin C & How to Get It"
    },
    {
        id:4,
        classname: "yellowgreen",
        title: "Research More Organic Foods"
    },
    {
        id:5,
        classname: "bluecard",
        title: "Everyday Fresh Fruites"
    },
    {
        id:6,
        classname: "whitecard",
        title: "Don't Use Plastic Product! it's Kill Nature"
    },
    
    
    
    
]