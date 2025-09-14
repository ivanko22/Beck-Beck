import React, { useState } from 'react';
import { CloseIcon, SearchIcon } from '../icons/index.ts';
import { PageWrapper } from '../wrapper/PageWrapper.tsx';

interface SearchBoxProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  isActive?: boolean;  
};

export const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = "Search by Name, Phone",
  value = "",
  isActive,
  onChange,
  onSearch,
}) => {
  const [searchValue, setSearchValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    onChange?.(newValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch?.(searchValue);
    }
  };

  const handleSearchClick = () => {
    onSearch?.(searchValue);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleResetSearch = () => {
    setSearchValue('');
  };

  const containerStyle: React.CSSProperties = {
    width: '258px',
  };

  const searchBoxStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'var(--primary-color)',
    border: isFocused || isActive ? '1px solid var(--secondary-color)' : '1px solid var(--primary-color-hover)',
    borderRadius: '24px',
    padding: '0 16px 0 16px',
    height: '40px',
    transition: 'all 0.2s ease',
  };

  const searchIconStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--dark-grey)',
    cursor: 'pointer',
    marginRight: '8px',
    transition: 'color 0.2s ease',
  };

  const inputStyle: React.CSSProperties = {
    flex: 1,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    color: 'var(--light-grey)',
    fontSize: '14px',
    fontWeight: 400,
    fontFamily: 'var(--font-family-base)',
  };

  const inputPlaceholderStyle = `
    input::placeholder {
      color: var(--dark-grey);
    }
  `;

  return (

      <PageWrapper background='darkBlue'>
        <style>{inputPlaceholderStyle}</style>
        <div style={containerStyle}>
          <div style={searchBoxStyle}>
            
            <div style={searchIconStyle} onClick={handleSearchClick}>
              <SearchIcon size={14} />
            </div>

            <input
              type="text"
              placeholder={placeholder}
              value={searchValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{
                ...inputStyle,
              }}
            />
            
          {searchValue.length > 0 && (
              <div style={{ cursor: 'pointer' }} onClick={handleResetSearch}>
                <CloseIcon 
                  size={11} 
                  color='var(--dark-grey' 
                />
              </div>
          )}

          </div>
        </div>
      </PageWrapper>

  );
};
