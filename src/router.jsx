import React from 'react'
import {createBrowserRouter} from 'react-router-dom';
import Layout from './components/Layout';
import NotFoundPage from './pages/NotFoundPage';
import DashboardPage from './pages/DashboardPage';
import ProductPage from './pages/ProductPage';
import SalePage from './pages/SalePage';
import VoucherPage from './pages/VoucherPage';
import ProductCreatePage from './pages/ProductCreatePage';
import ProductEditPage from './pages/ProductEditPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <NotFoundPage/>,
        children: [
            {
                index: true,
                element: <DashboardPage/>
            },
            {
                path: '/product',
                element: <ProductPage/>
            },
            {
                path: '/product/create',
                element: <ProductCreatePage/>
            },
            {
                path: '/product/edit/:id',
                element: <ProductEditPage/>
            },
            {
                path: '/sale',
                element: <SalePage/>
            },
            {
                path: '/voucher',
                element: <VoucherPage/>
            }
        ]
    }
]);

export default router