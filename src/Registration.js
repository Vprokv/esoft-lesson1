import logo from './logo.svg';
import './App.css'
// import React from 'react';
import './Styles.scss';
import PropTypes from 'prop-types';

import useInput from './validator'

const validFirstName = {isEmpty: true, minLength: 2, maxLength: 20}
const validLastName = {isEmpty: true, minLength: 2, maxLength: 30}
const validUserName = {isEmpty: true, minLength: 2, maxLength: 20}
const validPassword = {isEmpty: true, minLength: 5, maxLength: 10}
const validEmail = {isEmpty: true, isEmail: true }


function App() {
    const userFirstName = useInput("", validFirstName)
    const userLastName = useInput("", validLastName)
    const userName = useInput("", validUserName)
    const password = useInput("", validPassword)
    const userEmail = useInput("", validEmail)

    const handleSubmit = () => {
        if (
            userFirstName.errors.length > 0 ||
            userLastName.errors.length > 0 ||
            userName.errors.length > 0 ||
            userEmail.errors.length > 0 ||
            password.errors.length > 0) {

        } else {
            console.log(
                userFirstName.value,
                userLastName.value,
                userName.value,
                userEmail.value,
                password.value)}
    }

    return (
        <div className="flex-container j-c-center align-i-center">
            <div className="container-authorization medium j-c-center align-i-center">
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
                    <h1 className="container-text-main-title">
                        Регистрация пользователя
                    </h1>
                    <legend className="Headline-container-FieldName">
                        <label
                            htmlFor="userFirstName"
                            className="container-text-title">
                            Имя
                        </label>

                        {(userFirstName.isDirty && userFirstName.errors.length > 0) &&
                        <div className="write-color-red f-s-12">
                            {userFirstName.errors[userFirstName.errors.length - 1]}
                        </div>
                        }

                        <input
                            onChange={e => userFirstName.onChange(e)}
                            onBlur={e => userFirstName.onBlur(e)}
                            value={userFirstName.value}

                            type="text"
                            id="userFirstName"
                            name="userFirstName"
                            className={`container-input 
                            ${userFirstName.isDirty && userFirstName.errors.length > 0 ?
                                "background-color-red" : "background-color-white"}`}/>

                        <label
                            htmlFor="lname"
                            className="container-text-title">
                            Фамилия
                        </label>

                        {(userLastName.isDirty && userLastName.errors.length > 0) &&
                        <div className="write-color-red f-s-12">
                            {userLastName.errors[userLastName.errors.length - 1]}
                        </div>
                        }

                        <input
                            onChange={e => userLastName.onChange(e)}
                            onBlur={e => userLastName.onBlur(e)}
                            value={userLastName.value}

                            type="text"
                            id="lname"
                            name="lname"
                            className={`container-input 
                            ${userLastName.isDirty && userLastName.errors.length > 0 ?
                                "background-color-red" : "background-color-white"}`}/>

                        <label
                            htmlFor="uname"
                            className="container-text-title">
                            Имя пользователя
                        </label>
                        {(userName.isDirty && userName.errors.length > 0) &&
                        <div className="write-color-red f-s-12">
                            {userName.errors[userName.errors.length - 1]}
                        </div>
                        }
                        <input
                            onChange={e => userName.onChange(e)}
                            onBlur={e => userName.onBlur(e)}
                            value={userName.value}

                            type="text"
                            id="uname"
                            name="uname"
                            className={`container-input 
                            ${userName.isDirty && userName.errors.length > 0 ?
                                "background-color-red" : "background-color-white"}`}/>

                        <label
                            htmlFor="email"
                            className="container-text-title">
                            Электронная почта
                        </label>
                        {(userEmail.isDirty && userEmail.errors.length > 0) &&
                        <div className="write-color-red f-s-12">
                            {userEmail.errors[userEmail.errors.length - 1]}
                        </div>
                        }
                        <input
                            onChange={e => userEmail.onChange(e)}
                            onBlur={e => userEmail.onBlur(e)}
                            value={userEmail.value}

                            type="email"
                            id="email"
                            name="email"
                            // value="JohnJohnes@google.com"
                            className={`container-input 
                            ${userEmail.isDirty && userEmail.errors.length > 0 ?
                                "background-color-red" : "background-color-white"}`}/>

                        <label
                            htmlFor="pwd"
                            className="container-text-title">
                            Пароль
                        </label>
                        {(password.isDirty && password.errors.length > 0) &&
                        <div className="write-color-red f-s-12">
                            {password.errors[password.errors.length - 1]}
                        </div>
                        }
                        <input
                            onChange={e => password.onChange(e)}
                            onBlur={e => password.onBlur(e)}
                            value={password.value}

                            type="pwd"
                            id="pwd"
                            name="pwd"
                            className={`container-input 
                            ${password.isDirty && password.errors.length > 0 ?
                                "background-color-red" : "background-color-white"}`}/>
                    </legend>

                    <div className="d-flex j-c-center m-t-20">
                        <button
                            onClick={handleSubmit}
                            disabled={
                                !userFirstName.inputValid ||
                                !userLastName.inputValid ||
                                !userName.inputValid ||
                                !userEmail.inputValid ||
                                !password.inputValid}
                            className="button-large background-color-BFA764">
                            Создать аккаунт
                        </button>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default App;
