'use client';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
} from '@firebase/auth';
import { NextPage } from 'next';
import React, { useState } from 'react';

import { auth } from '@/firebase/config';

const RegisterPage: NextPage = () => {
  const [email, setEmail] = useState<string>(' ');
  const [password, setPassword] = useState<string>(' ');
  const [confirmPassword, setConfirmPassword] = useState<string>(' ');

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
        // const user = await userCredential.user;
        // const token: string = await userCredential.user.getIdToken();
        // const res = await fetch('http://localhost:3000/api/v1/users', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     Authorization: token,
        //   },
        //   body: JSON.stringify({
        //     email: user.email,
        //     username: user.email,
        //     displayname: user.email,
        //     firebaseId: user.uid,
        //   }),
        // });
        // if (res.status === 200) {
        //   console.log('User saved');
        // } else {
        //   // If for some reason the user is created in firebase but not in the database, delete the user from firebase
        //   console.log('User not saved');
        //   await user.delete();
        // }
      }
    );
  }

  /**
   * Register with Google
   */
  async function registerWithGoogle() {
    const provider = new GoogleAuthProvider();

    await signInWithRedirect(auth, provider);
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
            <button
              className={'button--provider'}
              onClick={() => registerWithGoogle()}
            >
              Register with Google
            </button>
            <button className={'button--provider'} onClick={() => register()}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
