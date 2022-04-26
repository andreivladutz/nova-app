import { useQuery } from "react-query";
import { User } from "../shared";
import { HttpClientError } from "../apiConsumer/client";
import { getUser } from "../apiConsumer/queries";

const useDefaultQueries = (userToken: string) => {
  const userQuery = useQuery<User, HttpClientError>("user", () =>
    getUser(userToken)
  );

  console.log(userQuery);
};

export default useDefaultQueries;
