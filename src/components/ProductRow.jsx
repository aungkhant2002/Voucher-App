import React from 'react'
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2'

const ProductRow = ({ product: { id, product_name, price, created_at } }) => {
    const date = new Date(created_at);
    const currentDate = date.toLocaleDateString('en-GB', {
        day: "numeric",
        month: "short",
        year: "numeric"
    });
    const currentTime = date.toLocaleTimeString('en-GB', {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });

    return (
        <tr className="odd:bg-white even:bg-stone-50 border-b border-stone-200">
            <td className="px-6 py-4 text-end">
                {id}
            </td>
            <th scope="row" className="px-6 py-4 font-medium text-stone-900 whitespace-nowrap">
                {product_name}
            </th>
            <td className="px-6 py-4 text-end">
                {price}
            </td>
            <td className="px-6 py-4 text-end">
                <p className='text-xs'>{currentDate}</p>
                <p className='text-xs'>{currentTime}</p>
            </td>
            <td className="px-6 py-4 text-center">
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
    )
}

export default ProductRow