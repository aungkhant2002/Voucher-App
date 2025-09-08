import React, {useState} from 'react';
import {HiOutlineSearch} from 'react-icons/hi'
import {HiComputerDesktop, HiOutlinePencil, HiOutlineTrash} from 'react-icons/hi2'
import ShowDate from "./ShowDate.jsx";
import {useSWRConfig} from "swr";
import {Bouncy} from 'ldrs/react'
import toast from 'react-hot-toast'

const VoucherListRow = ({voucher: {id, voucher_id, customer_name, customer_email, sale_date}}) => {
    const {mutate} = useSWRConfig()
    const [isDeleteing, setIsDeleteing] = useState(false);
    const handleDelete = async () => {
        setIsDeleteing(true);
        await fetch(import.meta.env.VITE_API_URL + `/vouchers/${id}`, {
            method: 'DELETE',
        })
        toast.success('Voucher deleted successfully.')
        mutate(import.meta.env.VITE_API_URL + `/vouchers`)
    }
    return (
        <tr className="odd:bg-white even:bg-stone-50 border-b border-stone-200">
            <td className="px-6 py-4">
                {voucher_id}
            </td>
            <th scope="row" className="px-6 py-4 font-medium text-stone-900 whitespace-nowrap">
                {customer_name}
            </th>
            <td className="px-6 py-4">
                {customer_email}
            </td>
            <td className="px-6 py-4 text-end">
                <ShowDate timestamp={sale_date}/>
            </td>
            <td className="px-6 py-4 text-center">
                <div className="inline-flex rounded-md shadow-xs" role="group">
                    <div>
                        <button onClick={handleDelete} type="button"
                                className="flex size-10 justify-center items-center rounded-lg text-sm font-medium text-red-600 bg-white border border-stone-200 rounded-e-lg hover:bg-stone-100 hover:text-red-700 focus:z-10">
                            {isDeleteing ? (
                                <Bouncy size="20" speed="1.75" color="red"/>
                            ) : (
                                <HiOutlineTrash/>
                            )}
                        </button>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default VoucherListRow