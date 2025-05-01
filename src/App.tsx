import AnimatedRoutes from 'components/animated-routes';
import Footer from 'components/footer';
import Navbar from 'components/navbar';

import './App.css';

function App() {
    return (
        <>
            <Navbar />
            <main className='appMain'>
                <AnimatedRoutes />
            </main>
            <Footer />
        </>
    );
}

export default App;
