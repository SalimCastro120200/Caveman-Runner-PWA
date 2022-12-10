import Link from 'next/link';
import React from 'react';

const TeamMember = () => {

    const data = [
        {
            id: 1,
            title: "Avy",
            img: "1.png",
        },
        {
            id: 2,
            title: "Mark",
            img: "2.png",
        },
        {
            id: 2,
            title: "Mark",
            img: "3.png",
        }
    ];

    return (
        <>

                <div className="col-lg-4 col-md-6">
                    <div className="team-content">
                        <img src={`/images/avatar/salim.jpg`} alt="" width={100} />
                        <h3>Salim Rafael Castro Ortiz</h3>
                        <p>Desarrollador Frontend</p>
                        <div className="team-social">   
                            <Link href="https://www.facebook.com/ultrond28/">
                                <a><i className="bi bi-facebook"></i></a>
                            </Link>
                            <Link href="https://t.me/ultrond28">
                                <a><i className="bi bi-telegram"></i></a>
                            </Link>
                            <Link href="https://discord.com/users/708541468364636230">
                                <a><i className="bi bi-discord"></i></a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="team-content">
                        <img src={`/images/avatar/wicha.png`} alt="" width={100} />
                        <h3>Luis Alejandro Gomez Santillan</h3>
                        <p>Desarrollador Backend</p>
                        <div className="team-social">
                            <Link href="#">
                                <a><i className="bi bi-tiktok"></i></a>
                            </Link>
                            <Link href="#">
                                <a><i className="bi bi-telegram"></i></a>
                            </Link>
                            <Link href="#">
                                <a><i className="bi bi-discord"></i></a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="team-content">
                        <img src={`/images/avatar/felipe.jpg`} alt="" width={100} />
                        <h3>Felipe Paredes Perez</h3>
                        <p>Diseñador de Videojuegos</p>
                        <div className="team-social">
                            <Link href="#">
                                <a><i className="bi bi-tiktok"></i></a>
                            </Link>
                            <Link href="#">
                                <a><i className="bi bi-telegram"></i></a>
                            </Link>
                            <Link href="#">
                                <a><i className="bi bi-discord"></i></a>
                            </Link>
                        </div>
                    </div>
                </div>

        </>
    );
};

export default TeamMember;