import React from 'react';
import Guest from '@/Layouts/Guest';
import { Head } from '@inertiajs/inertia-react';
import NavLink from '@/Components/NavLink';
import Button from '@/Components/Button';
import NavBrand from '@/Components/NavBrand';
import ButtonAnchor from '@/Components/ButtonAnchor';
import NavBar from '@/Containers/NavBar';
import Footer from '@/Containers/Footer';


const toggleNavbar = (e) => {
    const navMenu = document.querySelector('#navList');
    navMenu.classList.toggle('d-none');
    navMenu.classList.toggle('position-fixed');
    navMenu.classList.toggle('w-100');
    navMenu.classList.toggle('d-flex');
    navMenu.classList.toggle('justify-content-evenly');
    navMenu.querySelector('*').classList.toggle('w-auto');
    navMenu.animate({
        from: {
            transform: 'translateY(0)',
        },
        to: {
            transform: 'translateY(70px)',
        }
    }, 300);
    navMenu.style.transform = 'translateY(70px)';
    navMenu.style.backgroundColor = '#EFF0F2';
    // const main = document.querySelector('main');
    // main.style.marginTop = '70px';
    // if (!navMenu.classList.contains('position-fixed')) {
    //     main.style.marginTop = '0px';
    // }
}
export default function LandingPage(props) {
    return (
        <Guest>
            <NavBar></NavBar>
            <main>
                <article className='jumbotron'>
                    <div className="container">
                        <h1 className='fw-bolder'>
                            <div className=""><span>Selamat Datang</span></div>
                            <div className=""><span>Di Limaku</span></div>
                        </h1>
                        <ButtonAnchor href={'/login'}>Let`s Get Started</ButtonAnchor>
                    </div>
                </article>
            </main>
            <Footer></Footer>
        </Guest>
    );
}
