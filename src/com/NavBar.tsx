
import { Link } from 'react-router-dom';
import '../assets/scss/NavBar.scss';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">타입프로젝트</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        {/* 향후 서브페이지 추가 가능 */}
      </ul>
    </nav>
  );
};

export default NavBar;
