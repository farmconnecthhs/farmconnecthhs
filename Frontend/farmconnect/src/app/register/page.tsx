'use client';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from '@firebase/auth';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import googleLogo from '../../../public/logos/Google_-G-_Logo.svg.png';

import { auth } from '@/firebase/config';

const RegisterPage: NextPage = () => {
  const [email, setEmail] = useState<string>(' ');
  const [password, setPassword] = useState<string>(' ');
  const [confirmPassword, setConfirmPassword] = useState<string>(' ');
  const router = useRouter();
  // getRedirectResult(auth)
  //   .then((result) => {
  //     if (result) {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential?.accessToken;
  //       console.log(token);
  //       // ...
  //     }
  //     // The signed-in user info.
  //     const user = result?.user;
  //     console.log(user);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  /**
   * Register with email and password
   */
  async function register() {
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }
    await createUserWithEmailAndPassword(auth, email, password).then(
      async (userCredential) => {
        // TODO dit moet naar de backend
        await registerToDatabase(userCredential);
      }
    );
  }

  /**
   * Register to the database
   * @param {UserCredential} userCredential
   */
  async function registerToDatabase(userCredential: UserCredential) {
    const user = await userCredential.user;
    const token: string = await userCredential.user.getIdToken();
    const res = await fetch('http://localhost:3001/api/v1/users', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        email_address: user.email,
        user_name: user.email,
        displayname: user.email,
        firebaseId: user.uid,
      }),
    });
    if (res.status === 200) {
      console.log('User saved');
      return res.json();
    } else {
      // If for some reason the user is created in firebase but not in the database, delete the user from firebase
      console.log('User not saved');
      return null;
    }
  }

  /**
   * Register with Google
   */
  async function registerWithGoogle() {
    await signInWithPopup(auth, new GoogleAuthProvider())
      .then(async (result) => {
        const dbUser = await registerToDatabase(result);
        if (!dbUser) {
          console.log('User not saved');
          result.user?.delete();
          return;
        }
        router.push('/');
        // The signed-in user info.
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className={'content-container'}>
      <div className={'auth--container-center'}>
        <div className={'form card'}>
          <h1>Register</h1>
          <div className={'form__group'}>
            <label className={'form__label'}>Email</label>
            <input
              type={'text'}
              placeholder={'Email'}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={'form__group'}>
            <label className={'form__label'}>Password</label>
            <input
              type={'password'}
              placeholder={'Password'}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className={'form__group'}>
            <label className={'form__label'}>Confirm password</label>
            <input
              type={'password'}
              placeholder={'Confirm Password'}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
          <div className={'col'}>
            <button className={'button--provider'} onClick={() => register()}>
              Register
            </button>
            <button
              className={'button--provider'}
              onClick={() => registerWithGoogle()}
            >
              Register with Google{' '}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
