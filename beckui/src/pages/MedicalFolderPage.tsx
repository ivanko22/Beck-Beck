import React from 'react';
import { Header } from '../components/header/Header';
import { Navigation } from '../components/navigation/Navigation';
import { Wrapper } from '../components/wrapper/PageWrapper';
import { Spacer } from '../components/spacer/Spacer';
import { Button } from '../components/button/Button';
import { BillRow } from '../components/row/TemplateLibTableRow';
import { DownloadBillsIcon, DocumentIcon, TagIcon, EmailIcon, PlusIcon } from '../components/icons/index';
import { CardUploadBills } from '../components/card/CardUploadBills';
import { Input } from '../components/input/Inputs';
import { Typography } from '../components/typography/Typography';
import { Checkbox } from '../components/checkbox/Checkbox';
import { TableHeader } from '../components/table/TableHeader';
import { RowMedAuth } from '../components/row/RowMedAuth';

interface ClientInfo {
  name?: string;
  phone?: string;
  dob?: string;
  last4SSN?: string;
  ssn?: string;
  crashDate?: string;
  address?: string;
  caseNumber?: string;
  isCompleted?: boolean;
  advancedInjuryCare?: boolean;
  professionalImaging?: boolean;
  greaterMOImaging?: boolean;
}

interface MedicalFolderPageProps {
  clientInfo?: ClientInfo;
  medAuthRows?: Array<{
    id: string;
    state: 'saved' | 'edit' | 'adding';
    orderRecordsDate: string;
    orderBillsDate: string;
    providerName: string;
    address?: string;
    city?: string;
    stateCode?: string;
    zipCode?: string;
    recordsArrived: boolean;
    billsArrived: boolean;
    billedAmount: string;
    notes: string;
  }>;
  uploadedMedicalDocuments?: {
    bills?: BillRow[];
    records?: BillRow[];
    medicalAuths?: BillRow[];
    duplicates?: BillRow[];
  };
  openRowId?: string | null;
  onToggleRow?: (id: string) => void;
}

