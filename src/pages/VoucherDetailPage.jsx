import React from 'react'
import Container from "../components/Container.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import VoucherDetailCard from "../components/VoucherDetailCard.jsx";

const VoucherDetailPage = () => {
    return (
        <section>
            <Container>
                <Breadcrumb currentPageTitle="Voucher Detail" links={[{title: "Voucher", path: "/voucher"}]}/>
                <VoucherDetailCard />
            </Container>
        </section>
    )
}

export default VoucherDetailPage