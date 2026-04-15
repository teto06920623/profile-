import { useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import { SOCIAL_LINKS } from '../utils/constants';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-page__header">
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-subtitle">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>

        <div className="contact-page__grid">
          {/* Contact Info */}
          <div className="contact-page__info">
            <div className="contact-info-card">
              <div className="contact-info-card__icon">
                <FiMail />
              </div>
              <div>
                <h3>Email</h3>
                <p>{SOCIAL_LINKS.email}</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-card__icon">
                <FiMapPin />
              </div>
              <div>
                <h3>Location</h3>
                <p>Cairo, Egypt</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-card__icon">
                <FiPhone />
              </div>
              <div>
                <h3>Phone</h3>
                <p>Available on request</p>
              </div>
            </div>

            <div className="contact-page__socials">
              <h3>Follow Me</h3>
              <div className="contact-page__socials-links">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                  <FiLinkedin />
                </a>
                <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">
                  <FiTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-page__form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="contact-page__success animate-fadeInUp">
                ✅ Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}
            <div className="contact-page__form-row">
              <Input
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>
            <Input
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              required
            />
            <Input
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              textarea
              rows={6}
              required
            />
            <Button variant="primary" size="lg" icon={<FiSend />}>
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
