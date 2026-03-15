import React from 'react';
import { FaTooth, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-col">
                        <a href="#" className="logo footer-logo">
                            <FaTooth /> DEVNANDA<span>CLINIC</span>
                        </a>
                        <p>{t('footer.description')}</p>
                    </div>
                    <div className="footer-col">
                        <h4>{t('footer.quick_links')}</h4>
                        <ul>
                            <li><a href="#home">{t('nav.home')}</a></li>
                            <li><a href="#about">{t('nav.about')}</a></li>
                            <li><a href="#services">{t('nav.services')}</a></li>
                            <li><a href="#reviews">{t('nav.reviews')}</a></li>
                            <li><a href="#contact">{t('nav.book_appointment')}</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>{t('footer.legal')}</h4>
                        <ul>
                            <li><a href="#">{t('footer.privacy')}</a></li>
                            <li><a href="#">{t('footer.terms')}</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>{t('footer.follow_us')}</h4>
                        <div className="social-links">
                            <a href="https://www.facebook.com/share/1DPDaiCcfj/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                            <a href="https://www.instagram.com/devnandadentalclinic?igsh=cTd1dW5xdHExeTA2&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 DEVNANDA CLINIC. {t('footer.rights')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
