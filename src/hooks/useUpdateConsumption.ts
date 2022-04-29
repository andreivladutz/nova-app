import { useMutation, useQueryClient } from "react-query";
import { HttpClientError } from "../apiConsumer/client";
import { updateConsumption } from "../apiConsumer/queries";
import { UpdateConsumptionBody, UpdateConsumptionResponse } from "../shared";
import { QUERY_KEYS } from "../utils/CONST";

const useUpdateConsumption = (
  billId: number | undefined,
  userToken: string | null
) => {
  const queryClient = useQueryClient();

  // Update the consumption with a mutation
  // and if successful then also update the query for the consumption
  // with the latest consumption returned by the server
  return useMutation<
    UpdateConsumptionResponse,
    HttpClientError,
    UpdateConsumptionBody,
    unknown
  >(updateConsumption, {
    onSuccess(updatedConsumption) {
      queryClient.setQueryData(
        [QUERY_KEYS.CONSUMPTION, billId, userToken],
        updatedConsumption
      );
    },
  });
};

export default useUpdateConsumption;
