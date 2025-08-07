import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'

const ProductPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle="Product" />
        <h1>Product Page</h1>
      </Container>
    </section>
  )
}

export default ProductPage