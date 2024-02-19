import { Link } from "react-router-dom";

export default function Navbar({ options }) {
    return (
        <nav className="
            w-full p-5
            bg-blue-400
        ">
            {options.map(option => 
                <Link className="
                    text-white
                    p-5
                    hover:bg-blue-800
                "
                to={option.url}>{option.option}</Link>)}
        </nav>
    );
}