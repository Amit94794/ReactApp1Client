import React from "react";
import { Menu } from "./menu";
import { Link } from "react-router-dom";

interface Props {
    menus: Menu[];
}

const Sidebar: React.FC<Props> = ({ menus }) => {

    const parentMenus = menus.filter(x => x.parentMenuId === null);

    return (
        <div className="sidebar">

            {
                parentMenus.map(parent => {

                    const childMenus = menus.filter(
                        x => x.parentMenuId === parent.menuId
                    );

                    return (
                        <div key={parent.menuId}>

                            <h3>{parent.menuName}</h3>

                            {
                                childMenus.length > 0 && (
                                    <ul>
                                        {
                                            childMenus.map(child => (
                                                <li key={child.menuId}>
                                                    <Link to={child.path}>
                                                        {child.menuName}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )
                            }

                            {
                                childMenus.length === 0 && (
                                    <Link to={parent.path}>
                                        {parent.menuName}
                                    </Link>
                                )
                            }

                        </div>
                    );
                })
            }

        </div>
    );
};

export default Sidebar;