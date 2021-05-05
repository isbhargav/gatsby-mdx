import React from "react"
import styled,{ createGlobalStyle } from "styled-components"
import useSiteMetaData from '../hooks/use-sitemetadata'
import Header from './Header'
import Helmet from 'react-helmet'
const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
  }
  /* More info: https://bit.ly/2PsCnzk */
  * + * {
    margin-top: 1rem;
  }
  html,
  body {
    margin: 0;
    color: #555;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-size: 18px;
    line-height: 1.4;
    /* remove margin for the main div that Gatsby mounts into */
    > div {
      margin-top: 0;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #222;
    line-height: 1.1;
    + * {
      margin-top: 0.5rem;
    }
  }
  strong {
    color: #222;
  }
  li {
    margin-top: 0.25rem;
  }
`
const Main = styled.main`
margin:2rem auto 4rem;
max-width:90vw;
width:550px;
`
export default function Layout({ children }) {
  const {title, description} = useSiteMetaData();
  return (
    <React.Fragment>
      <GlobalStyle />
      <Helmet >
          <html lang='en'></html>
          <title>{title}</title>
          <meta name="description" content={description}></meta>
      </Helmet>
      <Header/>
      <Main>{children}</Main>
    </React.Fragment>
  )
}