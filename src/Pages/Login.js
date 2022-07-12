import {useState} from "react";
import {Navigate} from "react-router-dom";
import {signUp} from "../utils";

const Login = ({ setter, user }) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [logBool, setLogBool] = useState(false);


const submitHandler = async (e) => {
    e.preventDefault();
    await signUp({username, email, password}, setter);
};

return(
    <div>
    {user && <Navigate to="/home" />}
    <form onSubmit={submitHandler}>
        <input onChange={() => setUsername} placeholder="Username" />
        {!logBool && <input onChange = {() => setEmail} placeholder="Email"/>}
        <input onChange={() => setPassword} placeholder="Password" type="password"/>
        <button type = "submit">{logBool ? "Log In" : "Sign Up"}</button>
    </form>
    <button onClick={() => setLogBool(!logBool)}>
        {logBool ? "Don't" : "Already"} have an account?
    </button>
    </div>
)
}

export default Login;
