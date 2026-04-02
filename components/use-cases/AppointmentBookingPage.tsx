import React from 'react';
import { UseCasePage } from '../UseCasePage';

const data = {
  slug: 'appointment-booking',
  name: 'Appointment Booking',
  headline: "They Called.\nJevus Booked.\nYou Showed Up.",
  subheadline: 'Jevus AI books service appointments directly into your calendar — with job details, customer info, and address — so you wake up to a full schedule instead of a voicemail box.',
  stats: [
    { value: '85%', label: 'of callers won\'t leave voicemail' },
    { value: '3x', label: 'more bookings with instant response' },
    { value: '$1,200', label: 'average booked job value' },
    { value: '<60s', label: 'average time to book a job' },
  ],
  problem: {
    title: 'Calls without bookings are wasted leads',
    points: [
      'Customers call, get voicemail, and call the next contractor. 85% never leave a message.',
      'You call back hours later — they already booked someone else.',
      'Answering services take messages but don\'t actually book appointments.',
      'You spend evenings returning calls and manually booking instead of resting.',
      'Double-bookings and scheduling conflicts happen when you\'re trying to book from a job site.',
    ],
  },
  solution: {
    title: 'AI books the job in real-time',
    points: [
      'Jevus answers instantly, qualifies the lead, and checks your calendar availability.',
      'Books the appointment directly with job type, address, issue description, and customer contact.',
      'Sends you and the customer a confirmation with appointment details.',
      'Avoids scheduling conflicts by checking your real-time availability.',
      'Integrates with Google Calendar, ServiceTitan, Housecall Pro, and Jobber.',
    ],
  },
  benefits: [
    { title: 'Direct Calendar Integration', description: 'Jobs land directly in your Google Calendar, ServiceTitan, Housecall Pro, or Jobber — no manual entry needed.' },
    { title: 'Smart Scheduling', description: 'Jevus checks your availability and books within your open slots. No double-bookings or after-hours appointments (unless you want them).' },
    { title: 'Complete Job Details', description: 'Every booking includes customer name, phone, address, job type, issue description, and any special notes.' },
    { title: 'Confirmation Messages', description: 'Both you and the customer get instant confirmation — reducing no-shows and building trust.' },
    { title: 'Reduces Admin Time', description: 'Stop spending 30-60 minutes every evening returning calls and manually booking. Jevus does it in real-time.' },
    { title: 'Higher Conversion Rate', description: 'Instant booking converts 3x more callers than callback-based workflows. Speed wins.' },
  ],
  faqs: [
    { question: 'Which calendars does Jevus integrate with?', answer: 'Jevus integrates with Google Calendar, ServiceTitan, Housecall Pro, Jobber, Outlook, and 50+ other tools via Zapier. If you use a tool, we probably connect to it.' },
    { question: 'Can Jevus check my availability before booking?', answer: 'Yes. Jevus checks your calendar in real-time and only books within your available time slots. You set your working hours, buffer times, and capacity — Jevus respects all of it.' },
    { question: 'What if a customer needs to reschedule?', answer: 'Jevus can handle rescheduling requests. It checks your updated availability and offers the customer new time slots, then updates the booking in your calendar.' },
    { question: 'Does the customer get a confirmation?', answer: 'Yes. Jevus confirms the appointment details with the customer on the call and can send a follow-up text confirmation with the date, time, and your company information.' },
  ],
  seo: {
    title: 'AI Appointment Booking for Home Services | Jevus AI',
    description: 'AI-powered appointment booking for contractors. Jevus answers calls, checks your calendar, and books service appointments in real-time — directly into your CRM.',
    keywords: 'AI appointment booking contractor, automated booking home services, AI scheduling plumber, HVAC appointment booking AI',
  },
};

export const AppointmentBookingPage = () => <UseCasePage data={data} />;
