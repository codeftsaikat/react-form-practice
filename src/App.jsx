import "./App.css";
import SimpleFrom from "./component/SimpleForm/SimpleFrom";
import Statefull from "./component/Statefull/Statefull";
import RefForm from "./component/RefForm/RefForm";
import Reusable from "./component/ReusableForm/Reusable";

function App() {
  const handleSignInSubmit = (data) => {
    console.log("sign in data", data);
  };

  const handleSignUnUpdate = (data) => {
    console.log("sign up data", data);
  };

  return (
    <>
      <h1>Form Master</h1>
      {/* <SimpleFrom></SimpleFrom> */}
      {/* <Statefull></Statefull> */}
      {/* <RefForm></RefForm> */}
      <Reusable
        fromProps={"Sign up"}
        handleSubmit={handleSignUnUpdate}
      ></Reusable>
      <Reusable
        fromProps={"Sign In"}
        submitBtnText="Submit"
        handleSubmit={handleSignInSubmit}
      ></Reusable>
    </>
  );
}

export default App;
