import gql from "graphql-tag";
import client from '../configs/client';

export const getCurrencies = (input) => {
    return client
    .query({
      query: gql`
      query {
        rates(currency: "${input}") {
          currency
        }
      }
      `
    });
}

