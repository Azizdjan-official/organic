import { Route, Routes } from "react-router-dom"
import Mainlayout from './layout/main-layout';
import Home from './pages/homepage/home';
import About from './pages/about/about';
import Shop from './pages/shop/Shop';
import ShopSingle from './pages/shop-single/ShopSingle';
import Service from "./pages/otherpages/servicepage/Service";
import ServerSingle from "./pages/otherpages/service-single/ServerSingle";
import Portfolio from "./pages/otherpages/portfolio/Portfolio";
import PortfolioSingle from './pages/otherpages/portfolioSingle/PortfolioSingle';
import Team from './pages/otherpages/team/Team';
import Blog from "./pages/otherpages/blog/Blog";
import BlogSingle from './pages/otherpages/blogSingle/BlogSingle';
import ContactUs from './pages/otherpages/contactPage/ContactUs';
import ErrorPage from './pages/otherpages/404Page/ErrorPage';
import Licences from './pages/otherpages/licences/Licences';
import ChangeLog from './pages/otherpages/changelog/ChangeLog';
import ProtectedPage from './pages/otherpages/protectedpage/ProtectedPage';
// import { Routers } from "./data/data";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Mainlayout/>}>
          {/* {Routers.map((item)=> <Route index={item.path} key={item.path} path={item.path} element={item.page}/>)} */}
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/shop-single" element={<ShopSingle/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/service-single" element={<ServerSingle/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/portfolio-single" element={<PortfolioSingle/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog-single" element={<BlogSingle/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/licences" element={<Licences/>} />
          <Route path="/changelog" element={<ChangeLog/>} />
          <Route path="/protectedpage" element={<ProtectedPage/>} />
          <Route path="*" element={<ErrorPage/>} />
          
        </Route>
      </Routes>
    </>
  )
}

export default App
