import "./App.css";
import LoginForm from "./components/LoginForm";
import Wellcome from "./components/Wellcome";
function sayHi() {
  alert("asdgahsdg");
}

function App() {
  return (
    <div>
      <p>adhasdkjahsdk</p>
      <button>Click me</button>
      <Hello name="adhjadh" cssStyle="red" />
      <Hello name="đágád" cssStyle="green" />
      <LoginForm hi={sayHi} />
      <Wellcome user={{ id: 1, name: "Admin" }}></Wellcome>
    </div>
  );
}
function Hello(props) {
  let style =
    props.cssStyle == "red"
      ? { color: "red", fontSize: 20 }
      : { color: "green", fontSize: 20 };
  return (
    <div>
      <p>{props.name}</p>
      <p style={style}>ádhhjasgdhjasgdhj</p>
      <p style={style}>ádhhjasgdhjasgdhj</p>
    </div>
  );
}

export default App;
