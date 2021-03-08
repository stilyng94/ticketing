import React, { useEffect } from "react";
import useRequest from "../hooks/use-request";
import Router from "next/router";

const SignOut = () => {
  const { doRequest } = useRequest({
    url: "/api/users/signout",
    method: "post",
    body: {},
    onSuccess: (_) => Router.replace("/"),
  });

  useEffect(() => {
    doRequest();
  }, []);
  return <div>Signing out ...</div>;
};

export default SignOut;
