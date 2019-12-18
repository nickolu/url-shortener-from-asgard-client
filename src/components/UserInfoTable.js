import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Td = styled.td`
    padding: 8px;
`;

const TableRow = ({ longUrl, shortUrl, timesAccessed }) => {
    return (
        <tr>
            <Td>
                <a href={longUrl}>{longUrl}</a>
            </Td>
            <Td>
                <a href={`http://127.0.0.1:5000/${shortUrl}`}>
                    http://127.0.0.1:5000/{shortUrl}
                </a>
            </Td>
            <Td>{timesAccessed}</Td>
        </tr>
    );
};

TableRow.propTypes = {
    longUrl: PropTypes.string.isRequired,
    shortUrl: PropTypes.string.isRequired,
    timesAccessed: PropTypes.number.isRequired
};

const UserInfoTable = ({ urlPairs }) => {
    return (
        <div>
            <h3>Your Saved URLs</h3>
            <table>
                <thead>
                    <tr>
                        <Td as="th">Original URL</Td>
                        <Td as="th">Shortened URL</Td>
                        <Td as="th">Times Accessed</Td>
                    </tr>
                </thead>
                <tbody>
                    {urlPairs.map(pair => (
                        <TableRow
                            key={pair[0]}
                            shortUrl={pair[0]}
                            longUrl={pair[1]}
                            timesAccessed={pair[2]}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

UserInfoTable.propTypes = {
    urlPairs: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired
};

export { UserInfoTable };
