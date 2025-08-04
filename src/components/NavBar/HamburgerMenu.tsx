import { useEffect, useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import Links from './Links'

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 800) {
                setOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <div className="hamburger">
            <Hamburger
                size={26}
                toggled={open}
                toggle={setOpen}
            />
            {open && <div className="open-hamburger">
                <Hamburger
                    size={26}
                    toggled={open}
                    toggle={setOpen}
                />
                <Links setOpen={setOpen} />
            </div>}
        </div>
    );
};

export default HamburgerMenu;