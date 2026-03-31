import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import SectionHeading from '../ui/SectionHeading';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        
        setTimeout(() => setIsSuccess(false), 5000);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setIsSubmitting(false);
        setError('Something went wrong. Please try again later.');
      });
  };

  return (
    <section id="contact" className="py-24 relative bg-dark border-t border-white/5 overflow-hidden">
      
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-cyan/20 to-transparent blur-[120px] mix-blend-screen rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-accent/20 to-transparent blur-[120px] mix-blend-screen rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading title="Get In Touch" subtitle="Contact" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          
          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl lg:text-5xl font-syne font-bold text-white mb-6 leading-tight">Let's talk about your next project.</h3>
              <p className="font-mono text-gray-400 mb-8 leading-relaxed max-w-md text-sm lg:text-base">
                Whether you need a complete infrastructure overhaul, help with cloud migration, or a reliable CI/CD pipeline — I'm here to help. Drop me a message!
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 w-full"
            >
              <a 
                href="mailto:albinraju29@gmail.com" 
                className="flex flex-1 items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-cyan hover:bg-blue-cyan/5 text-white font-mono hover:text-blue-cyan transition-all duration-300 group shadow-lg"
              >
                <Mail className="group-hover:scale-110 transition-transform" />
                Email Me
              </a>
              <a 
                href="https://wa.me/918714373760" 
                target="_blank" 
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#25D366] hover:bg-[#25D366]/5 text-white font-mono hover:text-[#25D366] transition-all duration-300 group shadow-lg"
              >
                <FaWhatsapp className="group-hover:scale-110 transition-transform text-xl" />
                WhatsApp
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 pt-8 border-t border-white/5"
            >
              <h4 className="font-mono text-sm text-gray-500 uppercase tracking-widest mb-6 border-l-2 border-purple-accent pl-3">Connect across platforms</h4>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/albinraju29" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-[#0b101e] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:bg-white/5 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <FaGithub size={22} />
                </a>
                <a href="https://www.linkedin.com/in/albinraju29" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-[#0b101e] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#0a66c2] hover:border-[#0a66c2] hover:bg-[#0a66c2]/5 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <FaLinkedin size={22} />
                </a>
                <a href="https://instagram.com/albin__raju___" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-[#0b101e] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#E1306C] hover:border-[#E1306C] hover:bg-[#E1306C]/5 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <FaInstagram size={22} />
                </a>
                <a href="#" className="w-14 h-14 rounded-full bg-[#0b101e] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#1DA1F2] hover:border-[#1DA1F2] hover:bg-[#1DA1F2]/5 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <FaXTwitter size={22} />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="p-8 lg:p-10 rounded-2xl bg-[#0b101e] border border-white/10 shadow-2xl relative overflow-hidden group/form">
              
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-cyan/5 blur-[80px] rounded-full pointer-events-none group-focus-within/form:bg-blue-cyan/10 transition-colors duration-500"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-gray-400 ml-1">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-blue-cyan focus:shadow-[0_0_15px_rgba(0,217,255,0.2)] transition-all w-full relative z-10"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="phone" className="font-mono text-[10px] uppercase tracking-widest text-gray-400 ml-1">Phone</label>
                  <input 
                    type="text" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-blue-cyan focus:shadow-[0_0_15px_rgba(0,217,255,0.2)] transition-all w-full relative z-10"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-gray-400 ml-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-purple-accent focus:shadow-[0_0_15px_rgba(124,58,237,0.2)] transition-all w-full relative z-10"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="subject" className="font-mono text-[10px] uppercase tracking-widest text-gray-400 ml-1">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-purple-accent focus:shadow-[0_0_15px_rgba(124,58,237,0.2)] transition-all w-full relative z-10"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="flex flex-col gap-2 mb-8 relative">
                <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-gray-400 ml-1">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-blue-cyan focus:shadow-[0_0_15px_rgba(0,217,255,0.2)] transition-all w-full resize-none relative z-10"
                  placeholder="Tell me about your infrastructure needs..."
                ></textarea>
              </div>

              {error && (
                <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 font-mono text-sm text-center">
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting || isSuccess}
                className="w-full relative py-4 rounded-lg font-syne font-bold text-lg overflow-hidden group transition-all duration-300"
              >
                <div className={`absolute inset-0 transition-all duration-300 ${isSuccess ? 'bg-green-500' : 'bg-[#141b2d] border border-white/10 group-hover:border-blue-cyan/50'}`}></div>
                
                {/* Button Shine effect */}
                {!isSubmitting && !isSuccess && (
                  <div className="absolute inset-0 w-[200%] h-full -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-blue-cyan/20 to-transparent group-hover:animate-[shine_1.5s_ease-in-out_infinite] z-20 pointer-events-none" />
                )}

                <div className="relative z-30 flex items-center justify-center gap-2 text-white">
                  {isSubmitting ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full flex items-center justify-center" />
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 className="animate-bounce" /> Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 text-blue-cyan" />
                    </>
                  )}
                </div>
                
                {/* Fallback base color gradient if not success */}
                {!isSuccess && (
                  <div className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-r from-blue-cyan/20 to-purple-accent/20 opacity-0 group-hover:opacity-100 mix-blend-overlay"></div>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shine {
          to {
            transform: translateX(50%) skewX(-20deg);
          }
        }
      `}} />
    </section>
  );
};

export default Contact;
