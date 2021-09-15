import Footer from "assets/css/components/Footer";
import NavBar from "assets/css/components/NavBar";
import DataTable from "assets/css/components/DataTable";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá Mundo!</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
