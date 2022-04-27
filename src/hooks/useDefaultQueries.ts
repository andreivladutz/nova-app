import { useQuery } from "react-query";
import { Bill, User } from "../shared";
import { HttpClientError } from "../apiConsumer/client";
import { getLatestBill, getUser } from "../apiConsumer/queries";
import { QUERY_KEYS } from "../utils/CONST";

const useDefaultQueries = (userToken: string) => {
  const user = useQuery<User, HttpClientError>(QUERY_KEYS.USER, () =>
    getUser(userToken)
  );

  const latestBill = useQuery<Bill, HttpClientError>(QUERY_KEYS.BILL, () =>
    getLatestBill()
  );

  return {
    user,
    latestBill,
  };
};

export default useDefaultQueries;
