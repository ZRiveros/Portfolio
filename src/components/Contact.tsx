import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus('sending');
      
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: 'Zebastian.Riveros@outlook.com'
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY   
        );
        
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => setStatus('idle'), 5000);
      } catch (error) {
        console.error('Error sending email:', error);
        setStatus('error');
        
        setTimeout(() => setStatus('idle'), 5000);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value
      });
    };

    return (
      <section id="contact" className="max-w-6xl mx-auto p-8 mt-8 space-y-8">
        {/* Header Section */}
    <div className="rounded-3xl border-2 border-gray-300 bg-black/30 backdrop-blur-sm p-6 hover:scale-105 hover:border-white hover:shadow-xl transition-all duration-300">
      <h1 className="text-4xl font-bold mb-3 text-white text-center flex items-center justify-center gap-3">
        <i className="fa-solid fa-envelope"></i>
        Get In Touch
      </h1>
      <p className="text-base text-gray-300 leading-relaxed text-center max-w-2xl mx-auto">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
      </p>
    </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email Card */}
            <div className="rounded-3xl border-2 border-gray-300 bg-black/30 backdrop-blur-sm p-6 hover:scale-105 hover:border-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <i className="fa-solid fa-envelope text-blue-400 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-white">Email</h3>
              </div>
              <a href="mailto:Zebastian.Riveros@outlook.com" className="text-gray-300 hover:text-blue-400 transition-colors break-all">
                Zebastian.Riveros@outlook.com
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="rounded-3xl border-2 border-gray-300 bg-black/30 backdrop-blur-sm p-6 hover:scale-105 hover:border-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <i className="fa-brands fa-linkedin text-blue-400 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-white">LinkedIn</h3>
              </div>
              <a href="https://www.linkedin.com/in/zebastian-riveros-a650b91ab/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                Connect with me
              </a>
            </div>

            {/* GitHub Card */}
            <div className="rounded-3xl border-2 border-gray-300 bg-black/30 backdrop-blur-sm p-6 hover:scale-105 hover:border-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <i className="fa-brands fa-github text-purple-400 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-white">GitHub</h3>
              </div>
              <a href="https://github.com/ZRiveros" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                View my projects
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 rounded-3xl border-2 border-gray-300 bg-black/30 backdrop-blur-sm p-8 hover:border-white hover:shadow-xl transition-all duration-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Success Message */}
              {status === 'success' && (
                <div className="bg-green-500/20 border-2 border-green-500/50 rounded-lg p-4 flex items-center gap-3">
                  <i className="fa-solid fa-check-circle text-green-400 text-2xl"></i>
                  <div>
                    <p className="text-green-400 font-semibold">Message sent successfully!</p>
                    <p className="text-gray-300 text-sm">I'll be in touch soon.</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <div className="bg-red-500/20 border-2 border-red-500/50 rounded-lg p-4 flex items-center gap-3">
                  <i className="fa-solid fa-exclamation-circle text-red-400 text-2xl"></i>
                  <div>
                    <p className="text-red-400 font-semibold">Failed to send message</p>
                    <p className="text-gray-300 text-sm">Please try again or email me directly.</p>
                  </div>
                </div>
              )}

              {/* Name */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="John Doe"
                  required
                  disabled={status === 'sending'}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                  required
                  disabled={status === 'sending'}
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="How can I help you?"
                  required
                  disabled={status === 'sending'}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
                  Your Message
                </label>
                <textarea 
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or idea..."
                  required
                  disabled={status === 'sending'}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <i className="fa-solid fa-paper-plane"></i>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    );
}

export default Contact;