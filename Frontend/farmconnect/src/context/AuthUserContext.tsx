'use client';
import { User } from 'firebase/auth';
import React from 'react';

export const AuthContext = React.createContext<{
  user: User | null;
  loading: boolean;
}>({ user: null, loading: true });
