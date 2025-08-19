import React from 'react'
import { useForm } from 'react-hook-form'
import useSWR from 'swr'
import useRecordStore from '../stores/useRecordStore'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const SaleForm = () => {
    const { data, error, isLoading } = useSWR(import.meta.env.VITE_API_URL + "/products", fetcher)
    const { register, handleSubmit, reset } = useForm()
    const { addRecord } = useRecordStore()
    const onSubmit = (data) => {
        const currentProduct = JSON.parse(data.product);
        addRecord({
            id: Date.now(),
            product: currentProduct,
            quantity: data.quantity,
            cost: currentProduct.price * data.quantity,
            created_at: new Date().toISOString()
        })
        reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-white p-5 border shadow rounded-lg mb-5">
                <div className="col-span-1">
                    <div>
                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Select a product</label>
                        <select required id="products" {...register("product")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                            <option value="">Choose a product</option>
                            {!isLoading && (
                                data.map((product) => <option key={product.id} value={JSON.stringify(product)}>{product.product_name}</option>)
                            )}
                        </select>
                    </div>
                </div>
                <div className="col-span-1">
                    <div>
                        <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900">Quantity</label>
                        <input {...register("quantity")} type="number" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="eg. 5" required />
                    </div>
                </div>
                <div className="col-span-1">
                    <button type="submit" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full h-full text-center me-2 mb-2">Add Product</button>
                </div>
            </div>
        </form>
    )
}

export default SaleForm