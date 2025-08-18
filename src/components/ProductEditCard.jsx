import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Tailspin } from 'ldrs/react'
import 'ldrs/react/Tailspin.css'
import toast from 'react-hot-toast'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const ProductEditCard = () => {

    const { id } = useParams();
    const { data, isLoading, error } = useSWR(import.meta.env.VITE_API_URL + `/products/${id}`, fetcher);

    const {
        register,
        formState: { errors },
        reset,
        handleSubmit
    } = useForm();

    const navigate = useNavigate();
    const [isSending, setIsSending] = useState(false);

    const handleEditProduct = async (data) => {
        setIsSending(true);
        await fetch(import.meta.env.VITE_API_URL + "/products/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ product_name: data.product_name, price: data.price, created_at: new Date().toISOString() })
        })
        setIsSending(false);
        reset();

        if (data.back_to_product_list) {
            navigate("/product");
        }

        toast.success("Product updated successfully.")
    }

    return (
        <div className="w-full md:w-1/2 mt-5">

            <h1 className='text-3xl font-bold mb-2'>Edit Product</h1>
            <p className='text-stone-500'>Update the fields below to modify the existing product information in your store.</p>

            {isLoading ? (

                <div className="animate-pulse mt-10 space-y-5">
                    <div>
                        <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                        <div className="h-10 bg-gray-300 rounded"></div>
                    </div>
                    <div>
                        <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                        <div className="h-10 bg-gray-300 rounded"></div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="h-4 w-4 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded w-48"></div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="h-4 w-4 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded w-64"></div>
                    </div>
                    <div className="flex space-x-3">
                        <div className="h-10 w-24 bg-gray-300 rounded"></div>
                        <div className="h-10 w-32 bg-gray-300 rounded"></div>
                    </div>
                </div>

            ) :
                (
                    <form onSubmit={handleSubmit(handleEditProduct)} className='mt-10'>

                        <div className='mb-3'>
                            <label htmlFor="name" className={`block mb-2 text-sm font-medium ${errors.product_name ? "text-red-600" : "text-gray-900"}`}>Product Name</label>
                            <input type="text" {...register("product_name", {
                                required: true, minLength: 3, maxLength: 30
                            })} defaultValue={data.product_name} id="name" className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 ${errors.product_name ? "border-red-600 focus:ring-red-600 focus:border-red-600" : "border-gray-300"}`} placeholder="eg. SEO Integration Service" />
                            {errors.product_name?.type === "required" && (
                                <p className='text-red-600 text-sm'>Product name is required!</p>
                            )}
                            {errors.product_name?.type === "minLength" && (
                                <p className='text-red-600 text-sm'>Product name must be greater than 3 characters!</p>
                            )}
                            {errors.product_name?.type === "maxLength" && (
                                <p className='text-red-600 text-sm'>Product name must not exceed 30 characters!</p>
                            )}
                        </div>

                        <div className='mb-5'>
                            <label htmlFor="price" className={`block mb-2 text-sm font-medium ${errors.price ? "text-red-600" : "text-gray-900"}`}>Product Price</label>
                            <input type="number" {...register("price", {
                                required: true, min: 50, max: 1000000
                            })} defaultValue={data.price} id="price" className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 ${errors.price ? "border-red-600 focus:ring-red-600 focus:border-red-600" : "border-gray-300"}`} placeholder="eg. 150000" />
                            {errors.price?.type === "required" && (
                                <p className='text-red-600 text-sm'>Price is required!</p>
                            )}
                            {errors.price?.type === "min" && (
                                <p className='text-red-600 text-sm'>Price must be greater than 50!</p>
                            )}
                            {errors.price?.type === "max" && (
                                <p className='text-red-600 text-sm'>Product name must not exceed 1000000!</p>
                            )}
                        </div>

                        <div className="flex items-center mb-4">
                            <input {...register("all_correct")} required id="all-correct" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm " />
                            <label htmlFor="all-correct" className="ms-2 text-sm font-medium text-gray-900">Make sure all field are correct</label>
                        </div>

                        <div className="flex items-center mb-4">
                            <input {...register("back_to_product_list")} checked id="back-to-product-list" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm " />
                            <label htmlFor="back-to-product-list" className="ms-2 text-sm font-medium text-gray-900">Back to product list after saving</label>
                        </div>

                        <Link to={'/product'} type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 ">Cancel</Link>
                        <button type="submit" className="inline-flex gap-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-5">
                            <span>Update</span>
                            {isSending && (
                                <Tailspin
                                    size="20"
                                    stroke="5"
                                    speed="0.9"
                                    color="white"
                                />
                            )}
                        </button>

                    </form>
                )}

        </div>
    )
}

export default ProductEditCard