/**
 Created on 23.12.2020
 */

//imports
import React, {Component} from 'react'

// import components
import {menuItems} from '../../fixtures'

// import styles

class Dropdown extends Component {

   render() {
      return (
         <div>
					 {menuItems.map((item) => {
					 	 return (
								 <div>
									 {item.title}
								 </div>
						 )
					 })}
         </div>
      )
   }
}

export default Dropdown
