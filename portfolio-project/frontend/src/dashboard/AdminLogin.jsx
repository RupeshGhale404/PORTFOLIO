import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function AdminLogin(){
  const [email,setEmail] = useState('admin@example.com')
  const [password,setPassword] = useState('password')
  const [error,setError] = useState(null)
  const nav = useNavigate()

  async function submit(e){
    e.preventDefault()
    setError(null)
    const res = await fetch('/api/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})})
    if(res.ok){
      const data = await res.json()
      localStorage.setItem('token', data.token)
      nav('/admin')
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="container mt-12">
      <form onSubmit={submit} className="max-w-md mx-auto bg-neutral-800 p-6 rounded">
        <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
        {error && <div className="text-red-400 mb-2">{error}</div>}
        <label className="block mb-2">Email<input className="w-full p-2 bg-neutral-900 mt-1 rounded" value={email} onChange={e=>setEmail(e.target.value)} /></label>
        <label className="block mb-4">Password<input type="password" className="w-full p-2 bg-neutral-900 mt-1 rounded" value={password} onChange={e=>setPassword(e.target.value)} /></label>
        <button className="bg-emerald-500 px-4 py-2 rounded">Login</button>
      </form>
    </div>
  )
}
