import React from "react";
import useRequest from "../hooks/use-request";
import Router from "next/router";

const NewTicketForm = ({ formType, url }) => {
  const [formData, setFormData] = useState({ title: "", price: "" });
  const { errors, doRequest } = useRequest({
    url: url,
    body: formData,
    method: "post",
    onSuccess: (_) => {
      setFormData({ title: "", price: "" });
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

  const onPriceBlur = (_) => {
    let value = parseFloat(formData.price);
    if (isNaN(value)) {
      return;
    }
    value = value.toFixed(2);
    setFormData({ ...formData, price: value });
    return;
  };
  return (
    <div>
      <form method="POST" onSubmit={onSubmitHandler}>
        <h1>{formType}</h1>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            value={formData.title}
            onChange={onInputChangeHandler}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            value={formData.price}
            onChange={onInputChangeHandler}
            type="number"
            className="form-control"
            onBlur={onPriceBlur}
          />
        </div>
        <button
          type="submit"
          onSubmit={onSubmitHandler}
          className="btn btn-primary"
        >
          Submit
        </button>
        {errors}
      </form>
    </div>
  );
};

export default NewTicketForm;
