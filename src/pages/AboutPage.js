import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    {/* <PageHero title="about" /> */}
    <Wrapper className="page section section-center">
      <img src="https://images.unsplash.com/photo-1604467794349-0b74285de7e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80s" alt="clothes" />
      <article>
        <div className="title">
          <h2>About us</h2>
          <div className="underline"></div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur rerum velit sit laudantium porro ex maiores. Temporibus velit optio aut aperiam! Facilis aperiam vitae dicta repellat iure soluta necessitatibus error nesciunt voluptas incidunt laudantium neque, impedit quo deserunt vel ducimus facere praesentium libero minima tempora illo similique adipisci nostrum reiciendis! Est illum expedita iste praesentium error saepe, quos eius itaque reiciendis minus culpa a iusto fugiat architecto facere ad id modi adipisci ducimus doloremque. Distinctio minima voluptate reprehenderit, omnis voluptas corrupti tempora aut accusamus perspiciatis cum ducimus quae facilis nemo!</p>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: darkblue;
  }
  .title {
    text-align: left;
  color: darkblue;
  }
  .underline {
    margin-left: 0;
    background-color: orange;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
