"use client";
import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button } from "keep-react";
import { Link } from "react-router-dom";

export const Navigationbar = () => {
    return (
        <Navbar fluid={true}>
            <Navbar.Container className="mx-[125px] flex items-center justify-between pt-8">
                <Navbar.Brand>
                    <img
                        src="/src/assets/manu.svg"
                        alt="manu"
                        width="61px"
                        height="56px"
                    />
                </Navbar.Brand>

                <Navbar.Container className="flex items-center text-white">
                    <Navbar.Container
                        tag="ul"
                        className="lg:flex hidden items-center justify-between gap-8 text-white"
                    >
                        <Navbar.Link linkName="about us" className="nav-link" />
                        <Navbar.Link linkName="services" className="nav-link" />
                        <Navbar.Link linkName="our work" className="nav-link" />
                        <Navbar.Link linkName="education" className="nav-link" />
                    </Navbar.Container>

                    <Navbar.Collapse collapseType="sidebar">
                        <Navbar.Container tag="ul" className="flex flex-col gap-5">
                            <Navbar.Link linkName="about us" className="nav-link" />
                            <Navbar.Link linkName="services" className="nav-link" />
                            <Navbar.Link linkName="our work" className="nav-link" />
                            <Navbar.Link linkName="education" className="nav-link" />
                        </Navbar.Container>
                    </Navbar.Collapse>
                </Navbar.Container>

                <Navbar.Container>
                    <Button size="sm" pill={true} className="border border-white bg-transparent hover:bg-transparent text-white w-36 h-11 p-0 m-0">
                        hire us
                    </Button>
                </Navbar.Container>
            </Navbar.Container>
        </Navbar>
    );
}
// font-family: Jaapokki subtract;
// font-size: 70px;
// font-weight: 400;
// line-height: 95px;
// letter-spacing: 0.01em;
// text-align: left;
