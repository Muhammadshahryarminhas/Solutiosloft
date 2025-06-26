import logo from '../Assets/Logo.png';
import HeaderButton from './HeaderButton';

const Header = () => {
  return (
    <header className="container mx-auto py-8 flex justify-between items-center z-50">
      <img src={logo} alt="Solutionsloft Logo" className="h-14 w-auto" />
      <HeaderButton/>
    </header>
  );
};

export default Header;