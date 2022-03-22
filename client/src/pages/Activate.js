import { useState } from 'react'
import { useParams } from 'react-router-dom'

function Activate() {
    const [key, setKey] = useState('')
    const { email } = useParams()

    async function activateUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:1337/api/activate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                key,
            }),
        })

        const data = await response.json()

        if (data.status === 'ok') {
            window.location.href = `/login`
        } else {
            alert("Wrong key")
        }
    }
    return (
        <div>
            <h1>Put your activation key for {email}</h1>
            <form onSubmit={activateUser}>
                <input
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    type="text"
                    placeholder="Key"
                />
            </form>
        </div>
    )
}


export default Activate