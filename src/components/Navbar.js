import React from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'
import { Cart } from '../pages'

const Nav = () => {
  const { openSidebar, isSidebarOpen } = useProductsContext()
  return <NavContainer>
    <div className="nav-center">
      <div className="nav-header">
        <Link to="/"><img src="https://img.etimg.com/thumb/msid-59738997,width-640,resizemode-4,imgsize-21421/nike.jpg" alt="Header" /></Link>
        <button type='button' className='nav-toggle' onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
      <ul className="nav-links">
        {links.map((link) => {
          const { id, text, url } = link;
          return <li key={id}>
            <Link to={url}>{text}</Link>
          </li>
        })}
      </ul>
      <CartButtons />
    </div>
  </NavContainer>
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: black;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: darkblue;
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        transition: font-size .5s;
        &:hover {
          font-size: 1.3rem;
          border-bottom: 2px solid #ff6500;
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Nav
