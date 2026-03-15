import React, { useState, useEffect } from 'react';
import { FaStar, FaQuoteLeft, FaCheckCircle, FaChevronLeft, FaChevronRight, FaPlus, FaUserCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Reviews = () => {
    const { t, i18n } = useTranslation();

    const [reviews, setReviews] = useState(() => {
        const savedReviews = localStorage.getItem('patient_reviews');
        if (savedReviews) return JSON.parse(savedReviews);

        return [
            {
                id: 1,
                name: "Seema",
                role: t('reviews.verified_patient'),
                rating: 5,
                text: t('reviews.default_reviews.seema'),
                avatar: ""
            },
            {
                id: 2,
                name: "Mohit",
                role: t('reviews.verified_patient'),
                rating: 5,
                text: t('reviews.default_reviews.mohit'),
                avatar: ""
            },
            {
                id: 3,
                name: "Jitendra Chauhan",
                role: t('reviews.verified_patient'),
                rating: 5,
                text: t('reviews.default_reviews.jitendra'),
                avatar: ""
            }
        ];
    });

    // Handle language switch for default reviews
    useEffect(() => {
        const savedReviews = localStorage.getItem('patient_reviews');
        if (!savedReviews) {
            setReviews([
                {
                    id: 1,
                    name: "Seema",
                    role: t('reviews.verified_patient'),
                    rating: 5,
                    text: t('reviews.default_reviews.seema'),
                    avatar: ""
                },
                {
                    id: 2,
                    name: "Mohit",
                    role: t('reviews.verified_patient'),
                    rating: 5,
                    text: t('reviews.default_reviews.mohit'),
                    avatar: ""
                },
                {
                    id: 3,
                    name: "Jitendra Chauhan",
                    role: t('reviews.verified_patient'),
                    rating: 5,
                    text: t('reviews.default_reviews.jitendra'),
                    avatar: ""
                }
            ]);
        }
    }, [i18n.language]);

    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: '', rating: 5, text: '' });

    useEffect(() => {
        localStorage.setItem('patient_reviews', JSON.stringify(reviews));
    }, [reviews]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            id: Date.now(),
            name: formData.name,
            role: i18n.language === 'hi' ? "मरीज" : "Patient",
            rating: parseInt(formData.rating),
            text: formData.text,
            avatar: `https://i.pravatar.cc/150?u=${formData.name}`
        };
        setReviews([newReview, ...reviews]);
        setFormData({ name: '', rating: 5, text: '' });
        setShowForm(false);
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <FaStar key={i} color={i < rating ? "#ffc107" : "#e4e5e9"} />
        ));
    };

    return (
        <section id="reviews" className="section reviews">
            <div className="container">
                <div className="reviews-header text-center">
                    <img src="/assets/images/reviews_header.png" alt="Happy Tooth Illustration" className="reviews-illustration" />
                    <h2>{t('reviews.heading')} <span>{t('reviews.span')}</span></h2>
                    <p>{t('reviews.description')}</p>
                    <div className="main-stars">
                        {renderStars(5)}
                    </div>
                </div>

                <div className="reviews-grid">
                    {reviews.map((review) => (
                        <div key={review.id} className="review-card">
                            <div className="review-top">
                                <div className="stars">{renderStars(review.rating)}</div>
                                <div className="quote-icon"><FaQuoteLeft /></div>
                            </div>

                            <div className="review-content">
                                <p>"{review.text}"</p>
                            </div>

                            <div className="review-bottom">
                                <div className="patient-avatar">
                                    <FaUserCircle className="user-icon" />
                                </div>
                                <div className="patient-info">
                                    <h4>{review.name}</h4>
                                    <div className="verified">
                                        <FaCheckCircle className="check" /> {review.role} <FaCheckCircle className="check-outline" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="reviews-actions">
                    <button className="btn btn-secondary" onClick={() => setShowForm(!showForm)}>
                        {showForm ? t('reviews.form.cancel') : t('reviews.write_review')} <FaPlus />
                    </button>
                    <button className="btn btn-primary">{t('reviews.read_more')} <FaChevronRight /></button>
                </div>

                {showForm && (
                    <div className="review-form-overlay">
                        <div className="review-form-card">
                            <h3>{t('reviews.form.title')}</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>{t('reviews.form.name')}</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder={t('reviews.form.name_placeholder')}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>{t('reviews.form.rating')}</label>
                                    <select
                                        value={formData.rating}
                                        onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                                    >
                                        <option value="5">{t('reviews.form.stars_5')}</option>
                                        <option value="4">{t('reviews.form.stars_4')}</option>
                                        <option value="3">{t('reviews.form.stars_3')}</option>
                                        <option value="2">{t('reviews.form.stars_2')}</option>
                                        <option value="1">{t('reviews.form.stars_1')}</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>{t('reviews.form.review_text')}</label>
                                    <textarea
                                        required
                                        value={formData.text}
                                        onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                                        placeholder={t('reviews.form.review_placeholder')}
                                        rows="4"
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">{t('reviews.form.submit')}</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Reviews;
