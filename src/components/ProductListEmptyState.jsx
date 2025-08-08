import React from 'react'

const ProductListEmptyState = () => {
    return (
        <tr className="odd:bg-white even:bg-stone-50 border-b border-stone-200">
            <td className="px-6 py-4 text-center" colSpan={5}>There is no product</td>
        </tr>
    )
}

export default ProductListEmptyState