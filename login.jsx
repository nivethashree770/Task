import { useState } from "react"

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
    <>
        <form onSubmit={handleSubmit} action="public/index.html">
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password" />
            <button onClick={props.onFromSwitch} type="submit">Login</button>
        </form>
    </>    
    )
}