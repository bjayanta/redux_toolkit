import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./actions/authAction";
import { incrementAction, decrementAction } from "./actions/counterAction";

function App() {
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const isAuth = useSelector(state => state.auth.isAuth);
  console.log(isAuth.toString());

  const count = useSelector(state => state.counter.count);

  return (
    <div>
      <h3>Hello world!</h3>
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button onClick={(e) => dispatch(loginAction(phone))}>Login</button>

      <div>
        <button onClick={() => dispatch(decrementAction())}>-</button>
        <span>{ count }</span>
        <button onClick={() => dispatch(incrementAction())}>+</button>
      </div>
    </div>
  );
}

export default App;
