import { useState } from "react";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/signup`,{
        method: 'POST', 
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      setError(error.message)
    }
  }
  
  return (
  <>
    <h2>Sign Up!</h2> 
    {error && <p>{error}</p>}
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