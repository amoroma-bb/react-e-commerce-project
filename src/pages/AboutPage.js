import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title="about"/>
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt="nice desk"/>
      <article>
        <div className='title'>
          <h2>our story</h2>
          <div className='underline'></div>          
        </div>
        <p>
          Lorem esse in labore reprehenderit qui. Sit anim in excepteur excepteur ad ea eiusmod laborum non eiusmod reprehenderit est sint consectetur. Ex magna excepteur labore proident velit laborum cupidatat pariatur consectetur consectetur reprehenderit qui ex. Fugiat ex eu est aliqua sunt.
          Elit incididunt proident ut commodo ad incididunt tempor fugiat culpa enim veniam nisi voluptate. Nostrud aute aute commodo deserunt enim enim ullamco. Reprehenderit nisi in culpa fugiat ex est consectetur pariatur. Reprehenderit dolore officia reprehenderit ex consectetur esse.
        </p>
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
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
