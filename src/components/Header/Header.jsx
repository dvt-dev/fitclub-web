import React from "react";
import styles from "./Header.module.scss";
import classnames from "classnames/bind";

import Logo from "../../assets/images/logo.png";

const cx = classnames.bind(styles);

const Header = () => {
    return (
        <section className={cx("header__wrapper")}>
            <img src={Logo} alt="Logo" className={cx("header__logo")} />

            <nav className={cx("navbar")}>
                <ul className={cx("navbar__list")}>
                    <li className={cx("navbar__item")}>
                        <a className={cx("navbar__link")}>Home</a>
                    </li>
                    <li className={cx("navbar__item")}>
                        <a className={cx("navbar__link")}>Program</a>
                    </li>
                    <li className={cx("navbar__item")}>
                        <a className={cx("navbar__link")}>Why us</a>
                    </li>
                    <li className={cx("navbar__item")}>
                        <a className={cx("navbar__link")}>Plans</a>
                    </li>
                    <li className={cx("navbar__item")}>
                        <a className={cx("navbar__link")}>Testimonials</a>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Header;
