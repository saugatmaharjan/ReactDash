import { injectGlobal } from 'styled-components';

export default injectGlobal`

  @import url('https://fonts.googleapis.com/css?family=Dosis:300,400,800|Exo:200,300,400,400i,700,900');

  *{
    box-sizing: border-box;
    font-family: 'Dosis', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Dosis', sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #333;
  }

  input,button,textarea{
    font-family: 'Dosis', sans-serif;
  }

  a{
    text-decoration: none;
    color: #00d;
  }

  h1,h2,h3,h4,h5,h6{
    font-weight: 300;
    margin: 0;
  }

  h1{
    font-size: 3rem;
    line-height: 4rem;
  }

  h2{
    font-size: 2.5rem;
    line-height: 3.5rem;
  }

  h3{
    font-size: 2rem;
    line-height: 3rem;
  }

  h4{
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  h5{
    font-size: 1.25rem;
    line-height: 2rem;
  }

  h6{
    font-size: 1rem;
    line-height: 1.5rem;
  }

  p{
    margin: 0;
  }
`;
