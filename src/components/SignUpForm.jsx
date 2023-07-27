import { useState } from 'react'

export default function SignUpForm( { setToken } ){

const [userName, setUserName] = useState([]);
const [password, setPassword] = useState([]);
const [error, setError] = useState([null]);

async function handleSubmit(e){
    e.preventDefault()
    // console.log('Thank you for your submission!')
    try {

    const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup',
    {
        method: 'POST',
        headers: { 
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({
            username: userName,
            password: password
        })
    }
)

const data = await response.json()

setToken(data.token)

setUserName('')
setPassword('')

} catch(err){
    setError(err)
}
}

return (
    <div>
    <h2>Sign Up</h2>

    <form onSubmit={handleSubmit}>        
        <label >Username: 
        <input value={userName} onChange={(e) => setUserName(e.target.value)} />
        </label>     
        <label>Password: 
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button>Submit</button>
    </form>
    </div>
    )
}
