import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({ title, product }) => {

  return <Wrapper>
    <div className="section-center">
      <h3>
        <Link to="/">Home</Link> {product && <Link to="/products">/Products</Link>}/ {title}
      </h3>
      <hr />
    </div>
  </Wrapper>
}
const Wrapper = styled.section`
  background: #fff;
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 2rem;
  color: darkblue;

  a {
    color: darkblue;
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`

export default PageHero
