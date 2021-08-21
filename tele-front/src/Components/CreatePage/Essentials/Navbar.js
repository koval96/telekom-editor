import React, {useContext} from 'react'
import { Download, Desktop, Switch } from "@design-system-rt/rtk-ui-kit";

import logo from '../../../static/images/logo.svg'


function Navbar() {
    return (
        <div className="navbar" style={{background: 'transparent'}}>
            <div className="d-flex">
                <img src={logo} alt="" height="30px" />
            </div>
            <div className="pageLinks">
                <a href="#">Ценности</a>
                <a href="#">Единый опыт</a>
                <a href="#">Для кого</a>
                <a href="#">Кастомизация</a>
                <a href="#">Стиль</a>
                <a href="#">Проекты</a>
                <a href="#">Отзывы</a>
                <a href="#">Команда</a>
                <a href="#">Анонсы</a>
                <a href="#" style={{color: "#FF5E2D"}}>Редактор</a>
            </div>
            <div className="d-flex me-1">
                <span className="sc-ehsPrw conNwD">
                    <a href="https://design.rt.ru/components/btn/guide" target="_blank">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            className="sc-bdfBwQ hDvvej">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="#fff"
                            d="M20.7893 17.0846C20.7914 18.0262 20.5327 19.0214 19.7769 19.7773C19.021 20.5332 18.0258 20.7918 17.0842 20.7898C16.1507 20.7878 15.1568 20.5353 14.1832 20.1387C13.4627 19.8452 12.7144 19.4569 11.9585 18.9854C11.1985 19.4504 10.4472 19.8336 9.7246 20.1238C8.74022 20.5191 7.737 20.7709 6.79663 20.7729C5.84878 20.7751 4.84381 20.5175 4.08448 19.7582C3.32515 18.9989 3.07527 18.0015 3.08707 17.0634C3.09877 16.1326 3.36333 15.1422 3.7727 14.1719C4.07601 13.453 4.47536 12.7061 4.95895 11.9515C4.51253 11.2263 4.14336 10.5088 3.86158 9.81707C3.8153 9.70344 3.77098 9.58954 3.72879 9.4755C3.02982 9.34785 2.5 8.73578 2.5 7.99995C2.5 7.45984 2.78547 6.9864 3.21376 6.72228C3.24609 5.8395 3.51872 4.9276 4.22294 4.22339C4.97883 3.4675 5.974 3.20886 6.91561 3.2109C7.84913 3.21293 8.84294 3.46543 9.81661 3.86203C10.538 4.1559 11.2874 4.54481 12.0444 5.01726C12.8041 4.55238 13.5551 4.16934 14.2775 3.87926C15.2619 3.48396 16.2651 3.23221 17.2055 3.23012C18.1533 3.22801 19.1583 3.48552 19.9176 4.24485C20.677 5.00418 20.9269 6.00153 20.9151 6.93968C20.9033 7.87044 20.6388 8.86086 20.2294 9.83116C19.926 10.5503 19.5265 11.2974 19.0427 12.0523C19.4883 12.7765 19.8568 13.4928 20.1382 14.1836C20.5348 15.1573 20.7873 16.1511 20.7893 17.0846ZM5.14207 8.97246C5.36527 8.71059 5.5 8.37101 5.5 7.99995C5.5 7.43139 5.18367 6.93672 4.71741 6.68231C4.75431 6.1073 4.93824 5.62941 5.2836 5.28405C6.27085 4.29679 8.34106 4.62877 10.6674 5.94319C9.80322 6.57672 8.94322 7.30664 8.11634 8.11682C7.29465 8.92192 6.55267 9.76021 5.90671 10.6037C5.59222 10.0405 5.33574 9.49283 5.14207 8.97246ZM5.1559 18.7084C4.16809 17.7206 4.52805 15.6468 5.88524 13.3178C6.53115 14.19 7.27882 15.0575 8.11081 15.8894C8.91484 16.6935 9.752 17.4188 10.5946 18.0496C8.23388 19.3625 6.14171 19.6942 5.1559 18.7084ZM9.17147 14.8288C10.0861 15.7434 11.0349 16.5383 11.969 17.1935C12.6445 16.7284 13.3285 16.1925 14.0028 15.5932C14.001 15.5623 14 15.5313 14 15.5C14 14.6715 14.6716 14 15.5 14C15.5412 14 15.5821 14.0016 15.6225 14.0049C16.2259 13.352 16.7668 12.6894 17.2382 12.0341C16.5744 11.0792 15.764 10.1076 14.8283 9.17192C13.9147 8.25826 12.9668 7.46405 12.0336 6.80921C11.0814 7.46484 10.1124 8.26099 9.177 9.17748C8.24541 10.0903 7.43406 11.0372 6.7636 11.9695C7.42696 12.9234 8.2367 13.894 9.17147 14.8288ZM16.8629 14.8726C17.3044 14.3873 17.7161 13.8946 18.0948 13.4001C19.3778 15.699 19.6939 17.7389 18.7162 18.7166C17.7294 19.7035 15.6606 19.3722 13.3355 18.0593C13.8419 17.688 14.3468 17.2837 14.8445 16.8495C15.0425 16.9459 15.2649 17 15.5 17C16.3284 17 17 16.3284 17 15.5C17 15.276 16.9509 15.0635 16.8629 14.8726ZM18.8462 5.29463C19.8341 6.28251 19.474 8.35656 18.1166 10.6858C17.4702 9.81255 16.7219 8.94413 15.889 8.11126C15.0858 7.30812 14.2497 6.58355 13.408 5.95324C15.7685 4.64055 17.8605 4.30889 18.8462 5.29463ZM12 13C12.5523 13 13 12.5522 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5522 11.4477 13 12 13ZM12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6192 13.3807 9.49995 12 9.49995C10.6193 9.49995 9.5 10.6192 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"></path>
                    </svg>
                    </a>
                </span>
                <a
                    href="https://design.rt.ru/components/btn/guide"
                    style={{
                        marginTop: "2px",
                        marginLeft: "8px",
                        color: '#fff',
                        textDecoration: 'none'
                    }}
                    target="_blank"
                >
                    <p>
                        Компоненты
                    </p>
                </a>
            </div>
        </div>
    )
}

export default Navbar
