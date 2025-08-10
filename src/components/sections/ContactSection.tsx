import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    emailjs
      .send(
        'service_gf4qdca',      
        'template_fh1ru14',     
        formData,               
        'IkPqMJ7vT2gweMNdQ'       
      )
      .then(
        (result) => {
          console.log('Email sent!', result.text);
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert('Failed to send message.');
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tarunvinodhkumar@gmail.com',
      href: 'mailto:tarunvinodhkumar@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (807) 357-3713',
      href: 'tel:+18073573713',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Oakville, ON, Canada',
      href: 'https://maps.app.goo.gl/J7ww6DQpTwDF8QjX8',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Open to full-time roles and freelance projects — if you’ve got an idea or opportunity in mind, I’d love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Let’s talk about your next big idea</h3>
              <p className="text-muted-foreground leading-relaxed text-xl">
              Whether you’re building from scratch or improving an existing product, I’m here to help. I’m open to full-time roles and freelance work — reach out and let’s create something impactful together.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 glass rounded-xl hover-lift group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-medium text-sm text-muted-foreground">
                      {info.label}
                    </div>
                    <div className="font-semibold">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
              <div className="flex gap-4">
                {[
                  { name: 'GitHub', url: 'https://github.com/tarunvinodhkumar',icon:'/github.svg' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tarun-vinodh-kumar-177ab0193/',icon:'/linkedin.svg' },
                  { name: 'Instagram', url: 'https://www.instagram.com/tarun_v0808/',icon:'/instagram.svg' },
                
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <img
  src={social.icon}
  alt={social.name}
  className="w-6 h-6 object-contain"
/>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full btn-primary inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Send Message
                <Send className="w-4 h-4" />
                
              </motion.button>
              
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;