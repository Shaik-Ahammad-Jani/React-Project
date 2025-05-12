import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <h1>CodeCampus</h1>
        </div>
        <div>
          <ul className="nav">
            <li>Home</li>
            <li>Courses</li>
            <li>Tutorial</li>
            <li>Notes</li>
          </ul>
        </div>
        <div>
  <Link to='/'><button className='btnn'>LogOut</button></Link>
          {/* <button>Sign Up</button> */}
        </div>
      </div>
    </>
  );
};
export default Header;
