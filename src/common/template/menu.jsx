import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Dashboard' icon='dashboard' />
        <MenuTree label='Cadastros' icon='edit'> 
            <MenuItem path='myFleet'
                label='My Fleet' icon='fighter-jet' />
        </MenuTree>
    </ul>
)