import React, { useEffect, useState, useRef } from 'react';
import Switch from '@mui/material/Switch';
import Link from '@mui/material/Link';
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { svgs } from '../../utils/svgs'
import "./nav.scss"

function Nav(props) {
    const ref = useRef(null)
    const { onClickOutside } = props;
    const [menuActive, setMenuActive] = useState(props.navOpen)

    function swapMode() {
        const body = document.querySelector('body')

        body.hasAttribute('data-theme') ? body.removeAttribute('data-theme') : body.setAttribute('data-theme', 'light')
    }

    function toggleMenu() {
        setMenuActive(menuActive => !menuActive)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
              setMenuActive(false)
            }
          };
          document.addEventListener('click', handleClickOutside, true);
          return () => {
            document.removeEventListener('click', handleClickOutside, true);
          };
    },[onClickOutside])

    const navWrapper = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingInline: '1rem',
        backgroundColor: 'var(--background-color-fill)'
    }

    const navModeSwitcher = {
        display: 'flex',
        alignItems: 'center',
    }

    const label = { inputProps: { 'aria-label': 'dark-mode-switch' } };

    return (
     <nav style={navWrapper}>
        <div className="nav_link-wrapper" data-active={menuActive}>
            <Link href="#About" underline="none">About</Link>
            <Link href="#Portfolio" underline="none">Portfoloio</Link>
            <Link href="mailto:Frances.Morrison87@gmail.com.com" underline="none">Contact Me</Link>
            <div className="nav_icon-link-wrapper">
                <Link href="https://github.com/FMorrison87" target="_blank" rel="noopener" underline="none">{ svgs.github }</Link>
                <Link href="https://www.linkedin.com/in/frances-morrison87/" target="_blank" rel="noopener" underline="none">{ svgs.linkedin }</Link>
            </div>
        </div>
        <div style={navModeSwitcher}>
            <LightModeIcon />
            <Switch {...label} onChange={swapMode} defaultChecked></Switch>
            <DarkModeIcon />
        </div>
        <div className="nav_hamburger-wrapper" onClick={toggleMenu} ref={ref}>
        { menuActive ? <MenuOpenIcon className="nav_menu-icon" /> : <MenuIcon className="nav_menu-icon" /> }
        </div>
     </nav>
    );
  }
  
export default Nav;