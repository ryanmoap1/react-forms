import { useState } from "react";




export default function SignupForm() {

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");
    
    const [error, setError] = useState(null);

   

    return (
    <>
    <h2>Sign Up!</h2>
    <form>
        <label>
            Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
            Password: <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <button>Submit</button>
    </form>
    </>
    )
}

