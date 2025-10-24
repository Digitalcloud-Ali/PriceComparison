import React from 'react';

interface USState {
  code: string;
  name: string;
}

const US_STATES: USState[] = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  // ... add all US states
];

interface USStateSelectorProps {
  selectedState: string;
  onChange: (stateCode: string) => void;
  className?: string;
}

export default function USStateSelector({ selectedState, onChange, className = '' }: USStateSelectorProps) {
  return (
    <select
      value={selectedState}
      onChange={(e) => onChange(e.target.value)}
      className={`form-select rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${className}`}
    >
      <option value="">Select State</option>
      {US_STATES.map((state) => (
        <option key={state.code} value={state.code}>
          {state.name}
        </option>
      ))}
    </select>
  );
} 