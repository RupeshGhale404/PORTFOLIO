import React, {useEffect, useState} from 'react'

export default function ProjectsGrid(){
  const [projects,setProjects] = useState([])
  useEffect(()=>{
    fetch('/api/portfolio').then(r=>r.json()).then(data=> setProjects(data.projects || []))
  },[])

  return (
    <section id="projects" className="pt-8">
      <h3 className="text-xl font-semibold">Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {projects.slice(0,4).map(p=> (
          <div key={p.id} className="bg-neutral-800 p-4 rounded">
            <div className="font-bold">{p.title}</div>
            <div className="text-sm text-neutral-300 mt-1">{p.description}</div>
            <div className="mt-2 flex flex-wrap gap-2">{(p.tech_stack||[]).map((t,idx)=>(<span key={idx} className="text-xs bg-neutral-700 px-2 py-1 rounded">{t}</span>))}</div>
            <div className="mt-3 flex gap-3">
              {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="text-sm underline">GitHub</a>}
              {p.live_url && <a href={p.live_url} target="_blank" rel="noreferrer" className="text-sm underline">Live Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
