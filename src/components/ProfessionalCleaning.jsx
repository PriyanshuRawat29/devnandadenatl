import React from 'react';
import { useTranslation } from 'react-i18next';

const ProfessionalCleaning = () => {
    const { t } = useTranslation();

    return (
        <section id="cleaning" className="section cleaning">
            <div className="container">
                <div className="section-header text-center">
                    <h4 className="sub-heading">{t('cleaning.sub_heading')}</h4>
                    <h2>{t('cleaning.title')}</h2>
                    <p>{t('cleaning.description')}</p>
                </div>

                <div className="cleaning-transformation">
                    <div className="transformation-container">
                        <div className="transformation-item">
                            <span className="badge before-badge">{t('cleaning.before')}</span>
                            <div className="image-wrapper">
                                <img src="/assets/images/cleaning_before.png" alt="Teeth before professional cleaning" />
                            </div>
                            <div className="label-overlay">{t('cleaning.before_label')}</div>
                        </div>

                        <div className="transformation-arrow">
                            <i className="arrow-icon">→</i>
                        </div>

                        <div className="transformation-item">
                            <span className="badge after-badge">{t('cleaning.after')}</span>
                            <div className="image-wrapper">
                                <img src="/assets/images/cleaning_after.png" alt="Teeth after professional cleaning" />
                            </div>
                            <div className="label-overlay">{t('cleaning.after_label')}</div>
                        </div>
                    </div>

                    <div className="cleaning-benefits">
                        <div className="benefit-card">
                            <h5>{t('cleaning.benefit_1_title')}</h5>
                            <p>{t('cleaning.benefit_1_desc')}</p>
                        </div>
                        <div className="benefit-card">
                            <h5>{t('cleaning.benefit_2_title')}</h5>
                            <p>{t('cleaning.benefit_2_desc')}</p>
                        </div>
                        <div className="benefit-card">
                            <h5>{t('cleaning.benefit_3_title')}</h5>
                            <p>{t('cleaning.benefit_3_desc')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfessionalCleaning;
