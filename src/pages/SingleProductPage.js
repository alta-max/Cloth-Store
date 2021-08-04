import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
  const { id } = useParams()

  const { single_product_loading: loading, single_product_error: error, single_product: product, fetchSingleProduct } = useProductsContext()

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
  }, [id])

  if (loading) {
    return <Loading />
  }
  if (error) {
    <Error />
  }
  const { title, description, image, price, category } = product;
  return (
    <Wrapper className="page">
      <div className="section-center">
        {/* <Link className="btn">Back to Products</Link> */}
        <div className="product-center">
          <ProductImages image={image} />
          <section className="content">
            <h2>{title}</h2>
            <h5 className='price'>${price}</h5>
            <p className='desc'>{description}</p>
            <p className='info'>
              <span>Category :</span>{category}
            </p>
            <hr />
            <AddToCart product={product} />
          </section>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
   padding-top: 4rem;
   padding-bottom: 6rem;
   .content{
     color: darkblue;
   }
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color:  #ff6500;
  }
  .desc {
    line-height: 2;
    max-width: 45em;
    color: darkblue;
  }
  .info {
    color: darkblue;
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
      color: orange;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
