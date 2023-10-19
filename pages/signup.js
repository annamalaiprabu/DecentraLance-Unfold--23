import Link from 'next/link';
import React from 'react';

const signup = () => {
  return (
    <div className="flex justify-between items-center p-24 min-h-screen">
      <Link href="/client/onboarding">
        <p>Continue as Client</p>
      </Link>
      <Link href="/freelancer/onboarding">
        <p>Continue as Freelancer</p>
      </Link>
    </div>
  );
};

export default signup;
