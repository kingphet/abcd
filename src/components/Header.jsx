import React from 'react'
import { useState } from 'react'
import './Header.css'
import { CiMenuBurger } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineDisconnect } from "react-icons/ai";
import { MdContentPaste } from "react-icons/md";
import { BiX } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import logo2 from '../images/logo2.png'

function Header() {
    const [showmenu, setshowmenu] = useState(false)
    const addmenu = () => setshowmenu(!showmenu)

  return (
  <>        
    <div className={showmenu? 'nav_menu show' : 'nav_menu'}>
        <nav className="navbar">
            <div className="nav">
                <div className="nav-bar">
                        <div className="closenav">
                            <BiX onClick={addmenu} />
                        </div>
                        <ul onClick={addmenu}>
                            <NavLink to="/"><li><AiFillHome size={25} /> ໜ້າຫຼັກ</li></NavLink> 
                            <NavLink to="/work"><li><MdContentPaste size={25} /> ຜົນງານ</li></NavLink> 
                            <NavLink to="/about"><li><AiOutlineUser size={25} /> ກຽ່ວກັບພວກເຮົາ</li></NavLink> 
                            <NavLink to="/contect"><li><AiOutlineDisconnect size={25} /> ຊ່ອງທາງການຕິດຕໍ່</li></NavLink> 
                        </ul>
                </div>
            </div>
        </nav>
    </div>
    
    <div className="container">
            <div className="header">
                    <div className="logo">
                            <img src={logo2} alt="logo" />
                    </div>
                    <div className="content-list">
                        <ul>
                             <NavLink to="/"><li>ໜ້າຫຼັກ</li></NavLink> 
                             <NavLink to="/work"><li>ຜົນງານ</li></NavLink> 
                             <NavLink to="/about"><li>ກຽ່ວກັບພວກເຮົາ</li></NavLink> 
                             <NavLink to="/contect"><li>ຊ່ອງທາງການຕິດຕໍ່</li></NavLink> 
                        </ul>
                        <div className="opennav">
                            <CiMenuBurger onClick={addmenu} style={{cursor: "pointer"}} />
                        </div>
                    </div>
            </div>
    </div>
      
    </>
  )
}

export default Header