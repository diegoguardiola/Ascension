import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import { handleResponse, isOkStatus } from '../utils/handleRestApiResponse';
import usePrevious from '../utils/usePrevious';
import {
  encodeQueryParam,
  renderParam,
  renderQueryString,
} from '../utils/encodeQueryParam';
import * as GlobalVariables from '../config/GlobalVariableContext';

const cleanHeaders = headers =>
  Object.fromEntries(Object.entries(headers).filter(kv => kv[1] != null));

export const registerUserPOST = async (
  Constants,
  { email, firstName, lastName, password },
  handlers = {}
) => {
  const url = `https://app.nocodb.com/api/v2/tables/m9p9alzogu2i9fi/records`;
  const options = {
    body: JSON.stringify({
      'First Name': firstName,
      'Last Name': lastName,
      Email: email,
      Password: password,
    }),
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'xc-auth': 'iPHtdu7hmzz41tBJkaFj5NkVqtgBKUH1_5XNThS-',
      'xc-token': 'iPHtdu7hmzz41tBJkaFj5NkVqtgBKUH1_5XNThS-',
    }),
    method: 'POST',
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useRegisterUserPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['nocoDBRegisterUserPOST', args],
    () => registerUserPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['nocoDBRegisterUserPOSTS']),
    }
  );
};

export const FetchRegisterUserPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  email,
  firstName,
  lastName,
  password,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useRegisterUserPOST(
    { email, firstName, lastName, password },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchRegisterUser: refetch });
};
