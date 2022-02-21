import "./styles.css";
import react from "react";
import { useState } from "react";

export default function App() {
  const [password, setpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const handleSubmit = () => {
    if (password === newpassword) {
      alert("match sucessfull");
      setpassword("");
      setnewpassword("");
    } else {
      alert("password didnt match");
    }
  };
  const handlepass = (e) => {
    let val1 = e.target.value;
    setpassword(val1);
    console.log(val1, "val1");
  };
  const handleChangepass = (e) => {
    let val2 = e.target.value;
    setnewpassword(val2, "val2");
    console.log(val2);
  };
  return (
    <div className="App">
      <div>
        {" "}
        <input
          type="password"
          placeholder="enter password"
          onChange={handlepass}
          value={password}
        />
      </div>

      <input
        type="password"
        placeholder="Again enter password"
        onChange={handleChangepass}
        value={newpassword}
      />
      <input type="submit" onClick={handleSubmit} />
    </div>
  );
}
