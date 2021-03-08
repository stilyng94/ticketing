import AuthForm from "../../components/AuthForm";

const Signup = () => {
  return <AuthForm url={"/api/users/signup"} formType={"Sign Up"} />;
};

export default Signup;
