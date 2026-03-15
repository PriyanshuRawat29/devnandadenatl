import React, { useState, useEffect } from 'react';
import { FaTooth, FaMoon, FaSun, FaGlobe } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav className={`navbar ${isSticky ? 'sticky' : ''}`} id="navbar">
            <div className="container">
                <a href="#" className="logo" onClick={closeMenu}>
                    <FaTooth /> DEVNANDA<span>CLINIC</span>
                </a>

                <div className="header-actions">
                    <div className="lang-switcher">
                        <button
                            onClick={() => changeLanguage('en')}
                            className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
                        >
                            EN
                        </button>
                        <span className="lang-divider">|</span>
                        <button
                            onClick={() => changeLanguage('hi')}
                            className={`lang-btn ${i18n.language === 'hi' ? 'active' : ''}`}
                        >
                            हिंदी
                        </button>
                    </div>

                    <button
                        onClick={toggleTheme}
                        className="theme-toggle-btn"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? <FaMoon /> : <FaSun />}
                    </button>

                    <div
                        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        id="mobile-menu"
                        onClick={toggleMenu}
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href="#home" className="nav-link" onClick={closeMenu}>{t('nav.home')}</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link" onClick={closeMenu}>{t('nav.about')}</a>
                    </li>
                    <li className="nav-item">
                        <a href="#services" className="nav-link" onClick={closeMenu}>{t('nav.services')}</a>
                    </li>
                    <li className="nav-item">
                        <a href="#reviews" className="nav-link" onClick={closeMenu}>{t('nav.reviews')}</a>
                    </li>
                    <li className="nav-item">
                        <a href="#why-choose-us" className="nav-link" onClick={closeMenu}>{t('nav.why_choose_us')}</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link nav-btn" onClick={closeMenu}>{t('nav.book_appointment')}</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
