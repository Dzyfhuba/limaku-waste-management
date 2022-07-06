import React, { useEffect, useState } from 'react';
import Guest from '@/Layouts/Guest';
import { Head } from '@inertiajs/inertia-react';
import NavBar from '@/Containers/NavBar';
import Footer from '@/Containers/Footer';
import axios from 'axios';

export default function LandingPage(props) {
    const [reward, setReward] = useState(Number)

    useEffect(() => {
        axios.get('/exchange/reward').then(response => setReward(response.data.reward));
    }, []);

    return (
        <Guest>
            <Head title='Tarik Uang'></Head>
            <NavBar auth={props.auth}></NavBar>
            <main>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-5 mb-4" tabIndex={2}>
                            <div className="row">
                                <h1 className='fw-bolder text-black-50' style={{ fontSize: '60px' }}>
                                    Penarikan Tunai
                                </h1>
                            </div>
                            <div className="row">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <form method="post">
                                            <div className="mb-3">
                                              <label htmlFor="name" className="form-label">Nama Lengkap</label>
                                              <input type="text" name="name" id="name" className="form-control" placeholder="Nama Lengkap" placeholderaria-describedby="nameId"></input>
                                            </div>
                                            <div className="mb-3">
                                              <label htmlFor="bank" className="form-label">Bank</label>
                                              <input type="text" name="bank" id="bank" className="form-control" placeholder="Bank" placeholderaria-describedby="nameId"></input>
                                            </div>
                                            <div className="mb-3">
                                              <label htmlFor="account" className="form-label">No. Rekening</label>
                                              <input type="text" name="account" id="account" className="form-control" placeholder="No. Rekening" placeholderaria-describedby="nameId"></input>
                                            </div>
                                            <div className="mb-3">
                                              <label htmlFor="nominal" className="form-label">Nominal Penarikan (Min. Rp. 10.000)</label>
                                              <input type="text" name="nominal" id="nominal" className="form-control" placeholder="Nominal Penarikan (Min. Rp. 10.000)" placeholderaria-describedby="nameId"></input>
                                            </div>
                                            <button type="submit" className="btn button-primary w-100">Kirim</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 p-0" tabIndex={1}>
                            <div className="card shadow">
                                <div className="card-body">
                                    <h4 className="card-title fw-bolder">Total E-Money</h4>
                                    <hr />
                                    <p className="card-text text-end fs-1 fw-bolder">Rp. {reward}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </Guest>
    );
}
