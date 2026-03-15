import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-image">
                        <img src="/assets/images/pritam.png" alt="Dr. Pritam, Lead Dentist" />
                        <div className="experience-badge">
                            <span className="years">{t('about.exp_years')}</span>
                            <span className="text">{t('about.exp_text')}</span>
                        </div>
                    </div>
                    <div className="about-text">
                        <h4 className="sub-heading">{t('about.sub_heading')}</h4>
                        <h2>{t('about.title')}</h2>
                        <p>{t('about.text_1')}</p>
                        <p>{t('about.text_2')}</p>
                        <ul className="about-list">
                            <li><FaCheckCircle /> {t('about.list_1')}</li>
                            <li><FaCheckCircle /> {t('about.list_2')}</li>
                            <li><FaCheckCircle /> {t('about.list_3')}</li>
                        </ul>
                        <a href="#contact" className="btn btn-secondary">{t('about.button')}</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
