import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineSearch } from 'react-icons/hi'
import { HiComputerDesktop, HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2'

const VoucherList = () => {
    return (
        <div className='mt-5'>
            <div className="flex justify-between items-center mb-3">
                <div className="">
                    <div className="max-w-md mx-auto">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-stone-900 sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <HiOutlineSearch />
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-stone-900 border border-stone-300 rounded-lg bg-stone-50 focus:ring-stone-500 focus:border-stone-500 " placeholder="Search Voucher..." required />
                        </div>
                    </div>
                </div>
                <div className="">
                    <Link to={"/sale"} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4font-medium rounded-lg text-sm p-4 me-2 mb-2 focus:outline-none flex justify-between items-center gap-3">Create Sale <HiComputerDesktop className="size-5" /></Link>
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-stone-500">
                    <thead className="text-xs text-stone-700 uppercase bg-stone-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Customer Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
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
                        <tr className="odd:bg-white even:bg-stone-50 border-b border-stone-200 hidden last:table-row">
                            <td className="px-6 py-4 text-center" colSpan={5}>There is no voucher</td>
                        </tr>
                        <tr className="odd:bg-white even:bg-stone-50 border-b border-stone-200">
                            <td className="px-6 py-4">
                                1
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-stone-900 whitespace-nowrap">
                                Kyaw Kyaw
                            </th>
                            <td className="px-6 py-4">
                                kyaw2@gmail.com
                            </td>
                            <td className="px-6 py-4 text-end">
                                <p className='text-xs'>7 Aug 2025</p>
                                <p className='text-xs'>10:00 PM</p>
                            </td>
                            <td className="px-6 py-4 text-end">
                                <div className="inline-flex rounded-md shadow-xs" role="group">
                                    <div>
                                        <button type="button" className="px-4 py-2 text-sm font-medium text-stone-900 bg-white border border-stone-200 rounded-s-lg hover:bg-stone-100 hover:text-stone-700 focus:z-10">
                                            <HiOutlinePencil />
                                        </button>
                                        <button type="button" className="px-4 py-2 text-sm font-medium text-red-600 bg-white border border-stone-200 rounded-e-lg hover:bg-stone-100 hover:text-red-700 focus:z-10">
                                            <HiOutlineTrash />
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default VoucherList