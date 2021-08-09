import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/hero-bcg.jpeg'
import heroBcg2 from '../assets/hero-bcg-2.jpeg'

const Hero = () => {
  return <Wrapper className="section-center">
    <article className="content">
      <h1>
        dress <br />
        to impress
      </h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum ab iste cumque inventore eaque repellat nam, officiis distinctio! Nostrum repellendus harum corporis. Ipsam velit odio doloremque, cum maiores nisi?</p>
      <Link to="/products" className="btn hero-btn">shop now</Link>
    </article>
    <article className="img-container">
      <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt="clothes" className="main-img" />
    </article>
  </Wrapper>
}

const Wrapper = styled.section`
.content{
  color: darkblue;
}
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: darkblue;
    font-size: 1rem;
  }
  .hero-btn {
      background-color: #ff6500;
    }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      background-color: #ff6500;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
  }
`

export default Hero
