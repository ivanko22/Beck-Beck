import React from 'react';
import { ClientDetailsTableHeader } from '../../../components/header/ClientDetailsTableHeader';
import { Card } from '../../../components/card/Card';
import { Typography } from '../../../components/typography/Typography';
import { Checkbox } from '../../../components/checkbox/Checkbox';
import { BaseDropdown } from '../../../components/dropdown/Dropdown';
import { Input } from '../../../components/input/Inputs';
import { Button } from '../../../components/button/Button';
import { PoliceIcon, EmailIcon } from '../../../components/icons';

const L = {
  InputsMedicalRow: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '40px',
  } as React.CSSProperties,
};

interface MedicalTreatmentSectionProps {
  state?: 'saved' | 'edit' | 'adding';
  formData?: {
    ongoingTreatment?: boolean;
    treatmentCompleted?: boolean;
    emergencyRoomVisit?: boolean;
    vehicleAmbulance1?: boolean;
    vehicleAmbulance2?: boolean;
    helicopterAirAmbulance1?: boolean;
    helicopterAirAmbulance2?: boolean;
    noPoliceReportTaken?: boolean;
    waitingOnInformationToOrderPR?: boolean;
    policeDepartment?: string;
    accidentLocation?: string;
    treatmentNeeds?: string;
    [key: string]: any;
  };
}

export const MedicalTreatmentSection: React.FC<MedicalTreatmentSectionProps> = ({ formData = {}, state }) => {
  return (
    <>
      <ClientDetailsTableHeader
        type="medical"
        title="Medical & Treatment"
        buttonLabel={['Order Police Report', 'Email AIC to Contact Client']}
        buttonIcon={[<PoliceIcon size={24} />, <EmailIcon size={20} />]}
        borderBottom={false}
      />
      
      <Card style={{ marginTop: '0px', gap: '36px', paddingBottom: '36px' }}>
        <Typography variant="titleSmall" style={{ marginBottom: '-16px' }}>
          Current Status
        </Typography>

        <div style={{ ...L.InputsMedicalRow }}>
          <Checkbox
            label="Ongoing Treatment"
            checked={formData?.ongoingTreatment || false}
            onChange={() => {}}
            disabled={state !== 'edit'}
          />
          <Checkbox
            label="Treatment Completed"
            checked={formData?.treatmentCompleted || false}
            onChange={() => {}}
            disabled={state !== 'edit'}
          />
          <Checkbox
            label="Emergency Room Visit"
            checked={formData?.emergencyRoomVisit || false}
            onChange={() => {}}
            disabled={state !== 'edit'}
          />
          <Checkbox
            label="Vehicle Ambulance 1"
            checked={formData?.vehicleAmbulance1 || false}
            onChange={() => {}}
            disabled={state !== 'edit'}
          />
        </div>

        <div style={{ ...L.InputsMedicalRow}}>
          <Checkbox
            label="Vehicle Ambulance 2"
            checked={formData?.vehicleAmbulance2 || false}
            onChange={() => {}}
            disabled={state !== 'edit'}
          />
          <Checkbox
            label="Helicopter Air Ambulance - 1"
            checked={formData?.helicopterAirAmbulance1 || false}
            onChange={() => {}}
            disabled={state !== 'edit'}
          />
          <Checkbox
            label="Helicopter Air Ambulance - 2"
            checked={formData?.helicopterAirAmbulance2 || false}
            onChange={() => {}}
            disabled={state !== 'edit'}
          />
        </div>

        <div style={ { ...L.InputsMedicalRow, alignItems: 'flex-end' }}>
          <BaseDropdown
            type="BaseDropdown"
            label="Police Department"
            value={formData?.policeDepartment || 'Missouri Highway Patrol'}
            state={formData?.policeDepartment ? 'selected' : 'default'}
            menuItems={[
              { label: 'Missouri Highway Patrol' },
              { label: 'Illinois State Police' },
              { label: 'California Highway Patrol' },
            ]}
            onSelect={(item) => {
              console.log(item);
            }}
            disabled={state !== 'edit'}
          />

          <Input
            placeholder="Accident Location"
            label="Accident Location"
            value={formData?.accidentLocation || ''}
            size="large"
            customSize={{ width: '400px' }}
            disabled={state !== 'edit'}
          />

          <div style={{ display: 'flex', gap: '20px', paddingBottom: '10px', }}>
            <Checkbox
              label="No Police Report Taken"
              checked={formData?.noPoliceReportTaken || false}
              onChange={() => {}}
              disabled={state !== 'edit'}
            />
            <Checkbox
              label="Waiting on Information to Order PR"
              checked={formData?.waitingOnInformationToOrderPR || false}
              onChange={() => {}}
              disabled={state !== 'edit'}
            />
          </div>

        </div>

        <div style={ { ...L.InputsMedicalRow, alignItems: 'center', width: '100%', marginTop: '-10px' }}>
          <BaseDropdown
            type="BaseDropdown"
            label="Treatment Needs"
            value={formData?.treatmentNeeds || 'Select Treatment Needs'}
            state={formData?.treatmentNeeds ? 'selected' : 'default'}
            disabled={state !== 'edit'}
            menuItems={[
              { label: 'Ambulance' },
              { label: 'Emergency Room' },
              { label: 'Surgery' },
            ]}
            onSelect={(item) => {
              console.log(item);
            }}
          />

           <div style={{ marginTop: '33px', marginLeft: '-15px' }}>
             <Button
               label="Email AIC to Contact Client"
               icon={<EmailIcon size={20} />}
               iconPosition="left"
               onClick={() => {}}
               size="medium"
             />
           </div>
        </div>
      </Card>
    </>
  );
};