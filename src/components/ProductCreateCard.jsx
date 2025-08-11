import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const ProductCreateCard = () => {
    const { register, handleSubmit } = useForm();
    const handleCreateProduct = () => {

    }
    return (
        <div className="w-full md:w-1/2 mt-5">

            <h1 className='text-3xl font-bold mb-2'>Create New Product</h1>
            <p className='text-stone-500'>Fill out the details below to add a new product to your store.</p>

            <form onSubmit={handleSubmit(handleCreateProduct)} className='mt-10'>

                <div className='mb-3'>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Product Name</label>
                    <input type="text" {...register("product_name")} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="eg. SEO Integration Service" required />
                </div>

                <div className='mb-5'>
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Product Price</label>
                    <input type="number" {...register("price")} id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="eg. 150000" required />
                </div>

                <div className="flex items-center mb-4">
                    <input {...register("all_correct")} required id="all-correct" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm " />
                    <label htmlFor="all-correct" className="ms-2 text-sm font-medium text-gray-900">Make sure all field are correct</label>
                </div>

                <Link to={'/product'} type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 ">Cancel</Link>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-5">Submit</button>

            </form>
        </div>
    )
}

export default ProductCreateCard