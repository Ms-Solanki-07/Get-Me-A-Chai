
import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { use } from 'react';  // Import use hook

const Username = async ({ params }) => {
  const { username } = await params;  // Await params

  return (
    <>
      <PaymentPage username={username} />
    </>
  );
};

export default Username;

