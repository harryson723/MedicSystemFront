import { Link } from "react-router-dom";

export default function Dropdown({ options }) {

    const toggle = () => {
        document.querySelectorAll('.submenu-' + options.name).forEach(e => e.classList.toggle('hidden'));
        document.getElementById('arrow-' + options.name).classList.toggle('rotate-90');
    };

    return (
        <>
            <div className="p-2.5 flex justify-between rounded-md px-4 duration-300
               cursor-pointer hover:bg-[#0d5f96] hover:text-white mb-3" onClick={toggle}>
                <span >{options.name}</span>
                <span className="text-sl" id={'arrow-' + options.name}>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </span>
            </div>
            {options.items.map(item =>
                <div key={"Dropdown-submenu" + item.name} className={'submenu-' + options.name + ' relative line-animation text-left text-sm font-[16px] mt-2  mb-3 w-4/5 mx-auto hidden'}>
                    <Link to={item.url}>{item.name}</Link>
                </div>
            )}
        </>
    );
}