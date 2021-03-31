import logo from './logo.svg';
import './App.css'
import './Styles.scss';
import PropTypes from 'prop-types';

import useInput from './validator'

const validUserName = {isEmpty: true, minLength: 2}
const validPassword = {isEmpty: true, minLength: 5, maxLength: 10}


function App() {
    // const email = useInput("", b)
    const userName = useInput("", validUserName)
    const password = useInput("", validPassword)

    const handleSubmit = () => {
        if (userName.errors.length > 0 || password.errors.length > 0) {

        } else {
            console.log(userName.value, password.value)
        }
    }

    return (
        <div className="flex-container j-c-center align-i-center">
            <div className="container-authorization container-small j-c-center align-i-center">
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
                        Авторизация
                    </div>
                    <div className="Headline-container-FieldName">
                        <label
                            htmlFor="userName"
                            className="container-text-title">
                            Имя пользователя
                        </label>

                        {(userName.errors.length > 0 && userName.errors.length > 0) &&
                        <div className="write-color-red f-s-12">
                            {userName.errors[userName.errors.length - 1]}
                        </div>
                        }
                        <input
                            onChange={e => userName.onChange(e)}
                            onBlur={e => userName.onBlur(e)}
                            value={userName.value}

                            type="text"
                            id="Username"
                            name="username"
                            className={`container-input ${userName.errors.length > 0 ? "background-color-red" : "background-color-white"}`}/>


                        <label
                            htmlFor="password"
                            className="container-text-title">
                            Пароль
                        </label>

                        {(password.errors.length > 0 && password.errors.length > 0) &&
                        <div className="write-color-red f-s-12">
                            {password.errors[password.errors.length - 1]}
                        </div>
                        }

                        <input
                            onChange={e => password.onChange(e)} // деструктуризация {password}=(onChange, onBlur, value)
                            onBlur={e => password.onBlur(e)}
                            value={password.value}
                            type="text"
                            id="pwd"
                            name="pwd"
                            className={`container-input ${password.errors.length > 0 ?
                                "background-color-red" : "background-color-white"}`}/>
                    </div>
                    <div className="container-text">
                        У вас нет Аккаунта? Регистрация
                    </div>
                    <div>

                    </div>
                    <div className="d-flex j-c-center">
                        <button
                            onClick={handleSubmit}
                            disabled={!userName.inputValid || !password.inputValid}
                            className="button-large background-color-BFA764">
                            Авторизация
                        </button>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default App;
