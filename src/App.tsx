declare module 'react';
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { Calculator } from './components/Calculator';
import { Portfolio } from './components/Portfolio';
import { Differentials } from './components/Differentials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WhatsAppSettingsModal } from './components/WhatsAppSettingsModal';
import { MonthlyPlans } from './components/MonthlyPlans';
import { CalculatorState } from './types';
import { MANDATORY_SERVICE_ID } from './data/services';

export default function App() {
  const [calculatorState, setCalculatorState] = useState<CalculatorState>({
    selectedServiceIds: [MANDATORY_SERVICE_ID], // Videomaker R$ 500 is mandatory
    selectedExtraIds: [],
    diarias: 1,
    clientName: '',
    eventDate: '',
    location: '',
    notes: '',
    whatsappNumber: '5585991026580',
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  const handleUpdateState = (newState: Partial<CalculatorState>) => {
    setCalculatorState((prev) => ({
      ...prev,
      ...newState,
      // Ensure Videomaker base service is always selected
      selectedServiceIds: Array.from(
        new Set([...(newState.selectedServiceIds || prev.selectedServiceIds), MANDATORY_SERVICE_ID])
      ),
    }));
  };

  const handleToggleService = (serviceId: string) => {
    if (serviceId === MANDATORY_SERVICE_ID) return;
    setCalculatorState((prev) => {
      const exists = prev.selectedServiceIds.includes(serviceId);
      const nextIds = exists
        ? prev.selectedServiceIds.filter((id) => id !== serviceId)
        : [...prev.selectedServiceIds, serviceId];
      return {
        ...prev,
        selectedServiceIds: Array.from(new Set([...nextIds, MANDATORY_SERVICE_ID])),
      };
    });
  };

  const handleNavigateToCalculator = () => {
    const el = document.querySelector('#calculadora');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToPortfolio = () => {
    const el = document.querySelector('#portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050507] text-zinc-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        whatsappNumber={calculatorState.whatsappNumber}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onNavigateToCalculator={handleNavigateToCalculator}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onNavigateToCalculator={handleNavigateToCalculator}
          onNavigateToPortfolio={handleNavigateToPortfolio}
        />

        <ServicesGrid
          selectedServiceIds={calculatorState.selectedServiceIds}
          onToggleService={handleToggleService}
          onNavigateToCalculator={handleNavigateToCalculator}
        />

        <Calculator
          calculatorState={calculatorState}
          onUpdateState={handleUpdateState}
        />

        <MonthlyPlans whatsappNumber={calculatorState.whatsappNumber} />

        <Portfolio />

        <Differentials />

        <FAQ />
      </main>

      {/* Footer */}
      <Footer onNavigateToCalculator={handleNavigateToCalculator} />

      {/* Modal to configure custom WhatsApp phone number */}
      <WhatsAppSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        currentNumber={calculatorState.whatsappNumber}
        onSaveNumber={(num) => handleUpdateState({ whatsappNumber: num })}
      />

    </div>
  );
}
