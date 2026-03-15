import React from 'react';
import { FaUserDoctor, FaMicroscope, FaPumpMedical, FaWallet } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

const WhyChooseUs = () => {
    const { t } = useTranslation();

    return (
        <section id="why-choose-us" className="section why-choose-us">
            <div className="container">
                <div className="section-header text-center">
                    <h4 className="sub-heading">{t('why_choose_us.sub_heading')}</h4>
                    <h2>{t('why_choose_us.title')}</h2>
                </div>
                <div className="features-grid">
                    <div className="feature-box">
                        <div className="feature-icon">
                            <FaUserDoctor />
                        </div>
                        <h3>{t('why_choose_us.items.dentists_title')}</h3>
                        <p>{t('why_choose_us.items.dentists_desc')}</p>
                    </div>
                    <div className="feature-box">
                        <div className="feature-icon">
                            <FaMicroscope />
                        </div>
                        <h3>{t('why_choose_us.items.equipment_title')}</h3>
                        <p>{t('why_choose_us.items.equipment_desc')}</p>
                    </div>
                    <div className="feature-box">
                        <div className="feature-icon">
                            <FaPumpMedical />
                        </div>
                        <h3>{t('why_choose_us.items.hygienic_title')}</h3>
                        <p>{t('why_choose_us.items.hygienic_desc')}</p>
                    </div>
                    <div className="feature-box">
                        <div className="feature-icon">
                            <FaWallet />
                        </div>
                        <h3>{t('why_choose_us.items.affordable_title')}</h3>
                        <p>{t('why_choose_us.items.affordable_desc')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
