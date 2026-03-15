import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1>{t('hero.title')} <br /><span>{t('hero.our_priority')}</span></h1>
                <p>{t('hero.subtitle')}</p>
                <div className="hero-btns">
                    <a href="#contact" className="btn btn-primary">{t('nav.book_appointment')}</a>
                    <a href="#services" className="btn btn-outline">{t('hero.view_services')}</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
