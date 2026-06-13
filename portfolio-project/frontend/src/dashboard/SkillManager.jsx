import React, {useEffect, useState} from 'react'

function authHeaders(){
  const token = localStorage.getItem('token')
  return { 'Content-Type':'application/json', 'Authorization': `Bearer ${token}` }
}

export default function SkillManager(){
  const [skills,setSkills] = useState([])

  useEffect(()=>{
    fetch('/api/portfolio').then(r=>r.json()).then(data=> setSkills(data.skills||[]))
  },[])

  function updateLocal(id,val){
    setSkills(s=>s.map(sk=> sk.id===id? {...sk,percentage:val}:sk))
  }

  async function save(skill){
    await fetch(`/api/skills/${skill.id}`,{method:'PATCH',headers:authHeaders(),body:JSON.stringify({percentage:skill.percentage})})
    alert('Saved')
  }

  return (
    <div className="bg-neutral-800 p-4 rounded">
      <h4 className="font-semibold">Manage Skills</h4>
      <div className="mt-3 space-y-3">
        {skills.map(s=> (
          <div key={s.id} className="bg-neutral-900 p-3 rounded">
            <div className="flex justify-between items-center mb-2"><div>{s.name}</div><div>{s.percentage}%</div></div>
            <input type="range" min="0" max="100" value={s.percentage} onChange={e=>updateLocal(s.id,parseInt(e.target.value))} />
            <div className="mt-2 flex gap-2">
              <button className="px-3 py-1 bg-emerald-500 rounded" onClick={()=>save(s)}>Save</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
