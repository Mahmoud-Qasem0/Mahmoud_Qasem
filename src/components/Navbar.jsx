import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { changeTapActive } from "../redux/action";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar({activeTab}) {
  const dispatch = useDispatch();
  const [listNav] = useState(['home', 'skills', 'projects', 'contacts']);
  const changeTab = (value) => {
    dispatch(changeTapActive(value));
    toggleNav();
  }
  const [bergerIcon, setBergerIcon] = useState('');
  const toggleNav = () => {
    setBergerIcon(bergerIcon === 'active' ? null : 'active');
  };
  return (
    <header>
      <div className="logo" style={{fontSize: '1.5em'}}>
        M_Q
      </div>
      <nav className={bergerIcon}>
        {
          listNav.map((val, key) => {
            return <span key={key} 
            className={activeTab === val ? 'active' : ''}
            onClick={() => {changeTab(val)}}>{val}</span>
          })
        }
      </nav>
      <div className="icon-bar" onClick={() => {toggleNav()}}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  )
}
const mapStateToProps = (state) => ({
  activeTab: state.activeTab
})
export default connect(mapStateToProps, changeTapActive) (Navbar);