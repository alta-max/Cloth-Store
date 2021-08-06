import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { CartContent } from '../components'

const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return <Wrapper className="page-100">
      <div className="empty">
        <h2>Your cart is empty</h2>
        <Link to="/products" className="btn">Shop Now</Link>
      </div>
    </Wrapper>
  }
  return <main>
    {/* <PageHero title="cart" /> */}
    <Wrapper>
      <CartContent />
    </Wrapper>
  </main>
}

const Wrapper = styled.main`
  .btn{
    background-color: rgb(255, 101, 0);
  }
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
      color: darkblue;
    }
  }
`

export default CartPage
