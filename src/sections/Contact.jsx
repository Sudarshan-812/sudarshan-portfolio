import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const handleSend = (e) => {
      e.preventDefault();
      setIsSent(true);
      setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden z-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-7xl font-display font-bold text-neutral-900 dark:text-white mb-4 tracking-tighter">Let's work together.</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">I usually respond within 24 hours.</p>
        </div>
        
        <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-md shadow-2xl dark:shadow-none">
            <form className="space-y-6" onSubmit={handleSend}>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-1">Name</label>
                        <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/50 border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-1">Email</label>
                        <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/50 border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-1">Message</label>
                    <textarea rows={4} placeholder="Tell me about your project..." className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/50 border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all resize-none"></textarea>
                </div>
                <button 
                    type="submit"
                    disabled={isSent}
                    className={`w-full py-4 font-bold rounded-xl flex items-center justify-center gap-2 transition-all ${isSent ? "bg-green-500 text-white cursor-default" : "bg-neutral-900 dark:bg-white text-white dark:text-black hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white"}`}
                >
                    {isSent ? (
                        <>Message Sent! <Sparkles size={18} /></>
                    ) : (
                        <>Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform"/></>
                    )}
                </button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;