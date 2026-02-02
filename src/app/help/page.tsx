'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SuccessCircleIcon } from '@/components/Icons';

// Lazy load Footer
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-40 bg-gray-100 animate-pulse" />,
  ssr: true,
});

export default function Help() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission
    console.log('Help Request:', formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-200 py-4">
          <div className="container">
            <Breadcrumbs />
          </div>
        </div>
        {/* Hero Section */}
        <div className="bg-black text-white py-12 md:py-20">
          <div className="container text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              How Can We Help?
            </h1>
            <p className="text-gray-300 text-lg">
              We're here to support you. Get in touch with our team.
            </p>
          </div>
        </div>

        {/* Help Content */}
        <div className="container py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* FAQ / Quick Links */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                Common Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Shipping & Delivery',
                    desc: 'Learn about our shipping options and delivery times',
                  },
                  {
                    title: 'Returns & Exchanges',
                    desc: 'Easy returns within 30 days of purchase',
                  },
                  {
                    title: 'Product Care',
                    desc: 'Tips on how to care for your Leveling products',
                  },
                  {
                    title: 'Account Issues',
                    desc: 'Help with login, password, and account settings',
                  },
                  {
                    title: 'Size Guide',
                    desc: 'Find your perfect fit with our size charts',
                  },
                  {
                    title: 'Track Your Order',
                    desc: 'Monitor your purchase status in real-time',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-200 rounded-lg hover:border-black hover:shadow-md transition cursor-pointer"
                  >
                    <h3 className="font-semibold text-black mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-6">
                Couldn't find what you're looking for? Send us a message and
                we'll get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <SuccessCircleIcon className="text-green-500" size={48} />
                  </div>
                  <h3 className="text-lg font-bold text-green-700 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-600">
                    Thank you for reaching out. We'll contact you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="shipping">Shipping & Delivery</option>
                      <option value="returns">Returns & Exchanges</option>
                      <option value="account">Account Issues</option>
                      <option value="product">Product Quality</option>
                      <option value="sizing">Sizing Help</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                      required
                    />
                  </div>

                  {/* Send Button */}
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300 cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">
              Other Ways to Reach Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '📞',
                  title: 'Phone Support',
                  content: '1-800-LEVELING\nAvailable 24/7',
                },
                {
                  icon: '💬',
                  title: 'Live Chat',
                  content:
                    'Chat with our support team\nMonday - Sunday, 9am - 9pm ET',
                },
                {
                  icon: '📧',
                  title: 'Email Support',
                  content: 'support@leveling.com\nResponse time: 24 hours',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white border border-gray-200 rounded-lg"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h4 className="font-bold text-black mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
