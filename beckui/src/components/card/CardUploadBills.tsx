import React from 'react';
import { Card } from './Card';
import { Upload } from '../upload/Upload';
import { Spacer } from '../spacer/Spacer';
import { TableHeader } from '../table/TableHeader';
import { TemplateRowItem, BillRow } from '../row/TemplateLibTableRow';
import { Wrapper } from '../wrapper/PageWrapper';
import { Typography } from '../typography/Typography';
import { Button } from '../button/Button';
import { TagIcon } from '../icons/index';

export interface CardUploadBillsProps {
  title?: string;
  items?: BillRow[];
  columns?: string[];
  columnTemplate?: string;
  uploadLabel?: string;
}

export const CardUploadBills: React.FC<CardUploadBillsProps> = ({
  items = [],
  title,
  columns = ['Bill Name', 'Uploaded'],
  columnTemplate = '4.1fr 1.5fr 2fr 1fr',
  uploadLabel = 'Drop files here to attach and add files',

}) => {
  return (
    <Wrapper type="row" style={{ gap: 60, justifyContent: 'space-around' }}>
      <Wrapper type="column" style={{ minWidth: 500, flex: 1, gap: 0  }}>
          <Typography variant="sectionTitleSmall" style={{ paddingLeft: 28 }}>
              {title}
          </Typography>

          <Card style={{ alignItems: 'center'}}>
            {items.length < 1 && (<Spacer customSize={10} />)}
            
            <Upload withBorder={true} label={uploadLabel} style={{ height: 100, width: '100%' }}/>
            <Spacer customSize={10} />

            {items.length > 0 && (
              <TableHeader 
                columns={columns} 
                template={columnTemplate}
                style={{ width: '100%' }}
              />
   
            )}

            {items.map((bill, index) => (
              <Wrapper type="pageWrapper" style={{ width: '100%' }} key={index}>
                <TemplateRowItem type="bill" row={bill} />
              </Wrapper>
            ))}

            {title === 'Medical Authorization(s)' && (
              <>
                <Spacer customSize={10} />
                <Button
                  label="Generate Barnes Hospital Med Auth"
                  size="medium"
                  icon={<TagIcon size={26} />}
                  onClick={() => {}}
                />
                <Spacer customSize={10} />
              </>
            )}
          </Card>
      </Wrapper>
  </Wrapper>
  );
};

