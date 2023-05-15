'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
