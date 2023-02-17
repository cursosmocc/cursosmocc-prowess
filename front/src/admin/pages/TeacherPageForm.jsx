import React from 'react'
import FormTeacher from '../components/teacher/FormTeacher'

const TeacherPageForm = ({claseActiva}) => {
  return (
    <div className={`p-4 my-container ${claseActiva===""? "":claseActiva}`}>
        <h1 className='text-center'>REGISTRAR DOCENTE</h1>
        <FormTeacher/>
    </div>
  )
}

export default TeacherPageForm