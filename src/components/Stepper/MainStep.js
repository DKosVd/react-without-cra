import React from "react";

const MainStep = () => {
    return (
        <div className="stepper-main-step">
            <form className="stepper-main-step-form">
                <div className="stepper-main-step-form-elem">
                    <label htmlFor="name">Имя</label>
                    <input id="name" type="text"/>
                </div>
                <div className="stepper-main-step-form-elem">
                    <label htmlFor="surname">Фамилия</label>
                    <input id="surname" type="text"/>
                </div>
                <div className="stepper-main-step-form-elem">
                    <label htmlFor="number">Телефон</label>
                    <input id="number" type="tel"/>
                </div>
                <div className="stepper-main-step-form-elem">
                    <label htmlFor="email">Почта</label>
                    <input id="email" type="email"/>
                </div>
            </form>
        </div>
    )
}

export default MainStep;