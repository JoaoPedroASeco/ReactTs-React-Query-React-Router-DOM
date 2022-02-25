import { useEffect, useState } from 'react'

type Repository = {
  full_name: string
  description: string
}

function App() {
  const [ repositories, setRepositories ] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/diego3g/repos')
      .then(response => response.json())
      .then(data => {
        setRepositories(data)
      })
  })
  return <>{repositories.map(repo => {
    return (
      <li>
        {repo.full_name}
         {repo.description}
      </li>
    )
  })}</>
}

export default App
