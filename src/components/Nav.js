import React from "react";
import { NavLink } from "./NavLink";
import styled from "styled-components";

const Navigation = styled.nav`
    ul {
        padding-left: 0;
        display: flex;
    }

    li {
        list-style: none;
        display: flex;
        position: relative;
        margin-right: 4px;
        position: relative;
    }
`;

const Nav = () => {
    return (
        <Navigation>
            <ul>
                <li>
                    <NavLink to="/">Create</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
            </ul>
        </Navigation>
    );
};

export { Nav };
