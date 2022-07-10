import Button from '@/Components/Button';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import NavBar from '@/Containers/NavBar';
import Guest from '@/Layouts/Guest';
import { Head } from '@inertiajs/inertia-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';

export default function ChangePassword(props) {
    const [current, setCurrent] = useState(String);
    const [newPassword, setNewPassword] = useState(String);
    const [confirmNewPassword, setConfirmNewPassword] = useState(String);
    const [token, setToken] = useState(String);
    const [same, setSame] = useState(true);

    useEffect(() => {
        axios.get('/token').then(response => setToken(response.data))
    }, []);

    const isSame = (current, confirm) => {
        return current === confirm;
    }

    const handleChangeCurrent = (event) => {
        setCurrent(event.target.value)
    };
    const handleChangeNewPassword = (event) => {
        setNewPassword(event.target.value)
        console.log('is same? ', isSame(event.target.value, confirmNewPassword));
        setSame(isSame(event.target.value, confirmNewPassword));
    };
    const handleChangeConfirmNewPassword = (event) => {
        setConfirmNewPassword(event.target.value)
        console.log('is same? ', isSame(event.target.value, newPassword));
        setSame(isSame(event.target.value, newPassword));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            _token: token,
            old_password: current,
            new_password: newPassword,
            new_password_confirmation: confirmNewPassword
        };

        if(!same) {
            swal('Error', 'Input field must be the same', 'error');
            return;
        }

        axios.post('/change-password', data).then(response => {
            if (response.data.error) {
                swal('Error', response.data.message, response.data.status)
                .then(() => {
                    setCurrent('')
                    setNewPassword('')
                    setConfirmNewPassword('')
                })
            } else {
                swal('Success', response.data.message, response.data.status)
                .then(() => window.history.back());
            }
        })
    }

    return (
        <Guest>
            <Head title="Change Password"></Head>
            <NavBar auth={props.auth}></NavBar>
            <main>
                <div className={'p-5 shadow-lg rounded-lg bg-neutral-50 flex justify-center mx-auto'}>
                <form onSubmit={handleSubmit}>
                    <Label forInput={'current'}>Current Password</Label>
                    <Input type='password' handleChange={handleChangeCurrent}
                    isFocused={true}
                    name={'current'}
                    required={true}
                    ></Input>
                    <Label forInput={'newPassword'}>New Password Password</Label>
                    <Input type='password' handleChange={handleChangeNewPassword}
                    name={'newPassword'}
                    required={true}
                    ></Input>
                    <Label forInput={'confirmNewPassword'}>New Password Password</Label>
                    <small className={`block text-red-600${same ? ' invisible' : ''}`}>Password is not same</small>
                    <Input type='password' handleChange={handleChangeConfirmNewPassword}
                    name={'confirmNewPassword'}
                    required={true}
                    ></Input>
                    <Button type='submit'>Change Password</Button>
                </form>
                </div>
            </main>
        </Guest>
    );
}
