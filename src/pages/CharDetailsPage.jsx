import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CharDetailsPage = () => {
  const { charId } = useParams()

  const [character, setCharacter] = useState({})

  const fetchCharacter = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${charId}`)
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      setCharacter(data)
    }
  }

  useEffect(() => {
    fetchCharacter()
  }, [])

  return (
    <>
      <h1>Details of {character.name}</h1>
      <img src={character.image} style={{ width: '150px' }} />
    </>
  )
}

export default CharDetailsPage
