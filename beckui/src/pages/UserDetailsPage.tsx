import React, { useState } from 'react';
import { Header } from '../components/header/Header';
import { Navigation } from '../components/navigation/Navigation';
import { BaseDropdown } from '../components/dropdown/Dropdown';
import { Input } from '../components/input/Inputs';
import { Checkbox } from '../components/checkbox/Checkbox';
import { PageActions } from '../components/page-actions/PageActions';
import { Wrapper } from '../components/wrapper/PageWrapper';
import { Spacer } from '../components/spacer/Spacer';
import { Typography } from '../components/typography/Typography';

type TeamAccess = {
  intake: boolean;
  medical: boolean;
  litigation: boolean;
  settlement: boolean;
};

export type UserDetailsPageProps = {
  users?: { label: string }[];
  roles?: { label: string }[];
  noBorder?: boolean;

  defaultUser?: string;
  defaultRole?: string;
  defaultFirstLast?: string;
  defaultEmail?: string;
  defaultPassword?: string;
  defaultStillWorking?: boolean;
  defaultTeamFiles?: Partial<TeamAccess>;

  pageActionsState?: 'saved' | 'edit' | 'adding';

  onSave?: (data: {
    user: string;
    role: string;
    firstLast: string;
    email: string;
    stillWorking: boolean;
    teamFiles: TeamAccess;
  }) => void;
  onCancel?: () => void;

  style?: React.CSSProperties;
};

const L = {
  sectionTitle: {
    color: 'var(--middle-grey)',
    fontSize: 16,
    fontWeight: 500,
    marginTop: 18,
    marginBottom: 20,
  } as React.CSSProperties,

  grid: {
    display: 'grid',
    gridTemplateColumns: '0fr 0fr',
    gap: 44,
  } as React.CSSProperties,

  row: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginTop: 8,
    marginBottom: 8,
  } as React.CSSProperties,

  actions: {
    display: 'flex',
    gap: 12,
    marginTop: 32,
    justifyContent: 'flex-start',
  } as React.CSSProperties,
};

export const UserDetailsPage: React.FC<UserDetailsPageProps> = ({
  users = [{ label: 'Cooper Jane' }, { label: 'John Smith' }, { label: 'Maria Garcia' }],
  roles = [{ label: 'Admin' }, { label: 'Paralegal' }, { label: 'Attorney' }],

  noBorder = false,
  defaultUser,
  defaultRole,
  defaultFirstLast = '',
  defaultEmail = '',
  defaultPassword = '',
  defaultStillWorking = false,
  defaultTeamFiles = {},
  pageActionsState = 'saved',
  onSave,
  onCancel,
}) => {
  const [selectedUser, setSelectedUser] = useState<string>(defaultUser ?? 'Select User');  
  const [selectedRole, setSelectedRole] = useState<string>(defaultRole ?? 'Select User Role');
  const [firstLast, setFirstLast] = useState(defaultFirstLast);
  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState(defaultPassword);
  const [stillWorking, setStillWorking] = useState(!!defaultStillWorking);

  const [teamFiles, setTeamFiles] = useState<TeamAccess>({
    intake: !!defaultTeamFiles.intake,
    medical: !!defaultTeamFiles.medical,
    litigation: !!defaultTeamFiles.litigation,
    settlement: !!defaultTeamFiles.settlement,
  });

  const toggleFile = (key: keyof TeamAccess, next: boolean) =>
    setTeamFiles((p) => ({ ...p, [key]: next }));

  const selectAll = (next: boolean) =>
    setTeamFiles({ intake: next, medical: next, litigation: next, settlement: next });

  return (
    <Wrapper type="pageWrapper">
      <Navigation
        userEmail="ivankordonets@gmail.com"
        dropdownMenuItems={[{ label: 'Profile' }, { label: 'Settings' }, { label: 'Sign out' }]}
      />

      <Wrapper type="mainWrapper">
        <Header
          section="User Details"
          current={selectedUser ?? ''}
          subtitle="Here you can manage internal user"
          onClose={() => onCancel?.()}
        />

        <Spacer customSize={30} />

        <Wrapper type="contentWrapper" style={{ gap: 26 }}>
          <Wrapper type="column">
              <Typography variant="leftLabel" style={{textAlign: 'left'}}>User Information</Typography>

              <Wrapper type="row" style={{ gap: 44}}>
                <BaseDropdown
                  label="User"
                  disabled={noBorder}
                  type="BaseDropdown"
                  state={selectedUser === 'Select User' ? 'default' : 'selected'}
                  value={selectedUser}
                  menuItems={users}
                  onSelect={(label) => setSelectedUser(label)}
                  width="238px"
                />

                <BaseDropdown
                  label="User Role"
                  disabled={noBorder}
                  type="BaseDropdown"
                  state={selectedRole === 'Select User Role' ? 'default' : 'selected'}            
                  value={selectedRole}
                  menuItems={roles}
                  onSelect={(label) => setSelectedRole(label)}
                />
            </Wrapper>
          </Wrapper>

          <Wrapper type="row" style={{ gap: 44 }}>
            <Input
              label="First Last Name"
              placeholder="First Last Name" 
              value={firstLast} 
              onChange={(e) => setFirstLast(e.target.value)}
              disabled={pageActionsState === 'saved'}
            />

            <Checkbox
              label="Still Working Here"
              checked={stillWorking}
              onChange={setStillWorking}
              disabled={pageActionsState === 'saved'}
              style={{ paddingTop: 26 }}
            />
          </Wrapper>

          <Wrapper type="row" style={{ gap: 44 }}> 
            <Input 
              label="Email"
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              disabled={pageActionsState === 'saved'}
            />

            <Input
              label="Password"
              inputType="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={pageActionsState === 'saved'}
            />
          </Wrapper>

          <Spacer customSize={30} />
          <Typography variant="leftLabel" style={{textAlign: 'left', marginBottom: 20}}>Access to Team Files</Typography>

          <Wrapper type="row" style={{ flexWrap: 'wrap', gap: 28 }}>
            <Checkbox
              label="Intake & Case Review"
              checked={teamFiles.intake}
              onChange={(n) => toggleFile('intake', n)}
              disabled={pageActionsState === 'saved'}
            />
            <Checkbox
              label="Medical Records & Liens"
              checked={teamFiles.medical}
              onChange={(n) => toggleFile('medical', n)}
              disabled={pageActionsState === 'saved'}
            />
            <Checkbox
              label="Litigation Support"
              checked={teamFiles.litigation}
              onChange={(n) => toggleFile('litigation', n)}
              disabled={pageActionsState === 'saved'}
            />
            <Checkbox
              label="Settlement & Negotiations"
              checked={teamFiles.settlement}
              onChange={(n) => toggleFile('settlement', n)}
              disabled={pageActionsState === 'saved'}
            />
          </Wrapper>

          <Wrapper type="row" style={{ marginTop: 12 }}>
            <Checkbox
              label="Select All"
              checked={Object.values(teamFiles).every(Boolean)}
              onChange={selectAll}
              disabled={pageActionsState === 'saved'}
            />
          </Wrapper>

          <Spacer customSize={20} />

          <PageActions
            state={pageActionsState}
            type={'button'}
            onSave={() => {
              onSave?.({
                user: selectedUser,
                role: selectedRole,
                firstLast,
                email,
                stillWorking,
                teamFiles,
              });
            }}
            onCancel={onCancel}
            onEdit={() => console.log('Edit user')}
            onRemove={() => console.log('Remove user')}
          />

        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
