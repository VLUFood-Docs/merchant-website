import React from 'react';

interface TypographyProps {
  title: string;
  variant?: 'title' | 'subtitle' | 'body' | 'caption';
  className?: string;
}

const Typography = ({
  title,
  variant = 'body',
  className,
}: TypographyProps) => {
  return (
    <p
      className={`${
        variant == 'title'
          ? 'text-[36px] font-bold'
          : variant == 'subtitle'
          ? 'text-[32px] font-semibold'
          : variant == 'body'
          ? 'text-[24px]'
          : variant == 'caption'
          ? 'text-[18px] italic'
          : 'text-primary truncate'
      } ${className}`}
    >
      {title}
    </p>
  );
};

export default Typography;
