import React from 'react'

export default function Connect(){
  return (
    <section id="connect" className="pt-8">
      <h3 className="text-xl font-semibold">Let's Connect</h3>
      <div className="mt-3 bg-neutral-800 p-4 rounded">
        <div>Email: <a className="underline" href="mailto:your.email@example.com">your.email@example.com</a></div>
        <div>Phone: <a className="underline" href="tel:+977XXXXXXXXXX">+977XXXXXXXXXX</a></div>
        <div>LinkedIn: <a className="underline" href="https://linkedin.com/in/username" target="_blank" rel="noreferrer">linkedin.com/in/username</a></div>
      </div>
    </section>
  )
}
