import React from 'react';
import { Logo } from '../components/logo/Logo'
import { Input } from '../components/input/Inputs';
import { Button } from '../components/button/Button';
import { Typography } from '../components/typography/Typography';
import { Link } from '../components/link/Link';
import { PageWrapper } from '../components/wrapper/PageWrapper';

export interface AuthFormProps {
    type: 'signIn' | 'signUp' | 'resetPass' | 'checkEmail' ;
    title: string;
    subtitle: string;
    onSubmit: (e: React.FormEvent) => void;
    email: string;
    password: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    error?: string;
}

const style = {
    formWrapper: (type: 'signIn' | 'signUp' | 'resetPass' | 'checkEmail') => ({
        display: 'flex' as const,
        flexDirection: 'column' as const,
        width: '725px',
        height: type === 'resetPass' || type === 'checkEmail' ? '480px' : '542px',
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
    subtitle,
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
                        inputType="email"
                        label="Username"
                        value={email}
                        error={error && email === ''}
                        placeholder="Username"
                        size='large'
                        name="email"
                        onChange={onChange}
                    />

                    <Input
                        inputType="password"
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
                        inputType="email"
                        label="Username"
                        value={email}
                        error={error && email === ''}
                        placeholder="Username"
                        size='large'
                        name="email"
                        onChange={onChange}
                    />

                    <Input
                        inputType="password"
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
                    inputType="email"
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

        {type === 'checkEmail' && (        
            <div style={style.formLogoWrapper} >
                <Logo style={{ paddingBottom: '80px' }} />

                <form style={style.formWrapper(type)} onSubmit={onSubmit}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography 
                            variant="title"
                        >
                            { title }
                        </Typography>

                        <Typography variant='subtitle'>
                            { subtitle }
                        </Typography>
                        
                    </div>
                        
                    <svg style={{ marginTop: '-20px' }} width="140" height="140" viewBox="0 0 127 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.5248 99.407L110.45 62.9931L25.5248 26.5791L25.4844 54.9011L86.1743 62.9931L25.4844 71.0851L25.5248 99.407Z" fill="#3338C1"/>
                    </svg>

                    <div style={{ marginTop: '-20px' }}>
                        <Link
                            href=''
                            text="Did not got a link? Send Again"
                            variant='SignUp'
                        />
                    </div>

                </form>
            </div>
        )}

    </PageWrapper>
  );
};
