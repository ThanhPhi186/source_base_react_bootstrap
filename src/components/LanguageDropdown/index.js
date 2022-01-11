// @flow
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

import enFlag from './flags/us.jpg';
import japaneseFlag from './flags/japan.png';
import i18n from "../../i18n"

// get the languages
const Languages = [
    {
        name: 'English',
        flag: enFlag,
        key: 'en'
    },
    {
        name: 'Japanese',
        flag: japaneseFlag,
        key: 'jp'
    },
];

const LanguageDropdown = (): React$Element<any> => {
    const [displayLang, setDisplayLang] = useState(Languages[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    /*
     * toggle language-dropdown
     */
    const toggleDropdown = ({ dropdownOpen: boolean }) => {
        setDropdownOpen(!dropdownOpen);
    };

    const changeLanguage = (lng) => {
        toggleDropdown(false);
        if (lng.key === displayLang.key) {
            return;
        }
        setDisplayLang(lng);;
        i18n.changeLanguage(lng.key);
    }

    useEffect(() => {
        if (i18n.language != null) {
            let lng = Languages.filter((item) => item.key == i18n.language)[0];
            if (lng) {
                setDisplayLang(lng);
            }
        }
    }, []);

    return (
        <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
            <Dropdown.Toggle
                variant="link"
                id="dropdown-languages"
                as={Link}
                to="#"
                onClick={toggleDropdown}
                className="nav-link dropdown-toggle arrow-none">
                <img src={displayLang.flag} alt={displayLang.name} className="me-0 me-sm-1" height="12" />{' '}
                <span className="align-middle d-none d-sm-inline-block">{displayLang.name}</span>
                <i className="mdi mdi-chevron-down d-none d-sm-inline-block align-middle"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu">
                <div>
                    {Languages.map((lang, i) => {
                        return (
                            <a onClick={() => changeLanguage(lang)} className="dropdown-item notify-item" key={i + '-lang'} style={{ cursor: "pointer" }}>
                                <img src={lang.flag} alt={lang.name} className="me-1" height="12" />{' '}
                                <span className="align-middle">{lang.name}</span>
                            </a>
                        );
                    })}
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default LanguageDropdown;
