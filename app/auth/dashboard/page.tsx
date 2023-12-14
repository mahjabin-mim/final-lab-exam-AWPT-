import Dashboard from "@/app/components/dashboard";
import Navbar from "@/app/components/navbar";
import LogoutButton from "@/app/components/logoutBtn";

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <LogoutButton />
      <h1>Dashboard</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "20px",
        }}
      >
        <a href="/">Physical Store</a>
        <a href="/">Social Media</a>
        <a href="/">Ecommerce Web App</a>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Dashboard channel="physical store" />
        <Dashboard channel="social media" />
        <Dashboard channel="ecommerce" />
      </div>
    </div>
  );
};

export default Home;
