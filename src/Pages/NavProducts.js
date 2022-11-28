import React from 'react'
import { useFilterContext } from '../Context/filter_context'

const NavProducts = () => {
    const {filter_products} =useFilterContext()
  return (
    <div>NavProducts</div>
  )
}

export default NavProducts