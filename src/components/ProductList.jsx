import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { HiPlus } from 'react-icons/hi2'

const ProductList = () => {
    return (
        <div className='mt-5'>
            <div className="flex justify-between items-center mb-3">
                <div className="">
                    <div className="max-w-md mx-auto">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <HiOutlineSearch />
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 " placeholder="Search Product..." required />
                        </div>
                    </div>
                </div>
                <div className="">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4font-medium rounded-lg text-sm p-4 me-2 mb-2 focus:outline-none flex justify-between items-center gap-3">Add New Product <HiPlus className="size-5" /></button>
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
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
                            <th scope="col" className="px-6 py-3 text-end">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                            <td className="px-6 py-4">
                                1
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4 text-end">
                                2999
                            </td>
                            <td className="px-6 py-4 text-end">
                                <p className='text-xs'>7 Aug 2025</p>
                                <p className='text-xs'>10:00 PM</p>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex space-x-2 justify-end">
                                    <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                                    <a href="#" className="font-medium text-red-600 hover:underline">Delete</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductList