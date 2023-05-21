'use client';
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from '@firebase/auth';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import googleLogo from '../../../public/logos/Google_-G-_Logo.svg.png';

import { auth } from '@/firebase/config';

const LoginPage: NextPage = () => {
  const emailRef = React.createRef<HTMLInputElement>();
  const passwordRef = React.createRef<HTMLInputElement>();

  const router = useRouter();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('User is logged in');
        router.push('/');
      } else {
        console.log('User is logged out');
      }
    });
  }, []);

  /**
   * Login with google
   * @return {Promise<void>}
   */
  async function loginWithGoogle() {
    console.log('login with google');
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  }

  /**
   * Login with email and password
   * @return {Promise<void>}
   */
  async function loginWithEmail() {
    if (!emailRef.current?.value || !passwordRef.current?.value) {
      console.log('Email or password is empty');
      return;
    }
    signInWithEmailAndPassword(
      auth,
      emailRef.current?.value,
      passwordRef.current?.value
    );
  }

  return (
    <div className={'content-container'}>
      <div className={'auth--container-center'}>
        <div className={'form card'}>
          <h1>Login</h1>
          <form>
            <div className={'form__group field'}>
              <label className={'form__label'}>Email</label>
              <input type={'email'} placeholder={'Email'} ref={emailRef} />
            </div>
            <div className={'form__group field'}>
              <label className={'form__label'}>Password</label>
              <input
                type={'password'}
                placeholder={'Password'}
                ref={passwordRef}
              />
            </div>
            <button
              className={'button--provider'}
              onClick={() => loginWithEmail()}
            >
              Login with email
            </button>
            <button
              className={'button--provider'}
              onClick={() => loginWithGoogle()}
            >
              Login with Google{' '}
              <Image
                src={googleLogo}
                width={20}
                height={20}
                alt={'Google logo'}
                className={'button__logo-provider'}
                loading="eager"
                priority={false}
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
