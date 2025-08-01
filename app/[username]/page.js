
import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { use } from 'react';  // Import use hook
import connectDB from '@/db/connectDB';
import User from '@/models/User';
import { notFound } from 'next/navigation';

const Username = async ({ username }) => {

  //if th username is not present in the database, show a 404 page
  await connectDB()
  let u = await User.findOne({ username: username })
  if (!u) {
    return notFound()
  }
  return (
    <>
      <PaymentPage username={username} />
    </>
  );
};

export default Username;

export async function generateMetadata({ params }) {
  const { username } = await params;
  return {
    title: username + " - Get Me A Chai",
    description: username + "s payment page on Get Me A Chai. Make a payment to support their work or send a message.",
  }
}