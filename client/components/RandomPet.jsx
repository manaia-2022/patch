import { useSelector } from 'react-redux'

export default function RandomPet() {
  const randomPet = useSelector((state) => state.randomPet)
  return <>{randomPet}</>
}
