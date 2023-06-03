'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { auth } from '@/firebase/config';

const SignOutPage = () => {
  const router = useRouter();

  useEffect(() => {
    auth.signOut();
    router.push('/');
  }, []);

  return null;
};

export default SignOutPage;
