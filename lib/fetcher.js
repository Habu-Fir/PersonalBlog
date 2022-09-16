import useSWR from "swr";

const baseURL = "http://localhost:3000/";

const response = (...args) => fetch(...args).then((res) => res.json());

const Fetcher = (endpoint) => {
  const { data, error } = useSWR(`${baseURL}${endpoint}`, response);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default Fetcher;
