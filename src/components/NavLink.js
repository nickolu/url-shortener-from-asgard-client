import React from "react";
import PropTypes from "prop-types";
import { NavLink as BaseNavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(BaseNavLink)`
    align-items: center;
    background: #ccc;
    border-radius: 6px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    color: #000;
    display: flex;
    height: 40px;
    padding: 8px;
    text-align: center;
    width: 100%;

    &:hover {
        background: #bbb;
    }

    &:hover,
    &:active,
    &:focus {
        text-decoration: none;
        color: #000;
    }

    &.active {
        background-color: #aaa;
        font-weight: bold;

        &:hover {
            background: #999;
        }
    }
`;

const NavLink = ({ to, children }) => {
    return (
        <StyledNavLink
            isActive={(match, location) => {
                if (!match || !location) {
                    return false;
                }
                return to === location.pathname;
            }}
            to={to}
        >
            {children}
        </StyledNavLink>
    );
};

NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export { NavLink };
