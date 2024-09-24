import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  const [characters, setCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const fetchCharacters = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      setCharacters(data.results)
    }
  }

  useEffect(() => {
    fetchCharacters()
  }, [currentPage])

  return (
    <>
      <ul>
        {characters.map(currentCharacter => (
          <li key={currentCharacter.id}>
            <Link to={`/characters/${currentCharacter.id}`}>{currentCharacter.name}</Link>
          </li>
        ))}
      </ul>
      {currentPage > 1 && (
        <button type='button' onClick={() => setCurrentPage(currentPage - 1)}>
          Previous page
        </button>
      )}
      <button type='button' onClick={() => setCurrentPage(currentPage + 1)}>
        Next page
      </button>
    </>
  )
}

export default HomePage
