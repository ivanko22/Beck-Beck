import type { Meta, StoryObj } from '@storybook/react';
import { MedicalFolderPage } from './MedicalFolderPage';

const meta: Meta<typeof MedicalFolderPage> = {
  title: 'Pages/Medical Folder & Authorization',
  component: MedicalFolderPage,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    clientInfo: {
      control: 'text',
      description: 'Client name to display in header',
    },
  },
};

export default meta;

type Story = StoryObj<typeof MedicalFolderPage>;

const clientInfo = {
  name: 'Cooper, Jane',
  caseNumber: 'Case #2025-001',
  phone: '(618) 229-2613',
  dob: '01/22/1993',
  last4SSN: '8976',
  ssn: '221-43-8976',
  crashDate: '07/31/25',
  address: '1425 Elm Street Springfield, IL 62704',
  isCompleted: false,
  advancedInjuryCare: false,
  professionalImaging: false,
  greaterMOImaging: false,
}

const sampleBills = [
  {
    name: 'Mercy_Hospital_Bill_01.pdf',
    uploaded: '08/05/25'
  },
  {
    name: 'Synapse_Chiropractic_Bill_03.pdf',
    uploaded: '08/01/25'
  },
  {
    name: 'ER_Visit_Invoice_May_2025.pdf',
    uploaded: '07/09/25'
  },
  {
    name: 'KCPD_Billing_Summary.pdf',
    uploaded: '07/28/25'
  },
  {
    name: 'Radiology_Statement.pdf',
    uploaded: '07/27/25'
  }
];

const sampleRecords = [
  {
    name: 'Initial_Exam_Report_Synapse.pdf',
    uploaded: '08/05/25'
  },
  {
    name: 'Discharge_Summary_Mercy.pdf',
    uploaded: '08/01/25'
  },
  {
    name: 'MRI_Report_2025_05_03.pdf',
    uploaded: '07/09/25'
  },
  {
    name: 'Progress_Notes_Week2.pdf',
    uploaded: '07/28/25'
  },
  {
    name: 'Chiropractic_Visit_Log.pdf',
    uploaded: '07/27/25'
  }
];

const sampleMedicalAuths = [
  {
    name: 'Mercy_Hospital_MedAuth_01.pdf',
    uploaded: '08/21/25'
  },
  {
    name: 'Synapse_Chiropractic_Auth.pdf',
    uploaded: '08/20/25'
  }
];

const sampleDuplicates = [
  {
    name: 'Initial_Exam_Report_Synapse.pdf',
    uploaded: '08/05/25'
  },
  {
    name: 'Discharge_Summary_Mercy.pdf',
    uploaded: '08/01/25'
  },
  {
    name: 'MRI_Report_2025_05_03.pdf',
    uploaded: '07/09/25'
  },
  {
    name: 'Progress_Notes_Week2.pdf',
    uploaded: '07/28/25'
  },
  {
    name: 'Chiropractic_Visit_Log.pdf',
    uploaded: '07/27/25'
  }
];

const sampleMedAuthRows = [
  {
    id: '1',
    state: 'saved' as const,
    orderRecordsDate: '5/29/25',
    orderBillsDate: '7/29/25',
    providerName: 'Springfield ER',
    address: '1234 Medical Plaza',
    city: 'Springfield',
    stateCode: 'IL',
    zipCode: '62701',
    recordsArrived: true,
    billsArrived: false,
    billedAmount: '$3,800',
    notes: 'Awaiting radiology confirmation',
  },
  {
    id: '2',
    state: 'saved' as const,
    orderRecordsDate: '06/10/25',
    orderBillsDate: '07/05/25',
    providerName: 'Radiology Group',
    address: '5678 Imaging Blvd',
    city: 'Springfield',
    stateCode: 'IL',
    zipCode: '62702',
    recordsArrived: true,
    billsArrived: true,
    billedAmount: '$1,250',
    notes: 'All records received',
  },
  {
    id: '3',
    state: 'saved' as const,
    orderRecordsDate: '05/01/25',
    orderBillsDate: '06/01/25',
    providerName: 'OrthoCare Clinic',
    address: '9012 Bone St',
    city: 'Springfield',
    stateCode: 'IL',
    zipCode: '62703',
    recordsArrived: true,
    billsArrived: true,
    billedAmount: '$2,950',
    notes: 'Urgent follow-up needed',
  },
  {
    id: '4',
    state: 'saved' as const,
    orderRecordsDate: '06/25/25',
    orderBillsDate: '07/12/25',
    providerName: 'Midwest PT Center',
    address: '3456 Therapy Ave',
    city: 'Springfield',
    stateCode: 'IL',
    zipCode: '62704',
    recordsArrived: false,
    billsArrived: false,
    billedAmount: '$875',
    notes: 'Final session completed',
  },
  {
    id: '5',
    state: 'saved' as const,
    orderRecordsDate: '06/15/25',
    orderBillsDate: '07/01/25',
    providerName: 'Advanced Imaging',
    address: '7890 Scan Dr',
    city: 'Springfield',
    stateCode: 'IL',
    zipCode: '62705',
    recordsArrived: true,
    billsArrived: true,
    billedAmount: '$1,100',
    notes: 'Images uploaded',
  },
  {
    id: '6',
    state: 'saved' as const,
    orderRecordsDate: '31/01/25',
    orderBillsDate: 'Order Bill',
    providerName: 'Synapse Chiropractic Center',
    address: '2468 Spine Rd',
    city: 'Springfield',
    stateCode: 'IL',
    zipCode: '62706',
    recordsArrived: true,
    billsArrived: false,
    billedAmount: '$3,400',
    notes: 'Requires follow-up',
  },
  {
    id: '7',
    state: 'saved' as const,
    orderRecordsDate: 'Order Rec',
    orderBillsDate: 'Order Bill',
    providerName: 'Neuro Spine Center',
    address: '1357 Nerve Ln',
    city: 'Springfield',
    stateCode: 'IL',
    zipCode: '62707',
    recordsArrived: false,
    billsArrived: false,
    billedAmount: '$2,300',
    notes: 'Surgery planned 08/10/25',
  },
  {
    id: '8',
    state: 'saved' as const,
    orderRecordsDate: 'Order Rec',
    orderBillsDate: 'Order Bill',
    providerName: 'CardioHealth Institute',
    address: '9753 Heart Way',
    city: 'Springfield',
    stateCode: 'IL',
    zipCode: '62708',
    recordsArrived: false,
    billsArrived: false,
    billedAmount: '$2,800',
    notes: 'Awaiting final billing',
  },
];

export const Empty: Story = {
  args: {
    clientInfo: clientInfo, 
    uploadedMedicalDocuments: {
      bills: [],
      records: [],
      medicalAuths: [],
      duplicates: [],
    },
  },
};

export const WithFewDocuments: Story = {
  args: {
    clientInfo: clientInfo,
    medAuthRows: sampleMedAuthRows,
    uploadedMedicalDocuments: {
      bills: sampleBills,
      records: sampleRecords,
      medicalAuths: sampleMedicalAuths,
      duplicates: sampleDuplicates,
    },
  },
};
