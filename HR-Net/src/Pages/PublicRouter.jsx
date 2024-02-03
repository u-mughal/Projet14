import { Routes, Route } from 'react-router-dom'
import { Home, List, Error } from '@/Pages/index'
import Layout from '@/Layout/Layout';

const PublicRouter = () => {
    
    return (

        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/list" element={<List />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>

    );
};

export default PublicRouter;