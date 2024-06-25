import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Finanzas from './pages/Finanzas';

import Salud from './pages/Salud';
import Stores from './pages/Stores';
import NotFound from './pages/NotFound';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/salud" element={<Salud />} />
                <Route path="/finanzas" element={<Finanzas />} />
                {/* <Route path="/salud" element={<Home />} /> */}
                <Route path="/" element={<Stores />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
