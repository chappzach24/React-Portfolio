import { Link } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';

export default function NavBar(){
  return (
    <CustomNavbar
    links={[
      <Link key={1} className="nav-link text-light" to="/">
        About me
      </Link>,
      <Link key={2} className="nav-link text-light" to="/portfolio">
        Portfolio
      </Link>,
      <Link key={3} className="nav-link text-light" to="/contact">
        Contact
      </Link>,
      <Link key={4} className="nav-link text-light" to="/resume">
        Resume
      </Link>,
    ]}
    />
  );
}