import useRecordStore from '../stores/useRecordStore'
import VoucherTableRow from './VoucherTableRow'

const VoucherTable = () => {

    const {records} = useRecordStore()
    const total = parseInt(records.reduce((a, b) => a + b.cost, 0));
    const tax = parseInt((total * 0.07).toFixed(0));
    const netTotal = total + tax;

    return (
        <div className="relative overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        #
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" className="px-6 py-3 text-end">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-end">
                        Quantity
                    </th>
                    <th scope="col" className="px-6 py-3 text-end">
                        Cost
                    </th>
                    <th scope="col" className="px-6 py-3">

                    </th>
                </tr>
                </thead>
                <tbody>

                {records.length === 0 && (
                    <tr className="hidden last:table-row odd:bg-white even:bg-gray-50 border-b ">
                        <th scope="row" colSpan="6"
                            className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            There is no record yet.
                        </th>
                    </tr>
                )}

                {records.map((record, index) => <VoucherTableRow key={record.id} record={record} index={index}/>)}

                </tbody>
                <tfoot>
                <tr className="border-b ">
                    <th colSpan={4} scope="row"
                        className="text-end px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        Total
                    </th>
                    <td className="px-6 py-4 text-end" id="recordTotal">
                        {total.toLocaleString("en-US")}
                    </td>
                    <td className="px-6 py-4 text-end table-cell print:hidden"></td>
                </tr>
                <tr className="border-b ">
                    <th colSpan={4} scope="row"
                        className="text-end px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Tax (Vat 7%)
                    </th>
                    <td className="px-6 py-4 text-end" id="recordTax">
                        {tax.toLocaleString("en-US")}
                    </td>
                    <td className="px-6 py-4 text-end table-cell print:hidden"></td>
                </tr>
                <tr className="border-b ">
                    <th colSpan={4} scope="row"
                        className="text-end px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Net Total (mmk)
                    </th>
                    <td className="px-6 py-4 text-end" id="recordNetTotal">
                        {netTotal.toLocaleString("en-US")}
                    </td>
                    <td className="px-6 py-4 text-end"></td>
                </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default VoucherTable