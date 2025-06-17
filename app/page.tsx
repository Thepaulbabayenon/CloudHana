'use client';
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ChevronDown, 
  Star, 
  TrendingUp, 
  Users, 
  Award, 
  ArrowRight,
  Menu,
  X,
  Globe,
  Target,
  Zap
} from 'lucide-react';

const EMRGWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Stats counter animation
  const [stats, setStats] = useState({
    clients: 0,
    projects: 0,
    revenue: 0,
    reviews: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        clients: 500,
        projects: 1500,
        revenue: 10,
        reviews: 66
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const caseStudies = [
    {
      title: "The Pirnia Law Group",
      description: "Using an unorthodox approach for this unique personal injury law firm, we achieved remarkable results including an exclusive NFL partnership.",
      result: "NFL Partnership",
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "Falakassa Law",
      description: "Elevated their PPC conversion rates by 23%. Our ads accounted for 100% of their conversions.",
      result: "$200k to $2M+",
      color: "from-green-600 to-teal-600"
    },
    {
      title: "Kahen & Associates",
      description: "Created a contemporary website with data-driven insights and tailored landing pages for various service lines.",
      result: "3x Traffic Increase",
      color: "from-orange-600 to-red-600"
    },
    {
      title: "Champion Law Firm",
      description: "Started from zero online presence, garnered 66 five-star reviews in two years, reaching top spot on Google.",
      result: "50 New Cases/Year",
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              EMRG
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {['Services', 'Case Studies', 'About', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  whileHover={{ scale: 1.1 }}
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"
        />
        
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Experience in the{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Billion$
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Our clients include multi-billion dollar companies, Fortune 500s, emerging start-ups, 
            and small to medium-sized businesses. We build a personalized strategy for each client 
            to reformulate their digital business practices and reach maximum profitability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              View Case Studies
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/10 to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: "Happy Clients", value: stats.clients, suffix: "+" },
              { label: "Projects Launched", value: stats.projects, suffix: "+" },
              { label: "Billion$ Revenue", value: stats.revenue, suffix: "+" },
              { label: "5-Star Reviews", value: stats.reviews, suffix: "+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
                >
                  {stat.value}{stat.suffix}
                </motion.div>
                <div className="text-white/60 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We help grow your profits & online visibility through comprehensive digital solutions
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Website Design",
                description: "Custom, responsive websites that convert visitors into customers with stunning design and optimal user experience."
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Digital Marketing",
                description: "Data-driven marketing strategies including SEO, PPC, and social media to maximize your online presence."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Reputation Management",
                description: "Build and maintain your online reputation with strategic review management and brand monitoring."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)"
                }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-blue-400 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/70 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Case <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Studies</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our portfolio features clients from Fortune 500s to small businesses. 
              Our data-driven approaches have led to substantially increased profits.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-full h-2 rounded-full bg-gradient-to-r ${study.color} mb-6`} />
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{study.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/50 uppercase tracking-wider">Result</span>
                  <span className={`font-bold text-lg bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>
                    {study.result}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Emerge</span> Online?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Join Fortune 500 companies and successful businesses who trust EMRG 
              to drive their digital growth and maximize profitability.
            </p>
            
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-12 py-6 rounded-full text-xl font-semibold flex items-center gap-3 mx-auto hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Start Your Success Story <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                EMRG
              </div>
              <p className="text-white/60 text-sm">
                Your Partner for Life. Everything we do is for the sole purpose of having your company emerge online.
              </p>
            </div>
            
            {[
              {
                title: "Services",
                links: ["Website Design", "Digital Marketing", "Reputation Management", "SEO & PPC"]
              },
              {
                title: "Company",
                links: ["About Us", "Case Studies", "Careers", "Contact"]
              },
              {
                title: "Connect",
                links: ["LinkedIn", "Twitter", "Facebook", "Instagram"]
              }
            ].map((column, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60 text-sm">
            <p>&copy; 2024 EMRG. All rights reserved. Your Partner for Life.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EMRGWebsite;