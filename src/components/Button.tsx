// Button.tsx
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type = 'button' }) => {
  return (
    <button type={type} onClick={onClick} className="bg-greenButton p-[16px] rounded-[10px] text-[18px] font-bold">
      <span className='text-[16px] font-bold text-white'>
        {children}
      </span>
    </button>
  );
};

export default Button;
