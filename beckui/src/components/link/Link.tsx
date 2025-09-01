import React, { useState } from 'react';

export interface LinkProps {
  href: string;
  text: React.ReactNode;
  variant?: 'SignUp';
  rel?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const styles = {
    base: {
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
    },

    variants: {
        SignUp: {
        color: 'var(--middle-grey)',
        fontWeight: 500,
        },

        SignUpHover: {
            color: 'var(--secondary-color-hover'

        },
    },
};

export const Link: React.FC<LinkProps> = ({
  href,
  text,
  variant,
  rel,
  className = '',
  onClick,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const linkStyle = {
    ...styles.base,
    ...(variant === 'SignUp' && styles.variants.SignUp),
  };

  const renderSignUpContent = () => {
    if (variant === 'SignUp' && typeof text === 'string') {
      const parts = text.split('Sign Up');

      if (parts.length === 2) {
        return (
          <>
            {parts[0]}
            <span style={isHovered ? styles.variants.SignUpHover : styles.variants.SignUp}>
              Sign Up
            </span>
          </>
        );
      }
    }
    return text;
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      href={href}
      style={linkStyle}
      className={className}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {renderSignUpContent()}
    </a>
  );
};
