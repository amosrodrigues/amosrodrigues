import { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <StyledButton>
      <button
        className={`buttonBtn ${isOutlined ? 'outlined' : ''}`}
        {...props}
      />
    </StyledButton>
  )
}