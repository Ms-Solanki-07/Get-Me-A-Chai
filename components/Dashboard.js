"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { fetchUser, updateProfile } from '@/actions/useractions'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';

const Dashboard = () => {
    const [form, setForm] = useState({})

    const { data: session, update, status } = useSession()
    const router = useRouter()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        console.log(session)
        if (!session) {
            router.push('/login')
        }
        else {
            getData()
        }
    }, [status, router])


    const getData = async () => {
        let u = await fetchUser(session.user.username)
        if (!u) {
            console.error("User not found");
            return;
        }
        setForm(u)
    }

    const handleSubmit = async (e) => {
        let a = await updateProfile(e, session.user.username)
        toast('Profile updated', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    if (status === 'loading') {
        return <>
            <div role="status" className="max-w-sm mx-auto w-full my-20 p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <div className="flex items-center mt-4">
                    <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
        </>
    }

    return (<>

        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark" />

        <div className='container mx-auto text-white w-[70vw] mb-10'>
            <h2 className='text-2xl font-bold text-center p-6'>Welcome to your Dashboard</h2>

            <form action={handleSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input onChange={handleChange} value={form.name ? form.name : ""} name='name' type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                    </div>
                    <div>
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input onChange={handleChange} value={form.username ? form.username : ""} name='username' type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="johndoe01" required />
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                    <input onChange={handleChange} value={form.email ? form.email : ""} name='email' type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@xyz.com" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="profilePicture" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Picture</label>
                    <input onChange={handleChange} value={form.profilePicture ? form.profilePicture : ""} name='profilePicture' type="text" id="profilePicture" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                </div>
                <div className="mb-6">
                    <label htmlFor="coverPicture" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cover Picture</label>
                    <input onChange={handleChange} value={form.coverPicture ? form.coverPicture : ""} name='coverPicture' type="text" id="coverPicture" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                </div>
                <div className="mb-6">
                    <label htmlFor="razorPayId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">RazarPay Id</label>
                    <input onChange={handleChange} value={form.razorPayId ? form.razorPayId : ""} name='razorPayId' type="text" id="razorPayId" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                </div>
                <div className="mb-6">
                    <label htmlFor="razorPaySecret" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">RazarPay Secret</label>
                    <input onChange={handleChange} value={form.razorPaySecret ? form.razorPaySecret : ""} name='razorPaySecret' type="text" id="razorPaySecret" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    </>
    )
}

export default Dashboard
