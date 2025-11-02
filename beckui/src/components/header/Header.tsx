import React from "react";
import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";
import { CloseIcon, PlusIcon, EmailIcon, Scale2Icon, BriefcaseIcon, MedicalIcon, PhoneIcon } from "../icons";
import { Button } from "../button/Button";
import { Checkbox } from "../checkbox/Checkbox";
import { Wrapper } from "../wrapper/PageWrapper";
import { SearchBox } from "../search/SearchBox";
import { Spacer } from "../spacer/Spacer";
import { Typography } from "../typography/Typography";
export interface HeaderProps {
  section: string;
  current?: string;
  type?: 'default' | 'clientDetails' | 'clientDashboard' | 'settlementNegotiations' | 'settlementStatement';
  showButtons?: boolean;
  subtitle?: string;
  rightButtonLabel?: string;
  buttonIcon?: React.ReactNode;
  borderBottom?: boolean;
  onClose?: () => void;
  width?: string;
  isFixed?: boolean;
  teams?: string[];
  clientNamePhone?: [string | undefined, string | undefined];
}

const styles = {
  container: {
    display: "flex",
    position: "fixed",
    zIndex: 100,
    alignItems: "center",
    justifyContent: "space-between",
    width: "calc(100vw - 300px)",
    height: "80px",
    backgroundColor: "var(--white)",
    marginBottom: "20px",
    paddingLeft: "30px",
    paddingRight: "30px",
    boxSizing: "border-box",
  } as React.CSSProperties,

  borderBottomStyle: {
    borderBottom: "1px solid var(--light-grey)",
  } as React.CSSProperties,

  left: {
    display: "flex",
    flexDirection: "column",
  } as React.CSSProperties,

  subtitle: {
    fontSize: "15px",
    color: "var(--middle-grey)",
  } as React.CSSProperties,

  close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as React.CSSProperties,

  buttonsWrapper: {
    display: "flex",
  } as React.CSSProperties,
};

export const Header: React.FC<HeaderProps> = ({
  section,
  teams,
  current,
  subtitle,
  type,
  onClose,
  buttonIcon,
  rightButtonLabel,
  width,
  borderBottom = true,
  isFixed = true,
  clientNamePhone,
}) => {
  const containerStyle = {
    ...styles.container,
    ...(width && { width }),
    ...(isFixed ? {} : { position: 'relative' as const, zIndex: 0 })
  };

  return (
    <div style={{...containerStyle, ...(borderBottom && styles.borderBottomStyle)}}>
      <Wrapper type="column" style={{ position: 'absolute', top: -50 }}>

      </Wrapper>

      <div style={styles.left}>
        <Breadcrumbs section={section} current={current} />
        {subtitle && <span style={styles.subtitle}>{subtitle}</span>}
      </div>
      
      {type === 'clientDetails' && (
        <div style={styles.buttonsWrapper}>
          <Button 
            icon={<PlusIcon size={20} />}
            iconPosition="left"
            size="medium"
            label="Jump to Auto Insurance" 
          />

          <Button 
            icon={<EmailIcon size={20} />}
            iconPosition="left"
            size="medium"
            label="Sent Message" 
          />
        </div>
      )}

      {type === 'settlementNegotiations' && (
        <Wrapper type="row">
          <Button 
            icon={<Scale2Icon size={22}  />}
            iconPosition="left"
            size="medium"
            label="Jump to Settlement Statement"
          />

          <Button 
            icon={<BriefcaseIcon size={22}  />}
            iconPosition="left"
            size="medium"
            label="Settlement Accepted"
          />

          <Button 
            icon={<Scale2Icon size={22}  />}
            iconPosition="left"
            size="medium"
            label="Jump to Lien Sheet"
          />

          <Button 
            icon={<MedicalIcon size={22}  />}
            iconPosition="left"
            size="medium"
            label="Request Lien Sheet"
          />

          <Spacer horizontal={true} customSize={20} />

          <SearchBox
            placeholder="Search by Case Number"
            onChange={() => {}}
            type="primary"
            filterType='settlementNegotiations'
          />
        </Wrapper>
      )}

      {type === 'settlementStatement' && (
        <>
          <Wrapper type="row">
            <Button 
              icon={<Scale2Icon size={22}  />}
              iconPosition="left"
              size="medium"
              label="Jump to Lien Sheet"
            />

            <Button 
              icon={<BriefcaseIcon size={22}  />}
              iconPosition="left"
              size="medium"
              label="Request Lien Sheet"
            />

            <Button 
              icon={<MedicalIcon size={22}  />}
              iconPosition="left"
              size="medium"
              label="Jump to MedPay"
            />
          </Wrapper>

          <Wrapper type="row" style={{ gap: 16, alignItems: 'center' }}> 
          <Typography variant="title18" color="var(--primary-color)">{clientNamePhone?.[0]}</Typography>

          <Wrapper type="row" style={{ gap: 10, alignItems: 'center' }}> 
            <PhoneIcon size={20} color="var(--middle-grey)" />
            <Typography variant="title18" color="var(--primary-color)">{clientNamePhone?.[1]}</Typography>
          </Wrapper>
          </Wrapper>
        </>
      )}

      {type === 'clientDashboard' && (
        <Wrapper type="row" style={{ gap: 30 }}>
          
          {teams?.map((team) => (
            <Checkbox
              key={team}
              label={team}
              onChange={() => {}}
            />
          ))}

          <SearchBox
            placeholder="Search by Case Number"
            onChange={() => {}}
            type="primary"
            filterType='clientDashboard'
          />

        </Wrapper>
       )}
      
      {type !== 'settlementStatement' && !rightButtonLabel && (
        <div style={styles.close} onClick={onClose}>
          <CloseIcon size={20} color="var(--middle-grey)" hoverColor="var(--secondary-color-hover)" />
        </div>
      )}
      {rightButtonLabel && (
        <Button
          primary
          size="medium"
          label={rightButtonLabel}
          icon={buttonIcon}
          customSize="auto"
        />
      )}
    </div>
  );
};
