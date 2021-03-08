import AuthForm from "../../components/AuthForm";

const SignIn = () => {
  return <AuthForm url={"/api/users/signin"} formType={"Sign In"} />;
};

export default SignIn;
