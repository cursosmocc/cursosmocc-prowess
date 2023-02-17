import React from 'react'
import FormCategory from '../components/category/FormCategory'

const CategoryPageForm = () => {
  return (
   <div className={`p-4 my-container`}>
   <h1 className='text-center'>CREAR CATEGORIA</h1>
        <FormCategory />
    </div>
  )
}

export default CategoryPageForm