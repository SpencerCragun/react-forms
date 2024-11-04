import { useState } from "react";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`not refreshing`);
  }
  
  return (
  <>
    <h2>Sign Up!</h2>
    <form onSubmit={handleSubmit}>
      <input 
      placeholder="Username"
      value={username}
      onChange={(event) => {setUsername(event.target.value)}}
      />
      <input 
      placeholder="Password"
      value={password}
      onChange={(event) => {setPassword(event.target.value)}}
      />
      <button>Submit</button>
    </form>
  </>
  )
}

export default SignUpForm