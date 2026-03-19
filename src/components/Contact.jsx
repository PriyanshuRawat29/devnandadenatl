import React, { useState } from 'react';
import { FaLocationDot, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState(null); // null, 'success', 'error'

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.fullName && formData.mobileNumber && formData.message) {
            // Build WhatsApp message
            const message = `*New Inquiry from Website*\n\n*Name:* ${formData.fullName}\n*Mobile:* ${formData.mobileNumber}\n*Message:* ${formData.message}`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${t('contact.whatsapp_number')}?text=${encodedMessage}`;

            // Open WhatsApp
            window.open(whatsappUrl, '_blank');

            setFormStatus('success');
            // Reset form after a delay
            setTimeout(() => {
                setFormData({ fullName: '', mobileNumber: '', message: '' });
                setFormStatus(null);
            }, 3000);
        } else {
            setFormStatus('error');
        }
    };

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h4 className="sub-heading">{t('contact.sub_heading')}</h4>
                        <h2>{t('contact.title')}</h2>
                        <p>{t('contact.description')}</p>

                        <div className="doctor-profile">
                            <img src="/assets/images/image.jpeg" alt={t('contact.doctor_name')} className="doctor-profile-img" />
                            <div className="doctor-profile-info">
                                <h3>{t('contact.doctor_name')}</h3>
                                <p>{t('contact.doctor_role')}</p>
                            </div>
                        </div>


                        <div className="info-item">
                            <FaLocationDot />
                            <div>
                                <h5>{t('contact.visit_title')}</h5>
                                <p>{t('contact.visit_address')}</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaPhone />
                            <div>
                                <h5>{t('contact.call_title')}</h5>
                                <p>{t('contact.phone')}</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaEnvelope />
                            <div>
                                <h5>{t('contact.email_title')}</h5>
                                <p>Pritambora93@gmail.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaClock />
                            <div>
                                <h5>{t('contact.hours_title')}</h5>
                                <p>{t('contact.hours_text')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-box">
                        <h3>{t('contact.form_title')}</h3>
                        <form id="appointmentForm" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="fullName">{t('contact.form_name')}</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    placeholder="John Doe"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mobileNumber">{t('contact.form_mobile')}</label>
                                <input
                                    type="tel"
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    placeholder="+1 555 000 0000"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">{t('contact.form_message')}</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder={t('contact.form_message_placeholder')}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">{t('contact.form_submit')}</button>
                        </form>
                        {formStatus === 'success' && (
                            <div className="form-message success" style={{ marginTop: '15px' }}>
                                {t('contact.success')}
                            </div>
                        )}
                        {formStatus === 'error' && (
                            <div className="form-message error" style={{ marginTop: '15px' }}>
                                {t('contact.error')}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
