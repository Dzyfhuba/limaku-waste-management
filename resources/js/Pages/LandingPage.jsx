import React, { useState } from 'react';
import Guest from '@/Layouts/Guest';
import { Head, Link } from '@inertiajs/inertia-react';
import ButtonAnchor from '@/Components/ButtonAnchor';
import NavBar from '@/Containers/NavBar';
import Footer from '@/Containers/Footer';
import PickupWaste from '@/Containers/PickupWaste';
import DropoffWaste from '@/Containers/DropoffWaste';
import { useEffect } from 'react';
import axios from 'axios';

export default function LandingPage(props) {
    const [auth, setAuth] = useState(Boolean);
    const [verified, setVerified] = useState(Boolean);

    useEffect(() => {
        axios.get('/auth/check').then(response => {
            setAuth(response.data)
            if (response.data) {
                axios.get('/isverified').then(response => setVerified(response.data));
            }
        });
    },[])

    console.log('auth: ', auth);
    console.log('verified?: ', verified);

    const handleHideVerification = (event) => {
        console.log(event.target.parentNode.parentNode.parentNode)
        event.target.parentNode.parentNode.parentNode.classList.add('invisible');

        setTimeout(() => {
            event.target.parentNode.parentNode.parentNode.classList.remove('invisible');
        }, 5 * 1000 * 60);
    };

    const mustVerify = verified ? '' : (
        <div className="fixed top-[60px] p-3 bg-red-400 border-5 border-red-700 rounded-xl w-full opacity-70
        flex justify-between animate-fadeIn">
            <p className={'opacity-100'}>Your email is not verified yet.{' '}
                <Link href={'/verify-email'}
                className={'text-blue-600 underline'}
                >
                    Verification it now.
                </Link>
            </p>
            <button onClick={handleHideVerification} className={'flex align-middle'}>
                <span className="material-symbols-outlined">
                    close
                </span>
            </button>
        </div>
    );


    return (
        <Guest>
            <Head title='Dashboard'></Head>
            <NavBar auth={props.auth}></NavBar>
            {
                auth ? mustVerify : ''
            }
            <main>
                <article className="jumbotron">
                    <div className="container">
                        <h1 className="font-black text-5xl dark:text-neutral-100">
                            <div className="">
                                <span>Selamat Datang</span>
                            </div>
                            <div className="">
                                <span>Di Limaku</span>
                            </div>
                        </h1>
                        <ButtonAnchor href={auth ? '/#pickup' : '/login'} className={'dark:bg-white dark:text-black'}>
                            Let`s Get Started
                        </ButtonAnchor>
                    </div>
                </article>
                { auth ?
                (<><PickupWaste></PickupWaste><DropoffWaste></DropoffWaste></>)
                : ''
                }
            </main>
            <Footer></Footer>
        </Guest>
    );
}
