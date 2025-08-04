import { type ReactNode } from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <NavBar />
            <main id="home">{ children }</main>
            <Footer />
        </>
    );
};

export default Layout;