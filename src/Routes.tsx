import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Finanzas from './pages/Finanzas';

import Salud from './pages/Salud';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/salud" element={<Salud />} />
                <Route path="/finanzas" element={<Finanzas />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
