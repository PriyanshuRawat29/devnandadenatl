import React from 'react';
import { useTranslation } from 'react-i18next';

const BracesComparison = () => {
    const { t } = useTranslation();

    return (
        <section id="comparison" className="section comparison">
            <div className="container">
                <div className="section-header text-center">
                    <h4 className="sub-heading">{t('comparison.sub_heading')}</h4>
                    <h2>{t('comparison.title')}</h2>
                    <p>{t('comparison.description')}</p>
                </div>

                <div className="comparison-grid">
                    {/* Metal Braces Side */}
                    <div className="comparison-card metal-braces">
                        <div className="comparison-header">
                            <h3>{t('comparison.metal_title')}</h3>
                        </div>
                        <div className="comparison-content">
                            <div className="pros-cons">
                                <div className="pros">
                                    <h4>{t('comparison.pros')}</h4>
                                    <ul>
                                        {t('comparison.metal_pros', { returnObjects: true }).map((pro, i) => (
                                            <li key={i}>{pro}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="cons">
                                    <h4>{t('comparison.cons')}</h4>
                                    <ul>
                                        {t('comparison.metal_cons', { returnObjects: true }).map((con, i) => (
                                            <li key={i}>{con}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="comparison-image">
                                <img src="/assets/images/metal_braces.png" alt="Metal Braces" />
                            </div>
                        </div>
                    </div>

                    <div className="vs-divider">
                        <span>VS</span>
                    </div>

                    {/* Invisalign Side */}
                    <div className="comparison-card invisalign">
                        <div className="comparison-header">
                            <h3>{t('comparison.invisalign_title')}</h3>
                        </div>
                        <div className="comparison-content">
                            <div className="pros-cons">
                                <div className="pros">
                                    <h4>{t('comparison.pros')}</h4>
                                    <ul>
                                        {t('comparison.invisalign_pros', { returnObjects: true }).map((pro, i) => (
                                            <li key={i}>{pro}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="cons">
                                    <h4>{t('comparison.cons')}</h4>
                                    <ul>
                                        {t('comparison.invisalign_cons', { returnObjects: true }).map((con, i) => (
                                            <li key={i}>{con}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="comparison-image">
                                <img src="/assets/images/invisalign.png" alt="Invisalign" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BracesComparison;
