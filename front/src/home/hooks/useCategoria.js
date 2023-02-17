import {useEffect, useState} from 'react'

const useCategoria = () => {
    const [categorias, setcategorias] = useState([])
    useEffect(() => {
        const getCategorias = async () => {
            const url = 'http://localhost:4000/categorias'
            const response = await fetch(url)
            const data = await response.json()
            setcategorias(data)
        }
        getCategorias()
    }, [])
  return{
    categorias
  }
}

export default useCategoria