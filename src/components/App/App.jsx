import AppRoutes from "../Routes/Routes";
import { useDispatch } from "react-redux";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import { useEffect } from "react";
import { getCategories } from "../../features/categories/categoriesSlice";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <div className="app">
            <Header />

            <div className="container">
                <Sidebar />
                <AppRoutes />
            </div>

            <Footer />
        </div>
    )
}

export default App;