'use client';

import { IconType } from 'react-icons';
import clsx from 'clsx';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  fullWidth?: boolean;
  hasBorder?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  fullWidth,
  hasBorder
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        `
      disabled:opacity-70
      disabled:cursor-not-allowed
      rounded-lg
      hover:opacity-80
      transition-colors
      flex 
      items-center 
      justify-center 
      gap-x-4
      `,
        fullWidth ? 'w-full' : '',
        outline
          ? 'border-slate-gray bg-white text-slate-gray'
          : 'border-coral-red text-white bg-coral-red',
        small
          ? 'py-2 px-4 text-sm font-light border-[1px]'
          : 'border-2 py-4 px-8 font-semibold'
      )}
    >
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
};

export default Button;
