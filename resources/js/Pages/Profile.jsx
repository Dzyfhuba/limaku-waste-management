import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/inertia-react';
import NavBar from '@/Containers/NavBar';
import Footer from '@/Containers/Footer';
import Guest from '@/Layouts/Guest';
import { useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Fancybox from '@/Components/Fancybox';
import Button from '@/Components/Button';
import ButtonAnchor from '@/Components/ButtonAnchor';
import ButtonMailto from '@/Components/ButtonMailTo';

export default function Profile(props) {
    const [profile, setProfile] = useState({ image: '/image/profile.png' });
    const [imageProfile, setImageProfile] = useState('/image/profile.png');
    const { data, setData, put, errors } = useForm();
    const [token, setToken] = useState(String);

    useEffect(() => {
        axios.get('/token').then((response) => setToken(response.data));
        axios.get('/profile/get').then((response) => {
            if (!response.data.profile.image) {
                response.data.profile.image = '/image/profile.png';
            }
            setProfile(response.data.profile);
            setImageProfile(response.data.profile.image);
        });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            _method: 'put',
            _token: token,
            image: event.target.querySelector('input').files[0],
        };

        if (data.image == undefined) {
            console.log('data image: undefined');
            return;
        }
        console.log(data);

        const formData = new FormData();
        formData.append('image', data.image);
        formData.append('_token', data._token);

        axios
            .post(`/profile/${props.auth.user.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRF-TOKEN': token,
                },
            })
            .then((response) => {
                swal('Success', response.data.message, 'success').then(() => {
                    const modalElement = document.querySelector('.modal');
                    modalElement
                        .querySelector('[data-bs-dismiss="modal"]')
                        .dispatchEvent(new Event('click'));
                    console.log(response.data.data);
                    setImageProfile(response.data.data);
                });
            });
    };

    return (
        <Guest>
            <Head title="Profile"></Head>
            <NavBar auth={props.auth}></NavBar>
            <main className="justify-start">
                <div className="w-full shadow-lg h-20 flex items-center justify-center">
                    <h1 className="text-6xl font-black dark:text-neutral-100">
                        Profile
                    </h1>
                </div>
                <div className="lg:flex flex-row justify-around p-5">
                    <div className="w-2/5 mx-auto lg:mb-0 mb-5">
                        <Fancybox>
                            <a data-fancybox="gallery" href={imageProfile}>
                                <img
                                    src={imageProfile}
                                    alt={props.auth.user.name}
                                    className={
                                        'aspect-square rounded-full max-h-80 shadow-lg object-cover bg-center'
                                    }
                                />
                            </a>
                        </Fancybox>
                    </div>
                    <div className="profile flex flex-col justify-evenly">
                        <h1 className="text-6xl font-black text-center dark:text-neutral-100">
                            {props.auth.user.name}
                        </h1>
                        <button
                            className="bg-neutral-700 text-neutral-100 border-2
                            dark:bg-neutral-100 dark:text-neutral-700
                            hover:bg-neutral-100 hover:text-neutral-700 hover:border-neutral-700
                            hover:dark:bg-neutral-700 hover:dark:text-neutral-100 hover:dark:border-neutral-100
                            py-2.5 px-5 rounded-full"
                            data-bs-toggle="modal"
                            data-bs-target="#editProfile"
                        >
                            Edit photo profile
                        </button>
                        <div
                            className="modal fade"
                            id="editProfile"
                            tabIndex="-1"
                            aria-labelledby="editProfileLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content dark:bg-neutral-700">
                                    <form
                                        onSubmit={handleSubmit}
                                        encType="multpart/form-data"
                                    >
                                        <div className="modal-header">
                                            <h5
                                                className="modal-title dark:text-neutral-100"
                                                id="editProfileLabel"
                                            >
                                                Edit Profile
                                            </h5>
                                            <button
                                                type="button"
                                                className="text-neutral-700 hover:text-neutral-400
                                                dark:text-neutral-100 dark:hover:text-neutral-400"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            >
                                                <span className="material-symbols-outlined">
                                                    close
                                                </span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <label className="h-96 flex justify-center items-center">
                                                <span className="sr-only">
                                                    Choose profile photo
                                                </span>
                                                <input
                                                    type="file"
                                                    className="block w-full text-sm text-slate-500
                                                file:mr-4 file:py-2 file:px-4
                                                file:h-full
                                                file:rounded-full file:border-0
                                                file:text-sm file:font-semibold
                                                file:bg-violet-50 file:text-violet-700
                                                hover:file:bg-violet-100
                                                "
                                                    name="image"
                                                    onChange={(e) =>
                                                        setData(
                                                            'image',
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </label>
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="bg-neutral-700 text-neutral-100 border-2
                                                dark:bg-neutral-100 dark:text-neutral-700
                                                hover:bg-neutral-100 hover:text-neutral-700 hover:border-neutral-700
                                                hover:dark:bg-neutral-700 hover:dark:text-neutral-100 hover:dark:border-neutral-100
                                                py-2.5 px-5 rounded-full"
                                                data-bs-dismiss="modal"
                                            >
                                                Close
                                            </button>
                                            <button
                                                type="submit"
                                                className="bg-neutral-700 text-neutral-100 border-2
                                                dark:bg-neutral-100 dark:text-neutral-700
                                                hover:bg-neutral-100 hover:text-neutral-700 hover:border-neutral-700
                                                hover:dark:bg-neutral-700 hover:dark:text-neutral-100 hover:dark:border-neutral-100
                                                py-2.5 px-5 rounded-full"
                                            >
                                                Save changes
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:mx-44 mx-5">
                    <ButtonAnchor className='w-full flex justify-between'
                    href={'/change-password'}
                    >
                        <span>Ubah Kata Sandi</span>
                        <span className="material-symbols-outlined">
                            lock_reset
                        </span>
                    </ButtonAnchor>
                    <ButtonMailto className='w-full flex justify-between'
                    mailto={'mailto:limaku5ku@gmail.com'}
                    >
                        <span>Pusat Bantuan</span>
                        <span className="material-symbols-outlined">
                            support_agent
                        </span>
                    </ButtonMailto>
                </div>
            </main>
            <Footer></Footer>
        </Guest>
    );
}
