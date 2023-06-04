import React from 'react';

interface ErrorTextProps {
  text: string;
  className?: string;
}

const ErrorText = ({ text, className = '' }: ErrorTextProps) => {
  return <p className={`text-sm text-red-400 animate-pulse italic py-2 ${className}`}>{text}</p>;
};

export default ErrorText;
