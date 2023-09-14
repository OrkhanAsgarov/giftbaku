import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div className='bg-gray-200 my-5 p-5 flex items-center justify-end'>
        <select onChange={e => setSort(e.target.value)} className="px-5" name='' id=''>
            <option disabled value="">SELECT</option>
            <option value="inc">INCREMENT</option>
            <option value="dec">DECREMENT</option>
        </select>
    </div>
  )
}

export default Sorting