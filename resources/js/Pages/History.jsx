import React from 'react';
import Guest from '@/Layouts/Guest';
import NavBar from '@/Containers/NavBar';
import Footer from '@/Containers/Footer';
import { Head } from '@inertiajs/inertia-react';
import List from '@/Components/List';
import { range } from 'lodash';

export default function LandingPage(props) {
    return (
        <Guest>
            <Head title="Riwayat"></Head>
            <NavBar auth={props.auth}></NavBar>
            <main>
                <div className="container">
                    <h1 className="mb-3">Riwayat Transaksi</h1>
                    <List>
                        {range(1, 100).map((e, index) => {
                            return(
                                <List.Item className="card card-body mb-2" key={index}>
                                    <div className="row align-items-center">
                                        <div className="col mb-sm-0 mb-3">
                                            <h4>Masker </h4>
                                            <small className="text-sm text-black-50">
                                                Deskripsi
                                            </small>
                                        </div>
                                        <div className="col size-sm-big text-sm-center text-end">
                                            1.5 kg
                                        </div>
                                        <div className="col-sm size-sm-big d-flex justify-content-end">
                                            Rp. 3000
                                        </div>
                                    </div>
                                </List.Item>
                            );
                        })}
                    </List>
                </div>
            </main>
            <Footer></Footer>
        </Guest>
    );
}
