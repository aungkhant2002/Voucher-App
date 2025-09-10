import React from 'react'
import {useParams} from "react-router-dom";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then(res => res.json());
const VoucherDetailCard = () => {
    const {id} = useParams();
    const {data, error, isLoading} = useSWR(import.meta.env.VITE_API_URL + "/vouchers/" + id, fetcher)
    if (isLoading) {
        return <div>Loading...</div>;
    }
    console.log(data)
    return (
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg mt-5">
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h1 className="text-4xl font-bold mb-2">INVOICE</h1>
                    <p className="text-xl">{data.voucher_id}</p>
                </div>
                <div className="text-right">
                    <p className="font-bold">Invoice to</p>
                    <p>{data.customer_name}</p>
                    <p>Date: {data.sale_date}</p>
                </div>
            </div>

            <table className="w-full mb-8">
                <thead>
                <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-2">No.</th>
                    <th className="text-left py-2">Description</th>
                    <th className="text-right py-2">Qty</th>
                    <th className="text-right py-2">Price</th>
                    <th className="text-right py-2">Total</th>
                </tr>
                </thead>
                <tbody>
                {data.records.map((record, index) => (
                    <tr key={index} className="border-b-2 border-gray-200">
                        <td className="py-2">{index + 1}</td>
                        <td className="py-2">{record.product.product_name}</td>
                        <td className="text-right py-2">{record.quantity}</td>
                        <td className="text-right py-2">{record.product.price}</td>
                        <td className="text-right py-2">{record.cost}</td>
                    </tr>
                ))}
                </tbody>
                <tfoot>
                <tr className="border-b-2 border-gray-300">
                    <td className="py-2 text-right" colSpan={4}>Total</td>
                    <td className="py-2 text-right font-bold">{data.total}</td>
                </tr>
                <tr className="border-b-2 border-gray-300">
                    <td className="py-2 text-right" colSpan={4}>Tax</td>
                    <td className="py-2 text-right font-bold">{data.tax}</td>
                </tr>
                <tr className="border-b-2 border-gray-300">
                    <td className="py-2 text-right" colSpan={4}>Net Total</td>
                    <td className="py-2 text-right font-bold">{data.netTotal}</td>
                </tr>
                </tfoot>
            </table>

            <div className="flex justify-between mb-8">
                <div>
                    <h2 className="font-bold mb-2">Payment Transfer to</h2>
                    <p>Kpay, AyaPay: 09776938058</p>
                    <p>KBZ Bank: 00191288232</p>
                    <p>AYA Bank: 40023212488</p>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div>
                    <p>No. 123, 1st floor, Pyay Road.</p>
                    <p>+959776938058</p>
                    <p>ak@opncor.com</p>
                </div>
                <div className="text-right">
                    <h2 className="font-bold text-xl">OpnCor</h2>
                    <p>OpenCore Co.ltd</p>
                </div>
            </div>

            <div className="border-t-2 border-gray-300 pt-4">
                <p className="mt-4">Prepared By: Aung Khant</p>
            </div>

        </div>
    )
}

export default VoucherDetailCard;