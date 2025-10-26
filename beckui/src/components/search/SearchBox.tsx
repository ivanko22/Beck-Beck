import React, { useState, useEffect } from 'react';
import { CloseIcon, SearchIcon } from '../icons/index.ts';
import { Wrapper } from '../wrapper/PageWrapper';
import { FilterIcon } from '../icons/FilterIcon';
interface SearchBoxProps {
  placeholder?: string;
  value?: string;
  type?: 'primary';
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  isActive?: boolean;  
  style?: React.CSSProperties;
  onFiltersClick?: () => void;
};

export const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = "Search by Name, Phone",
  value = "",
  isActive,
  onChange,
  onSearch,
  style,
  type,
  onFiltersClick,
}) => {
  const [searchValue, setSearchValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setSearchValue(value ?? '');
  }, [value]);


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

  const searchBoxStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    border: type === 'primary' ? (
      isFocused || isActive ? '1px solid var(--secondary-color)' : '1px solid var(--light-grey)') : 
      isFocused || isActive ? '1px solid var(--secondary-color)' : '1px solid var(--primary-color-hover)',
    borderRadius: '24px',
    padding: '0 16px 0 16px',
    height: '40px',
    transition: 'all 0.2s ease',
    width: '220px',
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
    color: type === 'primary' ? 'var(--dark-grey)' : 'var(--light-grey)',
    fontSize: '14px',
    fontWeight: 400,
  };

  return (
    <Wrapper type="row" style={{ alignItems: 'center', gap: 18 }}>
      <div style={searchBoxStyle}>
        <div style={searchIconStyle} onClick={handleSearchClick}>
          <SearchIcon size={14} />
        </div>

        <input
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
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
                color='var(--dark-grey)' 
              />
            </div>
        )}
      </div>

      {type === 'primary' && 
        <FilterIcon size={20} 
          onClick={() => {
            console.log('filters clicked from search box');
            onFiltersClick?.();
          }} 
        />}
    </Wrapper>
  );
};
