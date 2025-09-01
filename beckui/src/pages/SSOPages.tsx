import React from 'react';
import { Logo } from '../components/logo/Logo'
import { Input } from '../components/input/Inputs';
import { Button } from '../components/button/Button';
import { Typography } from '../components/typography/Typography';
import { Link } from '../components/link/Link';
import { PageWrapper } from '../components/wrapper/PageWrapper';

export interface AuthFormProps {
    type: 'signIn' | 'signUp' | 'resetPass';
    title: string;
    onSubmit: (e: React.FormEvent) => void;
    email: string;
    password: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const style = {
    formWrapper: (type: 'signIn' | 'signUp' | 'resetPass') => ({
        display: 'flex' as const,
        flexDirection: 'column' as const,
        width: '725px',
        height: type === 'resetPass' ? '480px' : '542px',
        alignItems: 'center' as const,
        borderRadius: '15px',
        background: 'var(--white)',
        justifyContent: 'space-evenly',
    }),

    formLogoWrapper: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
    },  
}

export const AuthForm: React.FC<AuthFormProps> = ({
    type,
    title,
    onSubmit,
    email,
    password,
    onChange,
    error
}) => {
  return (

    <PageWrapper background='darkBlue'>
         {type === "signIn" && (
            <div style={style.formLogoWrapper} >
                <Logo style={{ paddingBottom: '80px' }} />

                <form style={style.formWrapper(type)} onSubmit={onSubmit}>

                <Typography 
                    variant="title"
                >
                    { title }
                </Typography>

                <Input
                    type="email"
                    label="Username"
                    value={email}
                    error={error && email === ''}
                    placeholder="Username"
                    size='large'
                    name="email"
                    onChange={onChange}
                />

                <Input
                    type="password"
                    label="Password"
                    value={password}
                    error={error && password === ''}
                    placeholder="Enter your password"
                    size='large'
                    name="password"
                    onChange={onChange}
                />

                <Button type="submit" primary label="Sign In" />

                    <Link
                    href=''
                    text="Don't have an Account? Sign Up"
                    variant='SignUp'
                    />

                </form>
            </div>
        )}

    {type === 'signUp' && (
        <div style={style.formLogoWrapper} >
            <Logo style={{ paddingBottom: '80px' }} />

            <form style={style.formWrapper(type)} onSubmit={onSubmit}>

            <Typography 
                variant="title"
            >
                { title }
            </Typography>

            <Input
                type="email"
                label="Username"
                value={email}
                error={error && email === ''}
                placeholder="Username"
                size='large'
                name="email"
                onChange={onChange}
            />

            <Input
                type="password"
                label="Password"
                value={password}
                error={error && password === ''}
                placeholder="Enter your password"
                size='large'
                name="password"
                onChange={onChange}
                showForgotPassword={false}
            />

            <Button type="submit" primary label="Sign Up" />

                <Link
                href=''
                text="Already have an Account? Sign In"
                variant='SignUp'
                />

            </form>
        </div>
    )}

    {type === 'resetPass' && (        
        <div style={style.formLogoWrapper} >
            <Logo style={{ paddingBottom: '80px' }} />

            <form style={style.formWrapper(type)} onSubmit={onSubmit}>

            <Typography 
                variant="title"
            >
                { title }
            </Typography>

            <Input
                type="email"
                label="Username"
                value={email}
                error={error && email === ''}
                placeholder="Username"
                size='large'
                name="email"
                onChange={onChange}
            />

            <Button type="submit" primary label="Reset Password" />

                <div style={{ marginTop: '-20px' }}>
                    <Link
                        href=''
                        text="Back to Sign In"
                        variant='SignUp'
                    />
                </div>

            </form>
        </div>
    )}

    </PageWrapper>
  );
};
