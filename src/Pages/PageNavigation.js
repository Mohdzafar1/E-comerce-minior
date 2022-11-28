import React from 'react'
import { Link } from 'react-router-dom'

const PageNavigation = ({title}) => {
  return (
    <div>
    <div className='container pt-5'>
    <Link to="/" >Home/</Link>{title}
    </div>
    </div>
  )
}

export default PageNavigation