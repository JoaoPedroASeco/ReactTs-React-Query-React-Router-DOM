import axios from 'axios'
import { useQuery } from 'react-query'

type Repository = {
  full_name: string
  description: string
}

export function Repo() {
  const { data, isFetching } = useQuery<Repository[]>('repos', async () => {
    const response = await axios.get('https://api.github.com/users/diego3g/repos')

    return response.data
  }, {
    refetchOnWindowFocus: true,
  })

  return (
    <ul>
      { isFetching && <p>Carregando...</p> }
      {data?.map(repo => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  )
}
