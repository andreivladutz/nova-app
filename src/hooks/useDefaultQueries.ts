import { useQuery } from "react-query";
import { Bill, ConsumptionResponse, User } from "../shared";
import { HttpClientError } from "../apiConsumer/client";
import { getConsumption, getLatestBill, getUser } from "../apiConsumer/queries";
import { QUERY_KEYS } from "../utils/CONST";

const useDefaultQueries = (userToken: string | null) => {
  const user = useQuery<User, HttpClientError>(
    [QUERY_KEYS.USER, userToken],
    ({ queryKey: [, token] }) => getUser(token as string),
    { enabled: !!userToken }
  );

  const latestBill = useQuery<Bill, HttpClientError>(QUERY_KEYS.BILL, () =>
    getLatestBill()
  );

  const { data } = latestBill;
  const billId = data?.billId;

  const consumption = useQuery<ConsumptionResponse, HttpClientError>(
    [QUERY_KEYS.CONSUMPTION, billId, userToken],
    ({ queryKey: [, id, token] }) =>
      getConsumption(id as number, token as string),
    {
      enabled: typeof billId === "number" && !!userToken,
    }
  );

  return {
    user,
    latestBill,
    consumption,
  };
};

export default useDefaultQueries;
