
import React from 'react';
import { PopupModal } from 'react-calendly';

interface CalendlyButtonProps {
  className?: string;
  text?: string;
  children?: React.ReactNode;
}

export const CalendlyButton: React.FC<CalendlyButtonProps> = ({ 
  className = "btn-primary", 
  text = "Schedule a Call",
  children
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || "https://calendly.com/jevus-info/30min";

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={className}
      >
        {children || text}
      </button>
      
      {/* 
        We use a portal-like approach with PopupModal from react-calendly.
        It handles its own mounting/unmounting based on isOpen.
      */}
      <PopupModal
        url={calendlyUrl}
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.getElementById('root')!}
        pageSettings={{
          backgroundColor: '0B0F19',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '4A4DFF',
          textColor: 'ffffff',
        }}
      />
    </>
  );
};
