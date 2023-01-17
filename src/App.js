import Navbar from "./_shared/components/Navbar/Navbar";
import "./styles/index.scss";
import ViewProduct from "./_shared/components/ViewProduct/ViewProduct";
function App() {
  return (
    <>
      <div className="o-container">
        <Navbar />
        <ViewProduct />
      </div>
    </>
  );
}

export default App;
