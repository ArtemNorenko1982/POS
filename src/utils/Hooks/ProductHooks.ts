import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useState } from 'react';

const FILTERED_PRODUCTS_BY_CHAR = gql`
  mutation getProductsFilteredByTitle($title: Strig!) {
    getProductsFilteredByTitle(title: $title) {
      code
      title
      producer
      price
    }
  }
`;

const useProductData = (props, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const [products] = useMutation(FILTERED_PRODUCTS_BY_CHAR);
};
