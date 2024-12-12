import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
    return (
      <div className='d-flex justify-content-center align-items-center'>
        <img src={loading} alt='loading' style={{height : "4rem"}}/>
      </div>
    )
}

export default Spinner