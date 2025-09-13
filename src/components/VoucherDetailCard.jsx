import React from 'react'
import {useParams} from "react-router-dom";
import useSWR from "swr";
import printJS from "print-js";
import html2pdf from "html2pdf.js"

const fetcher = (url) => fetch(url).then(res => res.json());
const VoucherDetailCard = () => {
    const {id} = useParams();
    const {data, error, isLoading} = useSWR(import.meta.env.VITE_API_URL + "/vouchers/" + id, fetcher)
    if (isLoading) {
        return <div>Loading...</div>;
    }

    const handlePrint = () => {
        printJS({
            printable: "printArea",
            type: "html",
            scanStyles: true,
            css: ["/tailwind-print.css"]
        })
    }

    const handlePDF = () => {
        const printArea = document.getElementById("printArea");
        const opt = {
            margin: [0.5, 0.5],
            filename: `${data.voucher_id}_invoice.pdf`,
            image: {type: 'jpeg', quality: 0.98},
            html2canvas: {scale: 2, useCORS: true},
            jsPDF: {unit: 'mm', format: 'a5', orientation: 'portrait'},
        }
        html2pdf().from(printArea).set(opt).save();
    }

    return (
        <div className="flex items-end gap-3">
            <div id="printArea" className="w-[14.8cm] p-8 bg-white border mt-5">
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">INVOICE</h1>
                        <p className="text-lg">{data.voucher_id}</p>
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
                        <th className="text-left py-2 text-sm">No.</th>
                        <th className="text-left py-2 text-sm">Description</th>
                        <th className="text-right py-2 text-sm">Qty</th>
                        <th className="text-right py-2 text-sm">Price</th>
                        <th className="text-right py-2 text-sm">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.records.map((record, index) => (
                        <tr key={index} className="border-b-2 border-gray-200">
                            <td className="py-2 text-sm">{index + 1}</td>
                            <td className="py-2 text-sm">{record.product.product_name}</td>
                            <td className="text-right py-2 text-sm">{record.quantity}</td>
                            <td className="text-right py-2 text-sm">{record.product.price}</td>
                            <td className="text-right py-2 text-sm">{record.cost}</td>
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                    <tr className="border-b-2 border-gray-300">
                        <td className="py-2 text-right text-sm" colSpan={4}>Total</td>
                        <td className="py-2 text-right text-sm font-bold">{data.total}</td>
                    </tr>
                    <tr className="border-b-2 border-gray-300">
                        <td className="py-2 text-right text-sm" colSpan={4}>Tax</td>
                        <td className="py-2 text-right text-sm font-bold">{data.tax}</td>
                    </tr>
                    <tr className="border-b-2 border-gray-300">
                        <td className="py-2 text-right text-sm" colSpan={4}>Net Total</td>
                        <td className="py-2 text-right text-sm font-bold">{data.netTotal}</td>
                    </tr>
                    </tfoot>
                </table>

                <div className="flex gap-1 justify-between items-center mb-8 text-xs whitespace-nowrap">
                    <div>
                        <h2 className="font-bold mb-2">Payment Transfer to</h2>
                        <p>Kpay, AyaPay: 09776938058</p>
                        <p>KBZ Bank: 00191288232</p>
                        <p>AYA Bank: 40023212488</p>
                    </div>
                    <div className="text-right text-xs">
                        <h2 className="font-bold">OpnCor</h2>
                        <p>OpenCore Co.ltd</p>
                        <p>No.173, Shwe Bon Thar St.</p>
                        <p>+959776938058</p>
                        <p>ak@opncor.com</p>
                    </div>
                </div>

                <div className="border-t-2 border-gray-300 pt-4">
                    <p className="mt-4 text-center text-sm">Thanks to you</p>
                </div>

            </div>
            <div className="flex flex-col gap-3">
                <button type="button" onClick={handlePrint}
                        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Print
                </button>
                <button type="button" onClick={handlePDF}
                        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Download PDF
                </button>
            </div>
        </div>
    )
}

export default VoucherDetailCard;