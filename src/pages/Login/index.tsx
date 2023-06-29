import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";

function Login() {
  return (
    <div className="container">
      <div className="content">
        <Header />
        <Card />
        <Footer />
      </div>
    </div>
  );
}

export default Login;
