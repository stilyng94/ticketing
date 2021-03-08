import React, { useState } from "react";
import useRequest from "../hooks/use-request";
import Router from "next/router";

const AuthForm = ({ formType, url }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { errors, doRequest } = useRequest({
    url: url,
    body: formData,
    method: "post",
    onSuccess: (_) => {
      setFormData({ email: "", password: "" });
      Router.push("/");
      return;
    },
  });

  const onInputChangeHandler = (ev) => {
    ev.stopPropagation();

    const target = ev.target.type;
    const value = ev.target.value;

    setFormData({ ...formData, [target]: value });

    return;
  };

  const onSubmitHandler = async (ev) => {
    ev.preventDefault();
    await doRequest();
    return;
  };

  return (
    <div>
      <form method="POST" onSubmit={onSubmitHandler}>
        <h1>{formType}</h1>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            value={formData.email}
            onChange={onInputChangeHandler}
            type="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            value={formData.password}
            onChange={onInputChangeHandler}
            type="password"
            className="form-control"
          />
        </div>
        <button
          type="submit"
          onSubmit={onSubmitHandler}
          className="btn btn-primary"
        >
          {formType}
        </button>
        {errors}
      </form>
    </div>
  );
};

export default AuthForm;
