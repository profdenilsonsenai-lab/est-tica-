/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutDoctor } from './components/AboutDoctor';
import { TrainingsSection } from './components/TrainingsSection';
import { InteractiveJourneyGuide } from './components/InteractiveJourneyGuide';
import { ProceduresSection } from './components/ProceduresSection';
import { MethodologyPhilosophy } from './components/MethodologyPhilosophy';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const location = useLocation();
  const [activeTarget, setActiveTarget] = useState<'all' | 'training' | 'clinic'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInterest, setModalInterest] = useState<'training' | 'clinic'>('training');
  const [modalSelectedItem, setModalSelectedItem] = useState<string | undefined>(undefined);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  const handleOpenContactModal = (interest: 'training' | 'clinic' = 'training', selectedItem?: string) => {
    setModalInterest(interest);
    setModalSelectedItem(selectedItem);
    setIsModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectTarget = (target: 'training' | 'clinic') => {
    setActiveTarget(target);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2A2421] selection:bg-[#D4AF37]/20 selection:text-[#1A1412] flex flex-col font-sans">
      {/* Top sticky navigation */}
      <Navbar
        onOpenContactModal={handleOpenContactModal}
        activeTarget={activeTarget}
        setActiveTarget={setActiveTarget}
      />

      {/* Hero presentation with dual targeting */}
      <main className="grow">
        <Hero
          onOpenContactModal={handleOpenContactModal}
          onSelectTarget={handleSelectTarget}
        />

        {/* The Doctor's trajectory and philosophy */}
        <AboutDoctor />

        {/* Primary Pillar: Professional VIP Trainings (Expert em Treinamento) */}
        <TrainingsSection
          onOpenContactModal={handleOpenContactModal}
        />

        {/* Interactive Advisor to guide students and patients */}
        <InteractiveJourneyGuide
          onOpenContactModal={handleOpenContactModal}
        />

        {/* Secondary Pillar: Clinical Aesthetic Procedures for Patients */}
        <ProceduresSection
          onOpenContactModal={handleOpenContactModal}
        />

        {/* Ultrasound Safety & Luxury Clinic Experience */}
        <MethodologyPhilosophy />

        {/* Testimonials from both Doctors/Trainees and Clinic Patients */}
        <Testimonials />

        {/* Common questions and transparent answers */}
        <FaqSection
          onOpenContactModal={() => handleOpenContactModal('training')}
        />

        {/* Application & Scheduling booking section */}
        <BookingSection
          preselectedInterest={activeTarget === 'clinic' ? 'clinic' : 'training'}
          preselectedItem={modalSelectedItem}
        />
      </main>

      {/* Legal and Institutional Footer */}
      <Footer />

      {/* Floating Concierge WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Quick Application / Appointment Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={handleCloseContactModal}
        defaultInterest={modalInterest}
        defaultItem={modalSelectedItem}
      />
    </div>
  );
}