export const MedicalFolderPage: React.FC<MedicalFolderPageProps> = ({
  clientInfo,
  medAuthRows = [],
  uploadedMedicalDocuments = {
    bills: [],
    records: [],
    medicalAuths: [],
    duplicates: [],
    isOpen: false,
  },
  openRowId: externalOpenRowId,
  onToggleRow,
}) => {
  const [internalOpenRowId, setInternalOpenRowId] = React.useState<string | null>(null);
  const openRowId = externalOpenRowId !== undefined ? externalOpenRowId : internalOpenRowId;
  const setOpenRowId = onToggleRow ? (id: string | null) => onToggleRow(id || '') : setInternalOpenRowId;
  return (
    <Wrapper type="pageWrapper">
      <Navigation
        userEmail="ivankordonets@gmail.com"
        activeItem="medical"
      />

      <Wrapper type="mainWrapper">
        <Header
          section="Medical Folder & Authorization"
          current={clientInfo?.name}
          // showDropdown={true}
          onClose={() => {}}
        />

        <Wrapper type="contentWrapper" style={{ marginTop: 60 }}>
          <Spacer customSize={20} />

          <Wrapper type="row" style={{ gap: 60, justifyContent: 'space-around' }}>
            <CardUploadBills
              items={uploadedMedicalDocuments.bills}
              title="Bills"
              columns={['Bill Name', 'Uploaded']}
              columnTemplate="4.2fr 1.5fr 2fr 1fr"
              uploadLabel="Drop medical bills here"
            />

            <CardUploadBills
              items={uploadedMedicalDocuments.records}
              title="Records"
              columns={['Record Name', 'Uploaded']}
              columnTemplate="4.2fr 1.5fr 2fr 1fr"
              uploadLabel="Drop medical records here"
            />
          </Wrapper>

          {((uploadedMedicalDocuments.bills?.length ?? 0) > 0 || (uploadedMedicalDocuments.records?.length ?? 0) > 0) && (
            <Wrapper type="row" style={{ marginTop: 20, justifyContent: 'space-evenly' }}>
              <Button
                label="Download Bills"
                size="medium"
                icon={<TagIcon size={28} />}
                onClick={() => {console.log('download bills')}}
              />
              
              <Button
                label="Download Bills + Records Folder"
                size="medium"
                primary
                icon={<DownloadBillsIcon size={24} />}
                onClick={() => {console.log('download all')}}
              />
              
              <Button
                label="Download Records"
                size="medium"
                icon={<DocumentIcon size={20} />}
                onClick={() => {console.log('download records')}}
              />
            </Wrapper>
          )}
        </Wrapper>

        <Wrapper type="contentWrapper" style={{ marginTop: 0 }}>
          <Spacer customSize={20} />

          <Wrapper type="row" style={{ gap: 60, justifyContent: 'space-around' }}>
            <CardUploadBills
              items={uploadedMedicalDocuments.medicalAuths}
              title="Medical Authorization(s)"
              columns={['Bill Name', 'Uploaded']}
              columnTemplate="4.2fr 1.5fr 2fr 1fr"
              uploadLabel="Click or drag to replace files medical Authorization"
            />

            <CardUploadBills
              items={uploadedMedicalDocuments.duplicates}
              title="Duplicates"
              columns={['Record Name', 'Uploaded']}
              columnTemplate="4.2fr 1.5fr 2fr 1fr"
              uploadLabel="Click or drag Duplicates"
            />
          </Wrapper>

        </Wrapper>

          <Spacer customSize={30} />

          <Header
            section="Medical & Med. Authorization"
            current={clientInfo?.caseNumber}
            isFixed={false}
            onClose={() => {}}
            // showDropdown={true}
            rightButtonLabel="Add Medical Row"
            borderBottom={false}
          />

          <Wrapper type="contentWrapper" style={{ marginTop: 0 }}>
            <Wrapper type="row" style={{ gap: 50 }}>
              <Wrapper type="column" style={{ gap: 10 }}>
                <Typography variant="secondaryTitle" color="var(--primary-color)" style={{paddingLeft: 14}}>
                  {clientInfo?.name}
                </Typography>

                <Wrapper type="row">
                  <Input
                    label="DOB"
                    value={clientInfo?.dob}
                    noBorder={true}
                    showLabel={true}
                    disabled={true}
                    style={{ gap: 0 }}
                    customSize={{ width: '150px' }}
                  />
                  
                  <Input
                    label="Last 4 SSN"
                    value={clientInfo?.last4SSN}
                    noBorder={true}
                    showLabel={true}
                    disabled={true}
                    style={{ gap: 0 }}
                    customSize={{ width: '120px' }}
                  />

                  <Input
                    label="Phone"
                    value={clientInfo?.phone}
                    noBorder={true}
                    showLabel={true}
                    size="large"
                    disabled={true}
                    style={{ gap: 0 }}
                    customSize={{ width: '170px' }}
                  />
                </Wrapper>

                <Wrapper type="row">
                  <Input
                    label="Address"
                    value={clientInfo?.address}
                    noBorder={true}
                    showLabel={true}
                    disabled={true}
                    style={{ gap: 0 }}
                    customSize={{ width: '120px' }}
                  />
                </Wrapper>
              </Wrapper>

              <Wrapper type="column" style={{ gap: 30 }}>
                <Spacer customSize={30} />
                <Checkbox
                  label="Add Advanced Injury Care"
                  checked={clientInfo?.advancedInjuryCare}
                  onChange={() => {}}
                />

                <Checkbox
                  label="Add Professional Imaging"
                  checked={clientInfo?.professionalImaging}
                  onChange={() => {}}
                />
                
                <Checkbox 
                  label="Add Greater MO Imaging"
                  checked={clientInfo?.greaterMOImaging}
                  onChange={() => {}}
                />
              </Wrapper>

              <Wrapper type="column">
                <Spacer customSize={43} />

                <Button
                  label="Email Demand Writer"
                  onClick={() => {}}
                  size="medium"
                  icon={<EmailIcon size={20} />}
                />
                <Button
                  label="New Medical Row"
                  onClick={() => {}}
                  size="medium"
                  icon={<PlusIcon size={20} />}
                />
              </Wrapper>
            </Wrapper>

            <Spacer customSize={20} />

            {/* Medical & Folder Authorization */}
            <Wrapper type="column" style={{ gap: 0}}>
              <TableHeader
                columns={[
                  { label: 'Order Records', width: '160px' },
                  { label: 'Order Bills', width: '150px' },
                  { label: 'Medical Provider Name, Address, City, State, Zip', width: '380px' },
                  { label: 'Records Arrived?', width: '130px' },
                  { label: 'Bills Arrived?', width: '100px' },
                  { label: 'Billed Amount', width: '100px' },
                  { label: 'Notes', width: '290px' },
                  { label: '', width: '32px' },
                ]}
                useSpaceBetween={true}
              />
              
              {medAuthRows.map((row) => (
                <RowMedAuth
                  key={row.id}
                  row={row}
                  isOpen={openRowId === row.id}
                  onToggle={() => {
                    setOpenRowId(openRowId === row.id ? null : row.id);
                  }}
                  onChange={(updatedRow) => {
                    console.log('Row updated:', updatedRow);
                  }}
                />
              ))}
            </Wrapper>

            <div style={{ display: 'grid', gap: 14, gridTemplateColumns: '1fr 1fr 0.6fr 1fr 0.7fr 0.5fr 1.85fr' }}>
              <Button label="Add Medical Row" onClick={() => {}} size="medium" icon={<PlusIcon size={20} />} />
              <Spacer horizontal customSize={14} />

              <Spacer horizontal customSize={14} />
              <Spacer horizontal customSize={14} />

              <Wrapper type="column" style={{ gap: '24px', alignItems: 'flex-end' }}>
                <Typography variant="sectionTitleSmall" color="var(--middle-grey)">
                  Total Bills: 
                </Typography>
                <Typography variant="titleSmall" color="var(--middle-grey)">
                  Wage Loss: 
                </Typography>
                <Typography variant="titleSmall" color="var(--middle-grey)">
                  Future Medical Bills: 
                </Typography>
              </Wrapper>

              <Wrapper type="column" style={{ gap: '12px', alignItems: 'flex-end' }}>
                <Typography variant="sectionTitle" color="var(--primary-color)">
                  ${'18,475'}
                </Typography>

                <Typography variant="sectionTitleSmall" style={{ fontWeight: 'bold', color: 'var(--primary-color)'}}>
                    ${'4,200'}
                </Typography>
                <Typography variant="sectionTitleSmall" style={{ fontWeight: 'bold', color: 'var(--primary-color)'}}>
                    ${'7,500'}
                </Typography>
            </Wrapper>
          </div>

        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
