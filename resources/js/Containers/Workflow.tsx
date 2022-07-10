import React, { FunctionComponent } from 'react';

const Workflow: FunctionComponent = () => {
    const procedure = [
        {
            id: 1,
            content: 'Nasabah memilah sampah'
        },
        {
            id: 2,
            content: 'Nasabah memilih layanan dropoff atau pickup',
        },
        {
            id: 3,
            content: 'Nasabah mengisi formulir yang tersedia',
        },
        {
            id: 4,
            content: 'Jika pilih layanan pickup, nasabah tinggal menunggu driver menjemput sampah ke rumah'
        },
        {
            id: 5,
            content: 'Jika pilih layanan dropoff, maka nasabah mendatangi lokasi limaku terdekat'
        },
        {
            id: 6,
            content: 'Setelah transaksi berhasil, saldo e-money bertambah di akun Anda'
        }
    ];

    return (
        <div className='min-vh-100 p-5'>
            <h1 className='text-5xl font-black underline mb-3
            dark:text-neutral-100
            '>
                Alur Penyetoran Sampah
            </h1>
            <div className="grid grid-cols-3 gap-2">
                {
                    procedure.map((proc, index) => {
                        return (
                            <div key={index} className="h-96 bg-neutral-200 shadow-lg p-3 dark:bg-neutral-700">
                                <div className="m-14 flex justify-center items-center aspect-square bg-neutral-300
                                dark:bg-neutral-600 dark:text-neutral-100
                                text-4xl font-black">
                                    {index}
                                </div>
                                <p className='text-center dark:text-neutral-100'>{proc.content}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
     );
}

export default Workflow;
