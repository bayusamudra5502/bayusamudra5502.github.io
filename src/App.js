import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <h1
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        Halo, Maih dibangun yaa sabar bos..
      </h1>
    </>
  );
}

export default App;
