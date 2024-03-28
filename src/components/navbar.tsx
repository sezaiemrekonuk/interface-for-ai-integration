import NAVROUTES from "@/utils/nav-routes";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "./theme-switch";

export default function Navbar() {

    const pages: React.ReactNode = (
        NAVROUTES.map((page, index) => (
            <li key={index} className="text-sm hover:bg-highlight transition-all duration-200 p-2 hover:px-5 rounded-xl text-hover-bright">
                <Link href={page.path
                }>
                    {page.name}
                </Link>
            </li>
        ))
    )

    return (<>
        <nav className="flex-h flex-center px-6 shadow-md py-1">
            <Image
                src={"/static/images/logo.svg"}
                alt="Logo"
                width={100}
                height={50}
                className="dark:invert me-auto"
            />
            <ul className="flex-h gap-10 me-auto">
                {pages}
            </ul>
            <div id="profile" className="flex-h flex-center gap-x-6 bg-highlight p-2 rounded-full">
                <Image
                    src={"/static/images/profile.svg"}
                    alt="Profile"
                    width={30}
                    height={30}
                    className="rounded-full dark:invert p-1"
                />
                <ThemeSwitch />
            </div>
        </nav>
    </>);
}