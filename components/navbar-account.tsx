import { FaRegUser } from "react-icons/fa6";

const NavBarAccount = () => {
    return (
        <>
            <div className="dropdown">
                <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle"
                >
                    <FaRegUser className="w-10 rounded-full" fontSize={30} />
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box w-52 mt-3 p-2 shadow"
                >
                    <li>
                        <a>Profile</a>
                    </li>
                    <li>
                        <a>Settings</a>
                    </li>
                    <li>
                        <a>Logout</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default NavBarAccount;
