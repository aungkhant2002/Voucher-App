import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {Tailspin} from 'ldrs/react'
import 'ldrs/react/Tailspin.css'
import SaleForm from './SaleForm'
import VoucherTable from './VoucherTable'
import useRecordStore from "../stores/useRecordStore.js";
import toast from "react-hot-toast";

const VoucherInfo = () => {

    const [isSending, setIsSending] = useState();
    const {records, resetRecord} = useRecordStore();

    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const onSubmit = async (data) => {
        setIsSending(true)
        const total = parseInt(records.reduce((a, b) => a + b.cost, 0));
        const tax = parseInt((total * 0.07).toFixed(0));
        const netTotal = total + tax;

        const currentVoucher = {...data, records, total, tax, netTotal};

        await fetch(import.meta.env.VITE_API_URL + "/vouchers", {
            method: 'POST',
            body: JSON.stringify(currentVoucher),
            headers: {
                'Content-Type': 'application/json'
            },
        })

        toast.success("Voucher created successfully.");
        resetRecord();
        reset();
        setIsSending(false)
    }

    // utils/generateInvoiceNumber.js
    function generateInvoiceNumber(prefix = "V") {
        // Get current date in YYMMDD
        const date = new Date();
        const yy = date.getFullYear().toString().slice(-2);
        const mm = (date.getMonth() + 1).toString().padStart(2, '0');
        const dd = date.getDate().toString().padStart(2, '0');
        const dateString = `${yy}${mm}${dd}`;

        // Random 4-digit number
        const randomSerial = Math.floor(1000 + Math.random() * 9000);

        return `${prefix}-${dateString}-${randomSerial}`;
    }

    return (
        <div className="">
            <form onSubmit={handleSubmit(onSubmit)} id='infoForm' className='my-5'>
                <div className="grid grid-col-1 md:grid-cols-4 gap-5">
                    <div className="col-span-1">
                        <div className='mb-3'>
                            <label
                                className={`block mb-2 text-sm font-medium ${errors.voucher_id ? "text-red-600" : "text-gray-900"}`}>Voucher
                                Id</label>
                            <input type="text" {...register("voucher_id", {
                                required: true
                            })} defaultValue={generateInvoiceNumber()}
                                   className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 ${errors.voucher_id ? "border-red-600 focus:ring-red-600 focus:border-red-600" : "border-gray-300"}`}
                                   placeholder="eg. V0001"/>
                            {errors.voucher_id?.type === "required" && (
                                <p className='text-red-600 text-sm'>Voucher Id is required!</p>
                            )}
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className='mb-3'>
                            <label
                                className={`block mb-2 text-sm font-medium ${errors.customer_name ? "text-red-600" : "text-gray-900"}`}>Customer
                                Name</label>
                            <input type="text" {...register("customer_name", {
                                required: true
                            })}
                                   className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 ${errors.customer_name ? "border-red-600 focus:ring-red-600 focus:border-red-600" : "border-gray-300"}`}
                                   placeholder="eg. Bryan Smith"/>
                            {errors.customer_name?.type === "required" && (
                                <p className='text-red-600 text-sm'>Customer name is required!</p>
                            )}
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className='mb-3'>
                            <label
                                className={`block mb-2 text-sm font-medium ${errors.customer_email ? "text-red-600" : "text-gray-900"}`}>Customer
                                Email</label>
                            <input type="email" {...register("customer_email", {
                                required: true
                            })}
                                   className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 ${errors.customer_email ? "border-red-600 focus:ring-red-600 focus:border-red-600" : "border-gray-300"}`}
                                   placeholder="eg. example@gmail.com"/>
                            {errors.customer_email?.type === "required" && (
                                <p className='text-red-600 text-sm'>Customer email is required!</p>
                            )}
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className='mb-3'>
                            <label
                                className={`block mb-2 text-sm font-medium ${errors.sale_date ? "text-red-600" : "text-gray-900"}`}>Sale
                                Date</label>
                            <input type="date" {...register("sale_date", {
                                required: true
                            })} defaultValue={new Date().toISOString().slice(0, 10)}
                                   className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 ${errors.sale_date ? "border-red-600 focus:ring-red-600 focus:border-red-600" : "border-gray-300"}`}/>
                            {errors.sale_date?.type === "required" && (
                                <p className='text-red-600 text-sm'>Sale date is required!</p>
                            )}
                        </div>
                    </div>
                </div>
            </form>

            <SaleForm/>

            <VoucherTable/>

            <div className="flex justify-end items-center gap-3">
                <div className="flex items-center mt-5">
                    <input {...register("all_correct")} form='infoForm' required id="all-correct" type="checkbox"
                           defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm "/>
                    <label htmlFor="all-correct" className="ms-2 text-sm font-medium text-gray-900">Make sure all field
                        are correct</label>
                </div>
                <button form='infoForm' type="submit"
                        className="inline-flex gap-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-5">
                    <span>Confirm Voucher</span>
                    {isSending && (
                        <Tailspin
                            size="20"
                            stroke="5"
                            speed="0.9"
                            color="white"
                        />
                    )}
                </button>
            </div>
        </div>
    )
}

export default VoucherInfo