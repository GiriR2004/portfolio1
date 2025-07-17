import React, { useState } from 'react';
import { Mail, User, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_m0da4qj',
          template_id: 'template_zp88kk9',
          user_id: 'UF-NN9I61qaFGdFO5',
          template_params: {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
          }
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white font-inter flex flex-col items-center justify-center relative overflow-hidden py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 animate-background-move" 
          style={{
            background: 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float-medium"></div>
      </div>

      {/* Main Form */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 w-full max-w-4xl mx-auto">
        <section className="bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-teal-900/20 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-600/30 p-8 md:p-12 lg:p-16 hover:scale-[1.02] hover:shadow-blue-500/20 hover:border-blue-400/40 animate-section-reveal w-full">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 animate-text-reveal animate-shimmer animate-text-glow">
              Get In Touch
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-500">
              Have a project in mind or just want to say hello? I'd love to hear from you!
            </p>
          </div>

         

          <div className="space-y-6 animate-fade-in-up delay-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="name" className="text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <User size={16} /> Full Name
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-gray-400" placeholder="Your full name" />
              </div>
              <div className="group">
                <label htmlFor="email" className="text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <Mail size={16} /> Email Address
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-gray-400" placeholder="your.email@example.com" />
              </div>
            </div>
            <div className="group">
              <label htmlFor="subject" className="text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                <MessageCircle size={16} /> Subject
              </label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-gray-400" placeholder="What's this about?" />
            </div>
            <div className="group">
              <label htmlFor="message" className="text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                <MessageCircle size={16} /> Message
              </label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-gray-400 resize-none" placeholder="Tell me about your project or just say hello..." />
            </div>

            <div className="flex flex-col items-center space-y-4">
              <button type="button" onClick={handleSubmit} disabled={isSubmitting}
                className="flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full shadow-lg transition-all transform hover:-translate-y-1 hover:scale-105 min-w-[200px]">
                {isSubmitting ? (
                  <>
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                    <span className="text-lg font-medium">Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span className="text-lg font-medium">Send Message</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 text-green-400 animate-fade-in-up">
                  <CheckCircle size={20} />
                  <span>Message sent successfully!</span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 text-red-400 animate-fade-in-up">
                  <AlertCircle size={20} />
                  <span>Something went wrong. Try again.</span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-600/30 text-center animate-fade-in-up delay-1000">
            <p className="text-gray-300 mb-2">Or reach out directly:</p>
            <a href="mailto:girikeerthi21@gmail.com" className="text-blue-400 hover:text-blue-300 flex items-center justify-center space-x-2">
              <Mail size={18} /> <span>girikeerthi21@gmail.com</span>
            </a>
          </div>
        </section>
      </main>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes backgroundMove {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
        .animate-background-move {
          animation: backgroundMove 30s ease-in-out infinite;
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        @keyframes floatMedium {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow { animation: floatSlow 8s infinite; }
        .animate-float-reverse { animation: floatReverse 12s infinite; }
        .animate-float-medium { animation: floatMedium 10s infinite; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }

        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 10px rgba(6, 182, 212, 0.3); }
          50% { text-shadow: 0 0 20px rgba(6, 182, 212, 0.5); }
        }
        .animate-text-glow { animation: textGlow 2s ease-in-out infinite; }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background-size: 200% auto;
          background-image: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shimmer 4s infinite linear;
        }

        .animate-section-reveal {
          animation: fadeInUp 1s ease-out forwards;
        }

        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </div>
  );
};

export default ContactForm;
