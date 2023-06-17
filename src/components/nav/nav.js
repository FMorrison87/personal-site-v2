import React from 'react';
import { useState } from 'react'
import Switch from '@mui/material/Switch';
import Link from '@mui/material/Link';
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { svgs } from '../../utils/svgs'
import "./nav.scss"

function Nav() {
    const [menuActive, setMenuActive] = useState(false)

    function swapMode() {
        const body = document.querySelector('body')

        body.hasAttribute('data-theme') ? body.removeAttribute('data-theme') : body.setAttribute('data-theme', 'light')
    }

    function toggleMenu() {
        let newMenuActive = !menuActive

        setMenuActive(newMenuActive)
    }

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
            <Link href="#About" underline="none" onClick={toggleMenu}>About</Link>
            {/* <Link href="#Ethos" underline="none" onClick={toggleMenu}>Ethos</Link>
            <Link href="#Technologies" underline="none" onClick={toggleMenu}>Technologies</Link> */}
            <Link href="#Portfolio" underline="none" onClick={toggleMenu}>Portfoloio</Link>
            <div className="nav_icon-link-wrapper">
                <Link href="https://github.com/FMorrison87" target="_blank" rel="noopener" underline="none" onClick={toggleMenu}>{ svgs.github }</Link>
                <Link href="https://www.linkedin.com/in/frances-morrison87/" target="_blank" rel="noopener" underline="none" onClick={toggleMenu}>{ svgs.linkedin }</Link>
            </div>
        </div>
        <div style={navModeSwitcher}>
            <LightModeIcon />
            <Switch {...label} onChange={swapMode} defaultChecked></Switch>
            <DarkModeIcon />
        </div>
        { menuActive ? <MenuOpenIcon className="nav_menu-icon" onClick={toggleMenu} /> : <MenuIcon className="nav_menu-icon" onClick={toggleMenu} /> }
     </nav>
    );
  }
  
export default Nav;