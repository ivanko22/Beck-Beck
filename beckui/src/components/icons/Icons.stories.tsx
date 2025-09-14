import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  ClientDetailIcon,
  DocumentIcon,
  MedicalIcon,
  CarIcon,
  BookIcon,
  EmailIcon,
  ClipboardIcon,
  CheckIcon,
  HandshakeIcon,
  ScaleIcon,
  CloseIcon,
} from './index';

const meta: Meta = {
  title: 'Components/Icons',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A collection of SVG icons used throughout the application. All icons support customizable size, color, and styling.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'number', min: 16, max: 64, step: 4 },
      description: 'Size of the icon in pixels (recommended: 24px for 30x30 frame)',
      defaultValue: 24,
    },
    color: {
      control: { type: 'color' },
      description: 'Color of the icon stroke',
      defaultValue: '#3B40E2',
    },
  },
};

export default meta;
type Story = StoryObj;

export const ClientDetail: Story = {
  args: {
    size: 24,
    color: '#000000',
  },
  render: (args) => <ClientDetailIcon {...args} />,
};

export const Document: Story = {
  args: {
    size: 24,
    color: '#000000',
  },
  render: (args) => <DocumentIcon {...args} />,
};

export const Medical: Story = {
  args: {
    size: 24,
    color: '#000000',
  },
  render: (args) => <MedicalIcon {...args} />,
};

export const Car: Story = {
  args: {
    size: 24,
    color: '#000000',
  },
  render: (args) => <CarIcon {...args} />,
};

export const Book: Story = {
  args: {
    size: 24,
    color: '#000000',
  },
  render: (args) => <BookIcon {...args} />,
};

export const Email: Story = {
  args: {
    size: 24,
    color: '#000000',
  },
  render: (args) => <EmailIcon {...args} />,
};

export const Clipboard: Story = {
  args: {
    size: 24,
    color: '#000000',
  },
  render: (args) => <ClipboardIcon {...args} />,
};

export const Check: Story = {
  args: {
    size: 24,
    color: '#000000',
  },
  render: (args) => <CheckIcon {...args} />,
};

export const Handshake: Story = {
  args: {
    size: 24,
    color: '#000000',
  },
  render: (args) => <HandshakeIcon {...args} />,
};

export const Scale: Story = {
  args: {
    size: 24,
    color: '#000000',
  },
  render: (args) => <ScaleIcon {...args} />,
};

export const Close: Story = {
  args: {
    size: 24,
    color: '#000000',
  },
  render: (args) => <CloseIcon {...args} />,
};

// Showcase story - displays all icons in a grid
export const IconShowcase: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All available icons displayed in different sizes and colors to demonstrate their appearance and usage.',
      },
    },
  },
  render: () => {
    const icons = [
      { name: 'Client Detail', component: ClientDetailIcon },
      { name: 'Document', component: DocumentIcon },
      { name: 'Medical', component: MedicalIcon },
      { name: 'Car', component: CarIcon },
      { name: 'Book', component: BookIcon },
      { name: 'Email', component: EmailIcon },
      { name: 'Clipboard', component: ClipboardIcon },
      { name: 'Check', component: CheckIcon },
      { name: 'Handshake', component: HandshakeIcon },
      { name: 'Scale', component: ScaleIcon },
      { name: 'Close', component: CloseIcon },
    ];

    const colors = ['#6B7280', '#EF4444', '#10B981', '#3B82F6', '#8B5CF6', '#F59E0B'];
    const sizes = [20, 24, 28, 32];

    return (
      <div style={{ padding: '20px', maxWidth: '1200px' }}>
        <h2 style={{ marginBottom: '20px', color: '#374151' }}>Icon Showcase</h2>
        
        {/* Size demonstration */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ marginBottom: '16px', color: '#6B7280' }}>Different Sizes</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {sizes.map((size) => (
              <div key={size} style={{ textAlign: 'center' }}>
                <DocumentIcon size={size} color="#374151" />
                <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '4px' }}>
                  {size}px
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Color demonstration */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ marginBottom: '16px', color: '#6B7280' }}>Different Colors</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {colors.map((color) => (
              <div key={color} style={{ textAlign: 'center' }}>
                <DocumentIcon size={24} color={color} />
                <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '4px' }}>
                  {color}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All icons grid */}
        <div>
          <h3 style={{ marginBottom: '16px', color: '#6B7280' }}>All Icons</h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
            gap: '16px',
            padding: '16px',
            backgroundColor: '#F9FAFB',
            borderRadius: '8px'
          }}>
            {icons.map(({ name, component: IconComponent }) => (
              <div key={name} style={{ 
                textAlign: 'center', 
                padding: '16px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}>
                <IconComponent size={32} color="#374151" />
                <div style={{ 
                  fontSize: '12px', 
                  color: '#6B7280', 
                  marginTop: '8px',
                  fontWeight: '500'
                }}>
                  {name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

// Navigation state demonstration
export const NavigationStates: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Icons in different states as they would appear in the navigation component - default, hover, and active states.',
      },
    },
  },
  render: () => {
    const icons = [
      { name: 'Client Detail', component: ClientDetailIcon },
      { name: 'Document', component: DocumentIcon },
      { name: 'Medical', component: MedicalIcon },
      { name: 'Car', component: CarIcon },
      { name: 'Close', component: CloseIcon },
    ];

    const states = [
      { name: 'Default', color: 'var(--middle-grey)', bgColor: 'var(--primary-color)' },
      { name: 'Hover', color: 'var(--light-grey)', bgColor: 'var(--primary-color-hover)' },
      { 
        name: 'Active', 
        color: 'var(--light-grey)', 
        bgColor: 'var(--primary-color-hover)', 
        borderColor: '1px solid var(--secondary-color)',
      },
    ];

    return (
      <div style={{ 
        padding: '20px', 
        backgroundColor: 'var(--primary-color)',
        minHeight: '100vh'
      }}>
        <h2 style={{ marginBottom: '20px', color: '#374151' }}>Navigation States</h2>
        
        {states.map(({ name, color, bgColor, borderColor }) => (
          <div key={name} style={{ marginBottom: '24px' }}>
            <h3 style={{ marginBottom: '12px', color: '#6B7280' }}>{name} State</h3>
            <div style={{ display: 'flex', gap: '8px' }}>
              {icons.map(({ name: iconName, component: IconComponent }) => (
                <div
                  key={iconName}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '48px',
                    backgroundColor: bgColor,
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    borderBottom: borderColor || 'none',
                  }}
                >
                  <div style={{ marginRight: '8px' }}>
                    <IconComponent size={20} color={color} />
                  </div>
                  <span style={{ color, fontSize: '16px', fontWeight: 500 }}>{iconName}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};
