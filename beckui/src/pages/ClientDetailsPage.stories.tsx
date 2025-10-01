import type { Meta, StoryObj } from '@storybook/react';
import { ClientDetailsPage } from './ClientDetailsPage';

const meta: Meta<typeof ClientDetailsPage> = {
  title: 'Pages/ClientDetailsPage',
  component: ClientDetailsPage,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    caseNumber: {
      control: 'text',
      description: 'Case number to display in header',
    },
    clientName: {
      control: 'text',
      description: 'Client name to display in header',
    },
    saved: {
      control: 'select',
      options: [true, false],
      description: 'State of the form',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ClientDetailsPage>;

export const Empty: Story = {
  args: {
    caseNumber: 'Case #2025-0003',
    clientName: '',
    saved: false,
    disabledButton: true,
    formData: {
      insuranceCompany: '',
      insuranceAddress: '',
      clientName: '',
      policyHolderName: '',
      claimNumber: '',
      policyNumber: '',
      mainInsPhone: '',
      hasOwnPolicy: false,
      demandLetterSent: false,
      biAdjusterName: '',
      biAdjusterPhone: '',
      biAdjusterFax: '',
      biAdjusterEmail: '',
      medPayAdjusterName: '',
      medPayAdjusterPhone: '',
      medPayAdjusterEmail: '',
      medPayAdjusterFax: '',
      liabilityLimitsPerPerson: '',
      uimLimitsPerPerson: '',
      umLimitsPerPerson: '',
      vehiclesOnPolicy: '',
      totalUmStackedLimits: '',
      umbrellaSecondaryLiabilityPolicy: '',
      notes: '',
      emailOptions: {
        liability: false,
        medpay: false,
        uim: false,
        um: false,
        excess: false,
      },
      medPayLimit: 'none',
      medPayLimitOther: '',
    },
  },
};

export const Adding: Story = {
  args: {
    caseNumber: 'Case #2025-0004',
    clientName: 'Jane Doe',
    saved: false,
    formData: {
      insuranceCompany: 'Progressive',
      insuranceAddress: '456 Oak Ave, Chicago, IL 60601',
      clientName: 'Jane Doe',
      policyHolderName: 'Jane Doe',
      claimNumber: 'PROG-2025-567890',
      policyNumber: 'RS-5589-7745',
      mainInsPhone: '(312) 555-0987',
      hasOwnPolicy: false,
      demandLetterSent: false,
      biAdjusterName: 'Lisa Brown',
      biAdjusterPhone: '(312) 555-0543',
      biAdjusterFax: '(312) 555-7722',
      biAdjusterEmail: 'lisa.brown@progressive.com',
      medPayAdjusterName: 'Michael Smith',
      medPayAdjusterPhone: '(312) 555-7721',
      medPayAdjusterEmail: 'sarah.johnson@medpay.com',
      medPayAdjusterFax: '(312) 555-7721',
      liabilityLimitsPerPerson: '$50,000',
      uimLimitsPerPerson: '$500,000',
      umLimitsPerPerson: '$1,000,000',
      vehiclesOnPolicy: '1',
      totalUmStackedLimits: '$1,000,000',
      umbrellaSecondaryLiabilityPolicy: 'No',
      notes: 'The adjuster has confirmed that Uninsured Motorist (UM) stacking is applicable for both vehicles listed under the policy, meaning the coverage limits can be combined to increase the total available protection in the event of a claim. In addition, the adjuster verified that the $1,000,000 umbrella policy is active and will extend to bodily injury claims, providing an additional layer of coverage above the standard policy limits. This ensures that, in the case of a serious accident, there is both expanded UM coverage and substantial excess liability protection to address potential damages.',
      emailOptions: {
        liability: true,
        medpay: true,
        uim: false,
        um: false,
        excess: false,
      },
      medPayLimit: '10k',
      medPayLimitOther: '',
    },
  },
};

  export const Saved: Story = {
    args: {
      caseNumber: 'Case #2025-0004',
      clientName: 'Jane Doe',
      saved: true,
      formData: {
        insuranceCompany: 'Progressive',
        insuranceAddress: '456 Oak Ave, Chicago, IL 60601',
        clientName: 'Jane Doe',
        policyHolderName: 'Jane Doe',
        claimNumber: 'PROG-2025-567890',
        policyNumber: 'RS-5589-7745',
        mainInsPhone: '(312) 555-0987',
        hasOwnPolicy: false,
        demandLetterSent: false,
        biAdjusterName: 'Lisa Brown',
        biAdjusterPhone: '(312) 555-0543',
        biAdjusterFax: '(312) 555-7722',
        biAdjusterEmail: 'lisa.brown@progressive.com',
        medPayAdjusterName: 'Michael Smith',
        medPayAdjusterPhone: '(312) 555-7721',
        medPayAdjusterEmail: 'sarah.johnson@medpay.com',
        medPayAdjusterFax: '(312) 555-7721',
        liabilityLimitsPerPerson: '$50,000',
        uimLimitsPerPerson: '$500,000',
        umLimitsPerPerson: '$1,000,000',
        vehiclesOnPolicy: '1',
        totalUmStackedLimits: '$1,000,000',
        umbrellaSecondaryLiabilityPolicy: 'No',
        notes: 'The adjuster has confirmed that Uninsured Motorist (UM) stacking is applicable for both vehicles listed under the policy, meaning the coverage limits can be combined to increase the total available protection in the event of a claim. In addition, the adjuster verified that the $1,000,000 umbrella policy is active and will extend to bodily injury claims, providing an additional layer of coverage above the standard policy limits. This ensures that, in the case of a serious accident, there is both expanded UM coverage and substantial excess liability protection to address potential damages.',
        emailOptions: {
          liability: true,
          medpay: true,
          uim: false,
          um: false,
          excess: false,
        },
        medPayLimit: '10k',
        medPayLimitOther: '',
      },
    },
  };
