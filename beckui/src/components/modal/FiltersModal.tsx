import React from 'react';
import { Badge } from '../badge/Badge';
import { Wrapper } from '../wrapper/PageWrapper';
import { Checkbox } from '../checkbox/Checkbox';
import { Spacer } from '../spacer/Spacer';
import { Card } from '../card/Card';
import { CloseIcon } from '../icons/index';

export interface FiltersModalProps {
  onClose: () => void;
  initialFilters?: any;
}

export const FiltersModal: React.FC<FiltersModalProps> = ({
  onClose,
  initialFilters,
}) => {

  return (
    <Wrapper type="contentWrapper" style={{ gap: 0 }}>
        <Card style={{ boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.25)'}}>
            <Wrapper type="row" style={{ justifyContent: 'flex-end', width: '100%', marginTop: -12 }}>
                <div style={{ marginRight: -7 }}
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}>
                    <CloseIcon 
                        size={14} 
                        color="var(--middle-grey)" 
                        hoverColor="var(--secondary-color)"
                        style={{ cursor: 'pointer' }}
                    />
                </div>
            </Wrapper>

            <Wrapper type="row" style={{ gap: 46 }}>
                <Wrapper type="column" style={{ gap: 40  }}>
                    <Wrapper type="row" style={{ paddingLeft: 4 }}>
                        <Badge badgeLabel="1" label="Intake & Planning" color="var(--blue)" />
                    </Wrapper>

                    <Wrapper type="column" style={{ width: 160, gap: 20 }}>
                        {Object.entries(initialFilters?.phase1 || {}).map(([label, value]) => (
                            <Checkbox 
                                key={label}
                                label={label} 
                                colorLabel="var(--dark-grey)" 
                                color="var(--blue)" 
                                checked={value as boolean} 
                                style={{ fontSize: '15px' }}
                            />
                        ))}
                    </Wrapper>
                </Wrapper>

                <Wrapper type="column" style={{ gap: 40 }}>
                    <Wrapper type="row" style={{ width: 180, paddingLeft: 4 }}>
                        <Badge badgeLabel="2" label="Treatment Phase" color="var(--yellow)" />
                    </Wrapper>

                    <Wrapper type="column" style={{ width: 212, gap: 20 }}>
                        {Object.entries(initialFilters?.phase2 || {}).map(([label, value]) => (
                            <Checkbox 
                                key={label}
                                label={label} 
                                colorLabel="var(--dark-grey)" 
                                color="var(--yellow)" 
                                checked={value as boolean} 
                                style={{ fontSize: '15px' }}
                            />
                        ))}
                    </Wrapper>
                </Wrapper>

                <Wrapper type="column" style={{ gap: 40 }}>
                    <Wrapper type="row" style={{ width: 180, paddingLeft: 4 }}>
                        <Badge 
                            badgeLabel="3" 
                            label="Post-Treatment / Records Gathering" 
                            color="var(--secondary-color)"  
                        />
                    </Wrapper>
             
                    <Wrapper type="column" style={{ width: 225, gap: 20 }}>
                        {Object.entries(initialFilters?.phase3 || {}).map(([label, value]) => (
                            <Checkbox 
                                key={label}
                                label={label} 
                                colorLabel="var(--dark-grey)" 
                                color="var(--secondary-color)" 
                                checked={value as boolean} 
                                style={{ fontSize: '15px' }}
                            />
                        ))}
                    </Wrapper>
                </Wrapper>

                <Wrapper type="column" style={{ gap: 40 }}>
                    <Wrapper type="row" style={{ width: 180, paddingLeft: 4 }}> 
                        <Badge badgeLabel="4" label="Demand Preparation & Submission" color="var(--purple)" />
                    </Wrapper>

                    <Wrapper type="column" style={{ width: 212, gap: 20 }}>
                        {Object.entries(initialFilters?.phase4 || {}).map(([label, value]) => (
                            <Checkbox 
                                key={label}
                                label={label} 
                                colorLabel="var(--dark-grey)" 
                                color="var(--purple)" 
                                checked={value as boolean} 
                                style={{ fontSize: '15px' }}
                            />
                        ))}
                    </Wrapper>
                </Wrapper>

                <Wrapper type="column" style={{ gap: 40 }}>
                    <Wrapper type="row" style={{ width: 140, paddingLeft: 4 }}> 
                        <Badge badgeLabel="5" label="Negotiation & Mediation" color="var(--orange)" />
                    </Wrapper>

                    <Wrapper type="column" style={{ width: 212, gap: 20 }}>
                        {Object.entries(initialFilters?.phase5 || {}).map(([label, value]) => (
                            <Checkbox 
                                key={label}
                                label={label} 
                                colorLabel="var(--dark-grey)" 
                                color="var(--orange)" 
                                checked={value as boolean} 
                                style={{ fontSize: '15px' }}
                            />
                        ))}
                    </Wrapper>
                </Wrapper>

                <Wrapper type="column" style={{ gap: 40 }}>
                    <Wrapper type="row" style={{ width: 140, paddingLeft: 4 }}> 
                        <Badge badgeLabel="6" label="Settlement & Closing" color="var(--success)" />
                    </Wrapper>

                    <Wrapper type="column" style={{ width: 190, gap: 20 }}>
                        {Object.entries(initialFilters?.phase6 || {}).map(([label, value]) => (
                            <Checkbox 
                                key={label}
                                label={label} 
                                colorLabel="var(--dark-grey)" 
                                color="var(--success)" 
                                checked={value as boolean} 
                                style={{ fontSize: '15px' }}
                            />
                        ))}
                    </Wrapper>
                </Wrapper>
            </Wrapper>

            <Spacer customSize={5} />

        </Card>
    </Wrapper>
  );
};

export default FiltersModal;