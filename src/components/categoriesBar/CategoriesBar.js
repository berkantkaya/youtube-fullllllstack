import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
   getPopularVideos,
   getVideosByCategory,
} from '../../redux/actions/videos.action'
import './_categoriesBar.scss'

const keywords = [
   'All',
   'Beşiktaş',
   'Karakartal',
   'Beşiktaş Marş',
   'Eminem',
   'Redux',
   'Music',
   'Algorithm Art ',
   'Guitar',
   'Manchester',
   'Coding',
   'Basketball',
   'Football',
   'Real Madrid',
   'Gatsby',
   'Poor Coder',
   'Candan İleri',
]

const CategoriesBar = () => {
   const [activeElement, setActiveElement] = useState('All')

   const dispatch = useDispatch()
   const handleClick = value => {
      setActiveElement(value)
      if (value === 'All') {
         dispatch(getPopularVideos())
      } else {
         dispatch(getVideosByCategory(value))
      }
   }

   return (
      <div className='categoriesBar'>
         {keywords.map((value, i) => (
            <span
               onClick={() => handleClick(value)}
               key={i}
               className={activeElement === value ? 'active' : ''}>
               {value}
            </span>
         ))}
      </div>
   )
}

export default CategoriesBar