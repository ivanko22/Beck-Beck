import React, { useState } from 'react';
import { Header } from '../components/header/Header';
import { Navigation } from '../components/navigation/Navigation';
import { BaseDropdown } from '../components/dropdown/Dropdown';
import { Input } from '../components/input/Inputs';
import { Checkbox } from '../components/checkbox/Checkbox';
import { PageActions } from '../components/page-actions/PageActions';

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

  saved?: boolean;

  defaultUser?: string;
  defaultRole?: string;
  defaultFirstLast?: string;
  defaultEmail?: string;
  defaultPassword?: string;
  defaultStillWorking?: boolean;
  defaultTeamFiles?: Partial<TeamAccess>;

  disabledButton?: boolean;

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
  shell: {
    display: 'block',
    fontFamily: 'var(--font-family-base)',
    color: 'var(--primary-color)',
    height: '100vh',
    background: '#fff',
  } as React.CSSProperties,

  main: {
    display: 'flex',
    width: 'calc(100vw - 300px)',
    height: '100vh',
    flexDirection: 'column',
    padding: '28px 32px',
    marginLeft: 300,
    flex: 1,
    minWidth: 0,
    boxSizing: 'border-box',
    overflow: 'auto',
  } as React.CSSProperties,

  sectionTitle: {
    color: 'var(--middle-grey)',
    fontSize: 16,
    fontWeight: 500,
    marginTop: 32,
    marginBottom: 32,
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
  saved = false,
  defaultUser,
  defaultRole,
  defaultFirstLast = '',
  defaultEmail = '',
  defaultPassword = '',
  defaultStillWorking = false,
  defaultTeamFiles = {},
  disabledButton,

  onSave,
  onCancel,
  style,
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
    <div style={{ ...L.shell, ...style }}>
      <Navigation
        userEmail="ivankordonets@gmail.com"
        dropdownMenuItems={[{ label: 'Profile' }, { label: 'Settings' }, { label: 'Sign out' }]}
      />

      <div style={L.main}>
        <Header
          section="User Details"
          current={selectedUser ?? ''}
          subtitle="Here you can manage internal user"
          onClose={() => onCancel?.()}
        />

        <div style={L.sectionTitle}>User Information</div>

        <div style={L.grid}>
          <BaseDropdown
            label="User"
            noBorder={noBorder}
            disabled={noBorder}
            type="BaseDropdown"
            state={selectedUser === 'Select User' ? 'default' : 'selected'}
            value={selectedUser}
            menuItems={users}
            onSelect={(label) => setSelectedUser(label)}
          />

          <BaseDropdown
            label="User Role"
            noBorder={noBorder}
            disabled={noBorder}
            type="BaseDropdown"
            state={selectedRole === 'Select User Role' ? 'default' : 'selected'}            
            value={selectedRole}
            menuItems={roles}
            onSelect={(label) => setSelectedRole(label)}
          />

          <Input
            label="First Last Name"
            placeholder="First Last Name" 
            value={firstLast} 
            onChange={(e) => setFirstLast(e.target.value)}
            noBorder={saved}
          />

          <div style={L.row}>
            <Checkbox
              label="Still Working Here"
              checked={stillWorking}
              onChange={setStillWorking}
              disabled={saved}
            />
          </div>

          <Input 
            label="Email"
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            noBorder={saved}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            noBorder={saved}
          />
        </div>

        <div style={L.sectionTitle}>Access to Team Files</div>

        <div style={{ ...L.row, flexWrap: 'wrap', gap: 28 }}>
          <Checkbox
            label="Intake & Case Review"
            checked={teamFiles.intake}
            onChange={(n) => toggleFile('intake', n)}
            disabled={saved}
          />
          <Checkbox
            label="Medical Records & Liens"
            checked={teamFiles.medical}
            onChange={(n) => toggleFile('medical', n)}
            disabled={saved}
          />
          <Checkbox
            label="Litigation Support"
            checked={teamFiles.litigation}
            onChange={(n) => toggleFile('litigation', n)}
            disabled={saved}
          />
          <Checkbox
            label="Settlement & Negotiations"
            checked={teamFiles.settlement}
            onChange={(n) => toggleFile('settlement', n)}
            disabled={saved}
          />
        </div>

        <div style={{ ...L.row, marginTop: 12 }}>
          <Checkbox
            label="Select All"
            checked={Object.values(teamFiles).every(Boolean)}
            onChange={selectAll}
            disabled={saved}
          />
        </div>

        <PageActions
          saved={saved}
          disabledButton={disabledButton}
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
      </div>
    </div>
  );
};
