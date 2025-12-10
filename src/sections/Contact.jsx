import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Sparkles, Mail, MapPin, Loader2 } from 'lucide-react';
import { USER_DATA } from '../data';

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // 👈 New loading state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSend = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start loading

    
    const endpoint = "https://formspree.io/f/mblnzkzq"; 

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSent(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 3 seconds
        setTimeout(() => {
            setIsSent(false);
        }, 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false); // Stop loading
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-gray-50 dark:bg-black">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 dark:text-white mb-6 font-display tracking-tight">
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">legendary.</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Got a frontend role or a freelance project? Drop your details below and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 bg-white dark:bg-neutral-900/50 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-3xl p-2 shadow-2xl">
          
          {/* Sidebar Info (Left) */}
          <div className="md:col-span-2 bg-neutral-900 dark:bg-white/5 rounded-2xl p-8 flex flex-col justify-between text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
            
            <div>
              <h3 className="text-2xl font-bold mb-2">Contact Info</h3>
              <p className="text-gray-400 text-sm mb-8">Ready to join immediately.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <Mail size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Email</p>
                    <a href={`mailto:${USER_DATA.email}`} className="text-sm font-medium hover:text-purple-400 transition-colors">{USER_DATA.email}</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <MapPin size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Location</p>
                    <p className="text-sm font-medium">Bangalore / Hyderabad</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-0">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Open to Work
               </div>
            </div>
          </div>

          {/* Form Area (Right) */}
          <div className="md:col-span-3 p-6 md:p-8">
            <form onSubmit={handleSend} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 text-neutral-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 text-neutral-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about the project..." 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 text-neutral-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-400"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting || isSent}
                className={`w-full py-4 font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${isSent ? "bg-green-500 text-white cursor-default" : "bg-neutral-900 dark:bg-white text-white dark:text-black hover:bg-purple-600 dark:hover:bg-purple-400 dark:hover:text-white"}`}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                        key="sending"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2"
                    >
                        <Loader2 size={20} className="animate-spin" /> Sending...
                    </motion.div>
                  ) : isSent ? (
                    <motion.div 
                      key="sent"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2"
                    >
                      Message Sent <CheckCircle2 size={20} />
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="send"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2"
                    >
                      Send Message <Send size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;