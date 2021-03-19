import logo from './logo.svg';
import './App.css'
import React from 'react';
import './Styles.scss';
import PropTypes from 'prop-types';


function App() {
    return (
        <div className="flex-container j-c-center align-i-center">
            <div className="container-authorization container500х665 j-c-center align-i-center">
                <div className="container-white">
                    <p>
                        <svg className="icon-cross-Headline"
                             width="12" height="12" viewBox="0 0 12 12" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                                <path
                                    d="M5.42641 5.95899L0.11491 11.2705C-0.0326524 11.4181 -0.0326524 11.6571 0.11491 11.8047C0.188598 11.8786 0.285348 11.9153 0.38191 11.9153C0.47866 11.9153 0.575223 11.8786 0.64891 11.8047L6.00035 6.45324L11.3518 11.8047C11.4257 11.8786 11.5222 11.9153 11.6188 11.9153C11.7154 11.9153 11.8121 11.8786 11.8858 11.8047C12.0333 11.6571 12.0333 11.4181 11.8858 11.2705L6.57447 5.95899L11.8893 0.643742C12.0369 0.49618 12.0369 0.257117 11.8893 0.109555C11.7418 -0.0378203 11.5027 -0.0378203 11.3554 0.109555L6.00054 5.46474L0.64516 0.109742C0.497598 -0.0376328 0.258723 -0.0376328 0.11116 0.109742C-0.0364023 0.257305 -0.0364023 0.496367 0.11116 0.64393L5.42641 5.95899Z"
                                    fill="#BDBDBD"/>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="12" height="12" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </p>
                    <div className="container-text-main-title">
                       Создать аккаунт
                    </div>
                    <div className="Headline-container-FieldName">

                        <label for="fname" className="container-text-title">Имя:</label>
                        <input type="text" id="fname" name="fname" value="John"
                               className="container-input"/>

                        <label for="lname" className="container-text-title">Фамилия:</label>
                        <input type="text" id="lname" name="lname" value="Johnes"
                               className="container-input"/>

                        <label for="uname" className="container-text-title">Имя пользователя:</label>
                        <input type="text" id="uname" name="uname" value="@JohnJohnes"
                               className="container-input"/>

                        <label for="email" className="container-text-title">Электронная почта:</label>
                        <input type="email" id="email" name="email" value="JohnJohnes@google.com"
                               className="container-input"/>

                        <label htmlFor="pwd" className="container-text-title">Пароль:</label>
                        <input type="pwd" id="pwd" name="pwd"
                               className="container-input"/>
                    </div>

                    <div className="d-flex j-c-center m-t-20">
                        <button className="button-184_34 background-color-BFA764">
                           Регистрация
                        </button>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default App;
