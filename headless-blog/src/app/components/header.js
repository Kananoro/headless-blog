'use client'

import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Header = () => {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) {
        return null;
    }

	return (
		<header className="pt-80 pb-80">
			<div className="container">
				<div className="h1">Headless Blog</div>
                {theme === "dark" ? (
                    <BsSun size={25} cursor="pointer" onClick={() => setTheme("light")}/>
                ) : (
                    <FiMoon size={25} cursor="pointer" onClick={() => setTheme("dark")}/>
                )}
			</div>
		</header>
	);
};

export default Header;
