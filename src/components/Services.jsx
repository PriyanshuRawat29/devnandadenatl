import React from 'react';
import { FaTooth, FaShieldHalved, FaMicrochip, FaMagnifyingGlassPlus, FaHandsBubbles, FaFaceSmile, FaChild } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import './Services.css';

const ServiceCard = ({ icon, title, description, illustration, colorClass }) => (
    <div className={`service-card ${colorClass}`}>
        <div className="icon-box">
            {icon}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="illustration-wrapper">
            <img src={illustration} alt={`${title} illustration`} className="service-illustration" />
        </div>
    </div>
);

const Services = () => {
    const { t } = useTranslation();

    const servicesData = [
        {
            icon: <div style={{ position: 'relative' }}><FaTooth /><FaMagnifyingGlassPlus style={{ fontSize: '0.9rem', position: 'absolute', top: '-5px', right: '-5px' }} /></div>,
            title: t('services.items.general'),
            description: t('services.items.general_desc'),
            illustration: "/assets/images/service_general.png",
            colorClass: "blue"
        },
        {
            icon: <div style={{ position: 'relative' }}><FaTooth /><FaHandsBubbles style={{ fontSize: '0.9rem', position: 'absolute', top: '-5px', right: '-5px' }} /></div>,
            title: t('services.items.cleaning'),
            description: t('services.items.cleaning_desc'),
            illustration: "/assets/images/service_cleaning.png",
            colorClass: "teal"
        },
        {
            icon: <FaTooth />,
            title: t('services.items.root_canal'),
            description: t('services.items.root_canal_desc'),
            illustration: "/assets/images/service_root_canal.png",
            colorClass: "navy"
        },
        {
            icon: <FaFaceSmile />,
            title: t('services.items.cosmetic'),
            description: t('services.items.cosmetic_desc'),
            illustration: "/assets/images/service_cosmetic.png",
            colorClass: "pink"
        },
        {
            icon: <FaChild />,
            title: t('services.items.pediatric'),
            description: t('services.items.pediatric_desc'),
            illustration: "/assets/images/service_pediatric.png",
            colorClass: "green"
        }
    ];

    return (
        <section id="services" className="section services">
            <div className="container">
                <div className="section-header text-center">
                    <h2>{t('services.heading')} <span>{t('services.span')}</span> {t('services.services_text')}</h2>
                    <p>{t('services.description')}</p>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>

                <div className="services-footer">
                    <div className="footer-item">
                        <i><FaShieldHalved /></i>
                        <span>{t('services.footer_1')}</span>
                    </div>
                    <div className="footer-divider">|</div>
                    <div className="footer-item">
                        <i><FaMicrochip /></i>
                        <span>{t('services.footer_2')}</span>
                    </div>
                    <div className="footer-divider">|</div>
                    <div className="footer-item">
                        <i><FaFaceSmile /></i>
                        <span>{t('services.footer_3')}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
