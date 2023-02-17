import React from 'react'
import FormCourse from '../components/courses/FormCourse'

const CoursePageForm = () => {
  return (
   <div className={`p-4 my-container`}>
   <h1 className='text-center'>CREAR CURSO</h1>
        <FormCourse />
    </div>
  )
}

export default CoursePageForm