import React, {useEffect, useState} from 'react'

function authHeaders(){
  const token = localStorage.getItem('token')
  return { 'Content-Type':'application/json', 'Authorization': `Bearer ${token}` }
}

export default function ProjectManager(){
  const [projects,setProjects] = useState([])
  const [form,setForm] = useState({title:'',description:'',tech_stack:[],github:'',live_url:''})

  useEffect(()=>{
    fetch('/api/portfolio').then(r=>r.json()).then(data=> setProjects(data.projects||[]))
  },[])

  async function add(){
    const body = {...form,tech_stack: form.tech_stack.filter(Boolean)}
    const res = await fetch('/api/projects',{method:'POST',headers:authHeaders(),body:JSON.stringify(body)})
    if(res.ok){
      const p = await res.json()
      setProjects(s=>[...s,p])
      setForm({title:'',description:'',tech_stack:[],github:'',live_url:''})
    }
  }

  async function remove(id){
    if(!confirm('Delete project?')) return
    const res = await fetch(`/api/projects/${id}`,{method:'DELETE',headers:authHeaders()})
    if(res.ok) setProjects(s=>s.filter(p=>p.id!==id))
  }

  return (
    <div className="bg-neutral-800 p-4 rounded">
      <h4 className="font-semibold">Manage Projects</h4>
      <div className="mt-3 space-y-3">
        {projects.map(p=> (
          <div key={p.id} className="bg-neutral-900 p-3 rounded flex justify-between items-start">
            <div>
              <div className="font-bold">{p.title}</div>
              <div className="text-sm">{p.description}</div>
            </div>
            <div className="flex flex-col gap-2">
              <button className="px-2 py-1 bg-red-600 rounded" onClick={()=>remove(p.id)}>Delete</button>
            </div>
          </div>
        ))}

        <div className="mt-4 border-t pt-3">
          <h5 className="font-semibold">Add Project</h5>
          <input className="w-full p-2 mt-2 bg-neutral-900 rounded" placeholder="Title" value={form.title} onChange={e=>setForm({...form,title:e.target.value})} />
          <textarea className="w-full p-2 mt-2 bg-neutral-900 rounded" placeholder="Description" value={form.description} onChange={e=>setForm({...form,description:e.target.value})} />
          <input className="w-full p-2 mt-2 bg-neutral-900 rounded" placeholder="Tech tags comma separated" value={(form.tech_stack||[]).join(',')} onChange={e=>setForm({...form,tech_stack:e.target.value.split(',')})} />
          <input className="w-full p-2 mt-2 bg-neutral-900 rounded" placeholder="GitHub URL" value={form.github} onChange={e=>setForm({...form,github:e.target.value})} />
          <input className="w-full p-2 mt-2 bg-neutral-900 rounded" placeholder="Live URL" value={form.live_url} onChange={e=>setForm({...form,live_url:e.target.value})} />
          <div className="mt-2"><button className="bg-emerald-500 px-3 py-1 rounded" onClick={add}>Add Project</button></div>
        </div>
      </div>
    </div>
  )
}
