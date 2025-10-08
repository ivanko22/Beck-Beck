export type TemplateRow = {
    id: string;
    name: string;
    email: boolean;
    text: boolean;
    pdf: boolean;
  };
  
  export type TemplateLibraryProps = {
    rows?: Array<Pick<TemplateRow, 'id' | 'name'> & Partial<Omit<TemplateRow, 'id' | 'name'>>>;
    onSave?: (rows: TemplateRow[]) => void;
    onCancel?: () => void;
    disabledButton?: boolean;
    saved?: boolean;
    textareaText?: string;
    disabled?: boolean;
    pageActionsState?: 'save' | 'saved' | 'edit' | 'adding';
  };
  
  export const defaultRows: TemplateRow[] = [
    { id: '1', name: 'Email Client Button on Client Detail Page', email: false, text: false, pdf: false },
    { id: '2', name: 'Send Medical Records Request to Provider',   email: false, text: false, pdf: false },
    { id: '3', name: 'Send Wage Loss Form to Employer',             email: false, text: false, pdf: false },
    { id: '4', name: 'Fax Authorization Form to Hospital',          email: false, text: false, pdf: false },
    { id: '5', name: 'Email Case Status Update on Client Detail Page', email: false, text: false, pdf: false },
    { id: '6', name: 'Send Follow-Up Reminder to Medical Provider', email: false, text: false, pdf: false },
  ];
  