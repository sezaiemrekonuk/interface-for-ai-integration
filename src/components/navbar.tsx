import NAVROUTES from "@/utils/nav-routes";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "./theme-switch";
import Logo from "@/static/logo.png";
import Profile from "./profile";
import NavbarDropdown from "./navbar-dropdown";

export default function Navbar() {

    const pages: React.ReactNode = (
        NAVROUTES.map((page, index) => {
            return page.submenus ?
                (
                    <NavbarDropdown key={index} page={page} />
                )
                : (<li key={index} className="text-sm hover:bg-highlight transition-all duration-200 p-2 hover:px-5 rounded-xl text-hover-bright">
                    <Link href={page.path
                    }>
                        {page.name}
                    </Link>
                </li>)
        })
    )

    return (<>
        <nav className="flex-h flex-center px-6 shadow-md py-1">
            <Image
                src={Logo}
                alt="Logo"
                width={150}
                height={100}
                className="invert dark:invert-0 me-auto"
            />
            <ul className="flex-h gap-10 me-auto">
                {pages}
            </ul>
            <div id="profile" className="flex-h flex-center gap-x-6 bg-highlight p-2 rounded-full">
                <Profile />
                <ThemeSwitch />
            </div>
        </nav>
    </>);
}