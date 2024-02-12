import { Scroll, Timer } from "phosphor-react";
import logo from "../../assets/logo.svg";
import { HeaderContainer, Link, Nav } from "./styled";

function Header() {
  return (
    <HeaderContainer>
      <img
        src={logo}
        alt=''
      />
      <Nav>
        <Link
          to='/'
          title='Timer'
        >
          <Timer size={24} />
        </Link>
        <Link
          to='/history'
          title='History'
        >
          <Scroll size={24} />
        </Link>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
