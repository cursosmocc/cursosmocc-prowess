import React from 'react'

const MethodPay = () => {
  return (
    <>
        <div className='d-flex justify-content-sm-center align-items-lg-center gap-3 mt-4'>
            <input type="text" className='form-control w-50 '/>
            <button className='btn btn-success'>Buscar por Curso</button>
            <button className='btn btn-success'>Buscar por Usuario</button>
        </div>
        <div className='mt-4'>
            <table className='table table-striped'>
                <thead className='table-dark'>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default MethodPay