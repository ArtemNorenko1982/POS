/* eslint-disable no-unused-vars */
import { useState, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../helpers/AuthProvider';

const LOGIN_USER = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      id
      email
      userName
      createdAt
      token
    }
  }
`;

const useForm = (props, initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const context = useContext(AuthContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const [loginUser] = useMutation(LOGIN_USER, {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    update(_, { data: { login: values } }) {
      context.login(values);
      // eslint-disable-next-line react/prop-types
      history.push('/');
    },
    onError(err) {
      setErrors(err.graphQLErrors[0]?.extensions?.exception.errors);
    },
    variables: values,
  });

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    loginUser();
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};

export default useForm;
