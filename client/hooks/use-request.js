import { useState } from "react";
import axios from "axios";

const useRequest = ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async (props = {}) => {
    setErrors(null);
    try {
      const { data } = await axios[method](url, {
        ...body,
        ...props,
      });
      if (onSuccess) {
        onSuccess(data);
      }
    } catch (error) {
      const errors = error.response.data;
      setErrors(
        <div className="alert alert-danger">
          <h4>Oooops....</h4>
          <ul className="my-0">
            {errors.map((error, index) => (
              <li key={error.index}>error.message</li>
            ))}
          </ul>
        </div>
      );
    }
    return;
  };

  return { errors, doRequest };
};

export default useRequest;
