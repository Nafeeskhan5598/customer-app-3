import React from "react";
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <>
            <footer className="footer card rounded-none mt-auto bg-white total-revenue pb-0">
                <div className="h-16 flex items-center px-8 rounded-none ">
                    <div className="flex md:justify-between justify-center w-full gap-4">
                        <div>
                            <script>document.write(new Date().getFullYear())</script> © Adminto - <Link
                                to="/" target="_blank" rel="noopener noreferrer">Coderthemes</Link>
                        </div>
                        <div className="md:flex hidden gap-4 item-center md:justify-end">
                            <Link to="/"
                                className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">About</Link>
                            <Link to="/"
                                className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Help</Link>
                            <Link to="/"
                                className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Contact
                                Us</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;