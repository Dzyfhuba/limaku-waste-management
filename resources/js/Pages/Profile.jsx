import React, { useState } from 'react';
import { Head } from '@inertiajs/inertia-react';
import NavBar from '@/Containers/NavBar';
import ButtonAnchor from '@/Components/ButtonAnchor';
import Footer from '@/Containers/Footer';
import Guest from '@/Layouts/Guest';
import Button from '@/Components/Button';
import { useEffect } from 'react';
import axios from 'axios';

export default function Profile(props) {
    const [profile, setProfile] = useState({image: '/image/profile.png'});
    const [imageProfile, setImageProfile] = useState('/image/profile.png');

    useEffect(() => {
        axios.get('/profile/get').then(response => {
            if(!response.data.profile.image) {
                response.data.profile.image = '/image/profile.png';
            }
            setProfile(response.data.profile);
            setImageProfile(response.data.profile.image)
        });
    }, []);
    console.log(imageProfile);

    return (
        <Guest>
            <Head title='Dashboard'></Head>
            <NavBar auth={props.auth}></NavBar>
            <main className='justify-start'>
                <div className='w-full shadow-lg h-20 flex items-center justify-center'>
                    <h1 className='text-6xl font-black'>Profile</h1>
                </div>
                <div className="flex flex-row justify-around p-5">
                    <div className='w-2/5'>
                        <div className={`aspect-square rounded-full shadow-lg bg-[url("${imageProfile}")] bg-cover bg-center`}></div>
                    </div>
                    <div className="profile flex flex-col justify-evenly">
                        <h1 className='text-6xl font-black text-center'>
                            {props.auth.user.name}
                        </h1>
                        <Button>
                            Edit photo profile
                        </Button>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </Guest>
    );
}
