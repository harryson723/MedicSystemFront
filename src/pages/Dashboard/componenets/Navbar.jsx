import { Link } from "react-router-dom";
import logo from '../../../assets/img/navbar/logo2.png';

export default function Navbar({ options }) {
    return (
        <header className="bg-white">
            <nav className="flex justify-between items-center w-[90%] mx-auto mt-2">
                <div className="">
                    <ul className="flex items-center gap-[4vw]">
                        {options.map(option =>
                            <li>
                                <Link className="relative line-animation"
                                    to={option.url}>{option.option}</Link>
                            </li>)}
                    </ul>
                </div>
                <div>
                    <img className="w-[200px]" src={logo} alt="" />
                </div>
            </nav>
        </header>
    );
}