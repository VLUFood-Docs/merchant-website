'use client';

import { Button } from '@/components/ui/button';

import React from 'react';

interface NavigateBtnProps {
  text: string;
  onClick: () => void;
  showIcon?: boolean;
  Icon?: React.ReactNode;
  className?: string;
}

const NavigateBtn = ({
  text,
  onClick,
  showIcon,
  Icon,
  className,
}: NavigateBtnProps) => {
  return (
    <Button
      variant={'ghost'}
      onClick={() => {
        onClick();
      }}
      className={className}
    >
      <div className={`flex gap-2 items-center justify-center `}>
        {showIcon && Icon}
        {text}
      </div>
    </Button>
  );
};

export default NavigateBtn;
