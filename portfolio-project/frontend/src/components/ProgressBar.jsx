import React from 'react'

export default function ProgressBar({label,percentage}){
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1"><span>{label}</span><span>{percentage}%</span></div>
      <div className="w-full bg-neutral-800 rounded-full h-4">
        <div className="bg-emerald-500 h-4 rounded-full" style={{width:`${percentage}%`}} />
      </div>
    </div>
  )
}
