import type { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom'

interface LinksProps {
    setOpen?: Dispatch<SetStateAction<boolean>>;
}

const Links = ({ setOpen }: LinksProps) => {
    const links = [
        "Home",
        "About Us",
        "Prices",
        "Gallery",
        "Contact Us",
        "BOOK NOW!"
    ]

    const slugify = (str: string) =>
        str
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, '')   // Remove punctuation
            .replace(/\s+/g, '-')          // Replace spaces with dashes
            .trim();

    const navigate = useNavigate();
    const goTo = (link: string) => {
        navigate(`/${ slugify(link) }`);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        if (setOpen) {
            setOpen(false);
        }
    }

    return (
        <ul>
            {links.map((link) => <li key={link} onClick={() => goTo(link.toLowerCase())}>{link}</li>)}
        </ul>
    );
};

export default Links;