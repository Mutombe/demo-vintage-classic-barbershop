import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Star,
  Phone,
  WhatsappLogo,
  Quotes,
  CheckCircle,
  ShieldCheck,
  UsersThree,
  Trophy,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import HeroCarousel from '../components/HeroCarousel';
import siteData from '../data/siteData';
import iconMap from '../data/iconMap';

const statIcons = [Trophy, Star, ShieldCheck, UsersThree];

function Home() {
  const { business, hero, stats, servicesPreview, featuredProjects, whyChooseUs, homeTestimonials, homeCta } = siteData;

  return (
    <PageTransition>
      {/* Hero Section */}
      <HeroCarousel
        images={hero.backgroundImages}
        backgroundImage={hero.backgroundImage}
        backgroundAlt={hero.backgroundAlt}
        overlay="left"
        className="min-h-screen flex items-center"
      >
        {/* Floating geometric accents */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-gold-500/10 rounded-full animate-pulse hidden lg:block" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 border border-gold-500/5 rounded-full hidden lg:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-8"
            >
              <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
              <span className="text-gold-400 text-sm font-medium">
                {hero.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              {hero.titleParts.map((part, i) =>
                part.highlight ? (
                  <span
                    key={i}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600"
                  >
                    {part.text}
                  </span>
                ) : (
                  <React.Fragment key={i}>{part.text}</React.Fragment>
                )
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-xl"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="btn-primary text-base">
                {hero.ctaPrimary}
                <ArrowRight size={20} />
              </Link>
              <Link to="/projects" className="btn-secondary text-base">
                {hero.ctaSecondary}
              </Link>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-16 flex items-center gap-8 flex-wrap"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    weight="fill"
                    className={
                      i < business.ratingRounded
                        ? 'text-gold-400'
                        : 'text-gold-400/50'
                    }
                  />
                ))}
                <span className="text-white/80 text-sm ml-2">
                  {business.rating}/5 ({business.reviewCount} reviews)
                </span>
              </div>
              <div className="h-6 w-px bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2">
                <CheckCircle
                  size={18}
                  weight="fill"
                  className="text-green-400"
                />
                <span className="text-white/80 text-sm">
                  {hero.trustBadge}
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </HeroCarousel>

      {/* Stats Section */}
      <section className="relative -mt-16 z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 p-2">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const IconComp = statIcons[index] || Trophy;
              return (
                <SectionReveal key={stat.label} delay={index * 0.1}>
                  <div
                    className={`text-center py-8 px-4 ${
                      index < stats.length - 1
                        ? 'border-r border-gray-100'
                        : ''
                    }`}
                  >
                    <IconComp
                      size={28}
                      className="text-gold-500 mx-auto mb-3"
                      weight="fill"
                    />
                    <div className="text-3xl sm:text-4xl font-bold text-navy-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-steel-500 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white" id="services">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-gold-600 text-sm font-semibold uppercase tracking-wider mb-4">
                What We Do
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
                Comprehensive Construction Services
              </h2>
              <p className="text-steel-500 text-lg max-w-2xl mx-auto">
                From concept to completion, we provide end-to-end construction
                solutions that stand the test of time.
              </p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesPreview.map((service, index) => {
              const IconComp = iconMap[service.iconName] || iconMap.Buildings;
              return (
                <SectionReveal key={service.title} delay={index * 0.1}>
                  <div className="group relative bg-earth-50/50 hover:bg-navy-900 border border-earth-100 hover:border-navy-800 rounded-2xl p-8 transition-all duration-500 h-full">
                    <div className="w-14 h-14 bg-gold-500/10 group-hover:bg-gold-500/20 rounded-xl flex items-center justify-center mb-6 transition-colors">
                      <IconComp
                        size={28}
                        className="text-gold-600 group-hover:text-gold-400 transition-colors"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-white mb-3 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-steel-500 group-hover:text-white/70 text-sm leading-relaxed transition-colors">
                      {service.desc}
                    </p>
                    <div className="mt-6">
                      <Link
                        to="/services"
                        className="inline-flex items-center gap-2 text-gold-600 group-hover:text-gold-400 text-sm font-medium transition-colors"
                      >
                        Learn More
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-earth-50">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
              <div>
                <span className="inline-block text-gold-600 text-sm font-semibold uppercase tracking-wider mb-4">
                  Our Portfolio
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
                  Featured Projects
                </h2>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-navy-900 font-semibold hover:text-gold-600 transition-colors"
              >
                View All Projects
                <ArrowRight size={18} />
              </Link>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <SectionReveal key={project.title} delay={index * 0.15}>
                <Link
                  to="/projects"
                  className="group relative block rounded-2xl overflow-hidden aspect-[4/5]"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.category} construction project by ${business.name}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block bg-gold-500/20 text-gold-300 text-xs font-medium px-3 py-1 rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-navy-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="right">
              <div>
                <span className="inline-block text-gold-400 text-sm font-semibold uppercase tracking-wider mb-4">
                  Why Choose Us
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                  {whyChooseUs.titleParts.map((part, i) =>
                    part.highlight ? (
                      <span key={i} className="text-gold-400">
                        {part.text}
                      </span>
                    ) : (
                      <React.Fragment key={i}>{part.text}</React.Fragment>
                    )
                  )}
                </h2>
                <div className="space-y-6">
                  {whyChooseUs.points.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-8 h-8 bg-gold-500/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle
                          size={18}
                          weight="fill"
                          className="text-gold-400"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-white/60 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>

            <SectionReveal direction="left">
              <div className="relative">
                <img
                  src={whyChooseUs.image}
                  alt={whyChooseUs.imageAlt}
                  className="rounded-2xl w-full object-cover aspect-[4/5]"
                />
                <div className="absolute -bottom-6 -left-6 bg-gold-500 text-white p-6 rounded-2xl shadow-xl hidden sm:block">
                  <div className="text-3xl font-bold">
                    {whyChooseUs.experienceYears}
                  </div>
                  <div className="text-sm font-medium text-white/80">
                    {whyChooseUs.experienceLabel}
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-gold-600 text-sm font-semibold uppercase tracking-wider mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                What Our Clients Say
              </h2>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={22}
                    weight="fill"
                    className={
                      i < business.ratingRounded
                        ? 'text-gold-500'
                        : 'text-gold-500/40'
                    }
                  />
                ))}
              </div>
              <p className="text-steel-500">
                {business.rating} out of 5 from {business.reviewCount} reviews
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {homeTestimonials.map((item, index) => (
              <SectionReveal key={item.name} delay={index * 0.15}>
                <div className="bg-earth-50/50 border border-earth-100 rounded-2xl p-8 h-full flex flex-col">
                  <Quotes
                    size={32}
                    weight="fill"
                    className="text-gold-500/30 mb-4"
                  />
                  <p className="text-steel-700 leading-relaxed flex-1 mb-6">
                    "{item.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-earth-100">
                    <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-navy-900 font-semibold text-sm">
                        {item.name}
                      </p>
                      <p className="text-steel-400 text-xs">{item.role}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          weight="fill"
                          className="text-gold-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal>
            <div className="text-center mt-12">
              <Link
                to="/reviews"
                className="inline-flex items-center gap-2 text-navy-900 font-semibold hover:text-gold-600 transition-colors"
              >
                Read All Reviews
                <ArrowRight size={18} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={homeCta.backgroundImage}
            alt={homeCta.backgroundAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/85" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {homeCta.titleParts.map((part, i) =>
                part.highlight ? (
                  <span key={i} className="text-gold-400">
                    {part.text}
                  </span>
                ) : (
                  <React.Fragment key={i}>{part.text}</React.Fragment>
                )
              )}
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              {homeCta.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary text-base">
                <Phone size={20} />
                {homeCta.ctaPrimary}
              </Link>
              <a
                href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(homeCta.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:-translate-y-0.5"
              >
                <WhatsappLogo size={20} weight="fill" />
                Chat on WhatsApp
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}

export default Home;
