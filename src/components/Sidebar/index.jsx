import React from 'react'
import {SidebarContainer, SidebarWrapper} from './style'
import PropTypes from 'prop-types'
import { NavLink, withRouter} from 'react-router-dom'



function Sidebar({routers, ...props}) {
    return (
       <SidebarWrapper>
         <SidebarContainer>
         <ul className="list-unstyled components">
            
            { routers.map(({path, label, icon}, k)=>(
                <li key={k}>
                <NavLink to={path}>
                {icon  ? <i className={icon}/> : null}
                &nbsp;{label}
                </NavLink>
            </li>
            ))}
        </ul>
        </SidebarContainer>
       </SidebarWrapper>
       
    )
}
Sidebar.propTypes = {
    routers: PropTypes.array,
    match: PropTypes.any
}

export default withRouter(Sidebar);
