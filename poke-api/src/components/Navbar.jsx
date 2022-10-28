import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'


const Navbar = () => {
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!search) {
      return
    }
    navigate(`search/?q=${search.toLowerCase()}`)
    setSearch('')
  }

  return (
    <div className="top">
      <h2>Pesquise pelo Pokémon</h2>
      <form className="form-search" onSubmit={handleSubmit}>
        <input
          className="inputBx"
          type="text"
          placeholder="Nome ou Número"
          onChange={(e) => {
            setSearch(e.target.value)
          }}
          value={search}
        ></input>
        <button type="submit" className="btn">
          <BiSearch />
        </button>
      </form>
    </div>
  )
}

export default Navbar
