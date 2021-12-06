import { graphql } from 'gatsby';
import React from 'react';
import PizzaList from '../components/PizzaList';
import Layout from '../components/Layout';
import ToppingsFilter from '../components/ToppingsFilter';

export default function PizzasPage({ data }) {
  console.log(data.pizzas);
  const pizzas = data.pizzas.nodes;

  return (
    <Layout>
      <ToppingsFilter />
      <p>Hey! There are {data.pizzas.nodes.length} Pizzas!!</p>
      <PizzaList pizzas={pizzas} />
    </Layout>
  );
}

export const query = graphql`
  query PizzaQuery {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fixed(width: 200, height: 200) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
