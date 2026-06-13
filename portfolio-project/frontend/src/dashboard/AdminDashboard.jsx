import React, {useEffect, useState} from 'react'
import SkillManager from './SkillManager'
import ProjectManager from './ProjectManager'

export default function AdminDashboard(){
  const [stats,setStats] = useState({totalProjects:0,avgSkill:0})

  useEffect(()=>{
    fetch('/api/portfolio').then(r=>r.json()).then(data=>{
      const totalProjects = (data.projects||[]).length
      const avgSkill = data.skills && data.skills.length ? Math.round(data.skills.reduce((s,a)=>s+a.percentage,0)/data.skills.length) : 0
      setStats({totalProjects,avgSkill})
    })
  },[])

  return (
    <div className="container p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-neutral-800 p-4 rounded">
          <h4 className="font-semibold">Total Projects</h4>
          <div className="text-3xl mt-2">{stats.totalProjects}</div>
        </div>
        <div className="bg-neutral-800 p-4 rounded">
          <h4 className="font-semibold">Average Skill Score</h4>
          <div className="text-3xl mt-2">{stats.avgSkill}%</div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SkillManager />
        <ProjectManager />
      </div>
    </div>
  )
}
