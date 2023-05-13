'use client';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase/config';
const SignoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    auth.signOut();
    router.push('/');
  }, []);

  return null;
};

export default SignoutPage;
