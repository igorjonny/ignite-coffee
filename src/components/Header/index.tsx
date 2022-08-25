import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import coffeeLogo from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffeeLogo} alt="" />
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
