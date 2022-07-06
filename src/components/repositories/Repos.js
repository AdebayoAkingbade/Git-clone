import React from 'react'
import Repo from './Repo'
import './Repo.css'

const Repos = ({user, repos}) => {
  return (
    <section className="repos">
    {repos.map((repo)=> (
      <Repo key={repo.id} repo={repo} user={user} />
    ))}
    </section>
  )
}

export default Repos