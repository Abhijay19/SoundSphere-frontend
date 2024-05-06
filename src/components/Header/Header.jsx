import { useEffect, useState, useContext } from "react";
import {useNavigate} from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import {TbSearch} from "react-icons/tb"
import {CgShoppingCart} from "react-icons/cg"
import {AiOutlineHeart} from "react-icons/ai"

import Search from "./Search/Search";
import Cart from "../Cart/Cart"
import { Context } from "../../utils/context";

import "./Header.scss";

const Header = () => {

    const {cartCount} = useContext(Context);
    const [scrolled,setScrolled] = useState(false)
    const [showCart,setShowCart] = useState(false)
    const [showSearch,setShowSearch] = useState(false)
    const navigate  = useNavigate();
    const { user,loginWithRedirect,logout,isAuthenticated } = useAuth0();
    const handleScroll = () =>{
        const offset = window.scrollY
        if(offset>200){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
    }
    useEffect(() =>{
        window.addEventListener("scroll", handleScroll)
    }, [])
    return( 
    <>
    <header className={`main-header ${scrolled ? 'header-sticky' : ''}`}>
        <div className="header-content">
            <ul className="left">        
                <li onClick={() => navigate('/')}>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ul>
            <div className="center" onClick={() => navigate('/')}>SoundSphere</div>
            <div className="right">
                <TbSearch onClick={() => {setShowSearch(true)}}/>
                <AiOutlineHeart />
                <span className="cart-icon" onClick={() => {setShowCart(true)}}>
                    <CgShoppingCart />
                    {!!cartCount && <span>{cartCount}</span>}
                </span>
                {isAuthenticated && <p>{user.name}</p>}
                {isAuthenticated? (
                    <button className="button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                </button>) : (
                    <button className="button" onClick={() => loginWithRedirect()}>Log In</button>
                )}
                
                
            </div>
        </div>
    </header>
    {showCart && <Cart  setShowCart={setShowCart}/>}
    {showSearch && <Search  setShowSearch={setShowSearch}/>}
    </>
    );
};

export default Header;
