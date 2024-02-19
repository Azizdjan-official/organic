import Header from './header/header';
import Footer from './footer/footer';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
  return (
    <div>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Mainlayout
