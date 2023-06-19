import React from "react";
import styles from "./Hero.module.scss";
import classname from "classnames/bind";
import CountUp from "react-countup";

import Header from "../Header/Header";

const cx = classname.bind(styles);

const Hero = () => {
    return (
        <div className={cx("hero__wrapper")}>
            <div className={cx("hero__container")}>
                <div className={cx("hero__left")}>
                    <Header />
                    {/* The best ad */}
                    <div className={cx("the-best--ad")}>
                        <div></div>
                        <span className={cx("the-best--ad-text")}>
                            the best fitness club in the town
                        </span>
                    </div>

                    {/* Hero heading */}
                    <div className={cx("hero__heading")}>
                        <div>
                            <span className={cx("stroke-text")}>Shape </span>
                            <span>your</span>
                        </div>
                        <div>
                            <span>Ideal </span>
                            <span>body</span>
                        </div>
                        <p className={cx("hero__text")}>
                            In here we will help you to shape and build your
                            ideal body and live up your life to fullest
                        </p>
                    </div>

                    {/* Figures */}
                    <div className={cx("figures")}>
                        <div className={cx("figures__item")}>
                            <span className={cx("figures__item-number")}>
                                <span>+ </span>
                                <CountUp start={100} end={140} duration={4} />
                            </span>
                            <span className={cx("figures__item-des")}>
                                EXPERT COACHES
                            </span>
                        </div>
                        <div className={cx("figures__item")}>
                            <span className={cx("figures__item-number")}>
                                <span>+ </span>
                                <CountUp start={888} end={978} duration={4} />
                            </span>
                            <span className={cx("figures__item-des")}>
                                MEMBERS JOINED
                            </span>
                        </div>
                        <div className={cx("figures__item")}>
                            <span className={cx("figures__item-number")}>
                                <span>+ </span>
                                <CountUp start={0} end={50} duration={4} />
                            </span>
                            <span className={cx("figures__item-des")}>
                                FITNESS PROGRAMS
                            </span>
                        </div>
                    </div>

                    {/* Hero btn */}
                    <div className={cx("hero__btn")}>
                        <button className={cx("btn")}>Get Started</button>
                        <button className={cx("btn")}>Learn More</button>
                    </div>
                </div>
                <div className={cx("hero__right")}>right side</div>
            </div>
        </div>
    );
};

export default Hero;
