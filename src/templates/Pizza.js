import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const PizzaGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

export default function SinglePizzaPage({ data: { pizza } }) {
  console.log(pizza);
  return (
    <>
      <PizzaGrid>
        <Img fluid={pizza.image.asset.fluid} />
        <div>
          <h2 className="mark">{pizza.name}</h2>
          <ul>
            {pizza.toppings.map((topping) => (
              <li key={topping.id}>{topping.name}</li>
            ))}
          </ul>
        </div>
      </PizzaGrid>
    </>
  );
}

// This needs to be dynamic based on the slug passed in via context in gatsby node
export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id
        vegetarian
      }
    }
  }
`;
