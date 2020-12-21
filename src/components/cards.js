import styled from 'styled-components'

const Card = styled.div`
  background-color: var(--card-bg-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 25px;
  margin: 50px 15px;
  @media (min-width: 992px) {
    max-width: 576px;
    padding-right: 100px;
  }
  & h2 {
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 2.25rem;
  }
  & p {
    font-weight: normal;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`

const ImageCard = styled.div`
  display: none;
  background-color: var(--card-bg-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 15px;
  margin-left: -85px;
  overflow: hidden;
  @media (min-width: 992px) {
    display: block;
  }
`

export default Card
export { Card, ImageCard }
