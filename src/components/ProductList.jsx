import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { HiPlus } from 'react-icons/hi2'
import useSWR from 'swr'
import ProductListSkeletonLoader from './ProductListSkeletonLoader';
import ProductListEmptyState from './ProductListEmptyState';
import ProductRow from './ProductRow';
import { Link } from 'react-router-dom';

const fetcher = (...args) => fetch(...args).then(res => res.json())

const ProductList = () => {

    const { data, error, isLoading } = useSWR(import.meta.env.VITE_API_URL + "/products", fetcher)

    return (
        <div className='mt-5'>
            <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center mb-3">
                <div className="">
                    <div className="max-w-md mx-auto">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-stone-900 sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <HiOutlineSearch />
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-stone-900 border border-stone-300 rounded-lg bg-stone-50 focus:ring-stone-500 focus:border-stone-500 " placeholder="Search Product..." required />
                        </div>
                    </div>
                </div>
                <div className="ms-auto">
                    <Link to={'/product/create'} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4font-medium rounded-lg text-sm p-4 me-2 mb-2 focus:outline-none flex justify-between items-center gap-3">Add New Product <HiPlus className="size-5" /></Link>
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-stone-500">
                    <thead className="text-xs text-stone-700 uppercase bg-stone-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-end">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3 text-end">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3 text-end">
                                Created At
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <ProductListSkeletonLoader />
                        ) : data.length === 0 ? (
                            <ProductListEmptyState />
                        ) : (
                            data.map((el) => <ProductRow product={el} key={el.id} />)
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductList