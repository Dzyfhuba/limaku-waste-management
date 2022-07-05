import React from "react";
import Guest from "@/Layouts/Guest";
import { Head } from "@inertiajs/inertia-react";
import NavLink from "@/Components/NavLink";
import Button from "@/Components/Button";
import NavBrand from "@/Components/NavBrand";
import ButtonAnchor from "@/Components/ButtonAnchor";
import NavBar from "@/Containers/NavBar";
import Footer from "@/Containers/Footer";
import PickupWaste from "@/Containers/PickupWaste";
import DropoffWaste from "@/Containers/DropoffWaste";

export default function LandingPage(props) {
    return (
        <Guest>
            <NavBar auth={props.auth}></NavBar>
            <main>
                <article className="jumbotron">
                    <div className="container">
                        <h1 className="fw-bolder">
                            <div className="">
                                <span>Selamat Datang</span>
                            </div>
                            <div className="">
                                <span>Di Limaku</span>
                            </div>
                        </h1>
                        <ButtonAnchor href={"/login"}>
                            Let`s Get Started
                        </ButtonAnchor>
                    </div>
                </article>
                <PickupWaste></PickupWaste>
                <DropoffWaste></DropoffWaste>
            </main>
            <Footer></Footer>
        </Guest>
    );
}
