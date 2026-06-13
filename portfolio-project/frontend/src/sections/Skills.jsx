import React, {useEffect, useState} from 'react'
import ProgressBar from '../components/ProgressBar'

export default function Skills(){
  const [skills,setSkills] = useState([])

  useEffect(()=>{
    fetch('/api/portfolio').then(r=>r.json()).then(data=>{
      setSkills(data.skills || [])
    })
  },[])

  return (
    <section id="skills" className="pt-8">
      <h3 className="text-xl font-semibold">Technical Skills</h3>
      <div className="mt-3">
        {skills.map(s=> <ProgressBar key={s.id} label={s.name} percentage={s.percentage} />)}
      </div>
    </section>
  )
}
