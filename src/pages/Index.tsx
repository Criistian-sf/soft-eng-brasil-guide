
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhatTheyDo from '@/components/WhatTheyDo';
import TechnologiesSection from '@/components/TechnologiesSection';
import CertificationsSection from '@/components/CertificationsSection';
import SalarySection from '@/components/SalarySection';
import CompaniesSection from '@/components/CompaniesSection';
import ChallengesSection from '@/components/ChallengesSection';
import SdgSection from '@/components/SdgSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <WhatTheyDo />
        <TechnologiesSection />
        <CertificationsSection />
        <SalarySection />
        <CompaniesSection />
        <ChallengesSection />
        <SdgSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
