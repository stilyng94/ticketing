import "bootstrap/dist/css/bootstrap.css";
import withClient from "../api/build-client";
import Header from "../components/Header";

const MyApp = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <div className="container">
        <Component currentUser={currentUser} {...pageProps} />
      </div>
    </div>
  );
};
MyApp.getInitialProps = async ({ Component, ctx }) => {
  const client = withClient(ctx);
  let data = {};
  try {
    const response = await client.get("/api/users/currentuser");
    data = { ...response.data };
  } catch (error) {
    console.log(error.response.data);
  }
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx, client, data.currentUser);
  }

  return { pageProps, ...data };
};
export default MyApp;
