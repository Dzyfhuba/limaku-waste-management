import Button from '@/Components/Button';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import NavBar from '@/Containers/NavBar';
import Authenticated from '@/Layouts/Authenticated';
import Guest from '@/Layouts/Guest';
import { Head } from '@inertiajs/inertia-react';
import React, { useState } from 'react'

export default function ChangePassword(props) {
    const [current, setCurrent] = useState(String);
    const [validate, setValidate] = useState(String);
    const [newPassword, setNewPassword] = useState(String);
    const [confirmNewPassword, setConfirmNewPassword] = useState(String);

    const isSame = (current, confirm) => {
        return current === confirm;
    }

    const handleChangeCurrent = (event) => {
        setCurrent(event.target.value)
        console.log('is same? ', isSame(event.target.value, validate));
    };
    const handleChangeValidate = (event) => {
        setValidate(event.target.value)
        console.log('is same? ', isSame(event.target.value, current));
    };
    const handleChangeNewPassword = (event) => {
        setNewPassword(event.target.value)
        console.log('is same? ', isSame(event.target.value, confirmNewPassword));
    };
    const handleChangeConfirmNewPassword = (event) => {
        setConfirmNewPassword(event.target.value)
        console.log('is same? ', isSame(event.target.value, newPassword));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
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
                    <Label forInput={'validate'}>Validate Password</Label>
                    <Input type='password' handleChange={handleChangeValidate}
                    name={'validate'}
                    required={true}
                    ></Input>
                    <Label forInput={'newPassword'}>New Password Password</Label>
                    <Input type='password' handleChange={handleChangeNewPassword}
                    name={'newPassword'}
                    required={true}
                    ></Input>
                    <Label forInput={'confirmNewPassword'}>New Password Password</Label>
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
