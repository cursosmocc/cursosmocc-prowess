import React from 'react'
import FormStudent from '../components/student/FormStudent'

const StudentPageForm = () => {
  return (
    <div className={`p-4 my-container`}>
        <h1 className='text-center'>REGISTRAR ESTUDIANTE</h1>
        <FormStudent/>
    </div>
  )
}

export default StudentPageForm