import AnimatedRoutes from 'components/animated-routes';
import Footer from 'components/footer';
import Navbar from 'components/navbar';
import ScrollToTop from 'components/scroll-to-top';

import './App.css';

function App() {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <main className='appMain'>
                <AnimatedRoutes />
            </main>
            <Footer />
        </>
    );
}

export default App;
