import React from 'react';
import { Header } from '../components/header/Header';
import { Navigation } from '../components/navigation/Navigation';
import { TableHeader } from '../components/table/TableHeader';
import { RowAutoText } from '../components/row/RowAutoText';
import { Button } from '../components/button/Button';
import { Wrapper } from '../components/wrapper/PageWrapper';
import { PlusIcon } from '../components/icons/index';

export interface AutoTextProps {
  state?: 'saved' | 'adding' | 'edit';
  autoTexts: {
    id: string;
    state: 'saved' | 'edit' | 'adding';
    dropdownValue?: string;
    triggeringEvent?: string;
    textMessage: string;
  }[];
}

export const AutoText: React.FC<AutoTextProps> = ({ state, autoTexts }) => {
  return (
    <Wrapper type="pageWrapper">
      <Navigation
        userEmail="ivankordonets@gmail.com"
      />

      <Wrapper type="mainWrapper">
        <Header
          section="Auto Text"
        />

        <Wrapper type="contentWrapper">
          <TableHeader
            columns={[{
              label: 'Triggering Event', 
              width: '475px',
              style: { marginLeft: '17px'}}, 
              { label: 'Text Message', width: '556px', style: { marginLeft: '17px' }}, 
              { label: '', width: '0px', style: { marginLeft: '17px' }}, 
            ]}
            activeColumn={0}
            useSpaceBetween={true}
          />

          {autoTexts.map((autoText) => (
            <RowAutoText
              key={autoText.id}
              row={autoText}
            />
          ))}

          {state === 'saved' &&
            <div style={{ paddingTop: '12px', paddingLeft: '26px' }}>  
                <Button
                  label="Add New Auto Text"
                  size='small'
                  color='var(--middle-grey)'
                  icon= {<PlusIcon size={22}/>}
                  iconPosition= 'left'
                  onClick={() => {}}
                />         
              </div>
            }
          
          </Wrapper>

        </Wrapper>
      
    </Wrapper>
  );
};
