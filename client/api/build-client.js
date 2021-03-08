import axios from "axios";

const buildClient = ({ req }) => {
  if (typeof window === "undefined") {
    //! We on server
    //! http://SERVICENAME.NAMESPACE.svc.cluster.local

    return axios.create({
      baseURL:
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
      headers: {
        ...req.headers,
      },
    });
  } else {
    //!We on client side
    return axios.create({ baseURL: "/", withCredentials: true });
  }
};

export default buildClient;
