'use client';
import { User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';

import { AuthContext } from '@/context/AuthUserContext';
import { auth } from '@/firebase/config';
import UserService from '@/services/UserService';

export const AuthProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log('target');
    setLoading(true);
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        setAuthUser(null);
        setLoading(false);
        return;
      }

      setAuthUser(user);
      if (UserService.getUser() === null) {
        UserService.setUser(user);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user: authUser, loading: loading }}>
      {' '}
      {children}
    </AuthContext.Provider>
  );
};
