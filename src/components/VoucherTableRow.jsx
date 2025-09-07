import React from 'react'
import useRecordStore from '../stores/useRecordStore';
import toast from 'react-hot-toast';

const VoucherTableRow = ({record: {id, cost, quantity, product: {product_name, price}}, index}) => {

    const {removeRecord, changeQuantity} = useRecordStore()

    const handleDelete = () => {
        removeRecord(id)
        toast.success("Product removed successfully")
    }

    const handleIncreaseQuantity = () => {
        changeQuantity(id, 1)
    }

    const handleDecreaseQuantity = () => {
        changeQuantity(id, -1)
    }

    return (
        <tr className="group bg-white border-b border-gray-200">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {index + 1}
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {product_name}
            </th>
            <td className="px-6 py-4 text-end">
                {price.toLocaleString("en-US")}
            </td>
            <td className="px-6 py-4 text-end">
                <button onClick={handleDecreaseQuantity}
                        className="quantity-sub hidden group-hover:inline-block active:scale-90 border border-blue-500 text-blue-500 p-1 rounded-full mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="size-3 pointer-events-none">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14"/>
                    </svg>
                </button>
                {quantity.toLocaleString("en-US")}
                <button onClick={handleIncreaseQuantity}
                        className="quantity-add hidden group-hover:inline-block active:scale-90 border border-blue-500 text-blue-500 p-1 rounded-full ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="size-3 pointer-events-none">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                    </svg>
                </button>
            </td>
            <td className="px-6 py-4 text-end">
                {cost.toLocaleString("en-US")}
            </td>
            <td>
                <button onClick={handleDelete}
                        className="hidden group-hover:inline-block active:scale-90 border border-red-500 text-red-500 p-1 rounded-full ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-3 pointer-events-none">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M6 7.5h12M9.75 7.5v9.75m4.5-9.75v9.75M4.5 7.5L5.25 20.25h13.5L19.5 7.5M8.25 4.5h7.5l1.5 3H6.75l1.5-3Z"/>
                    </svg>
                </button>
            </td>
        </tr>
    )
}

export default VoucherTableRow