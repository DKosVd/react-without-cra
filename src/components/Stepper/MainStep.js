import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {setInfoFromForm} from '../../features/order/order';

const MainStep = () => {

    const dispatch = useDispatch();
    const mainInfo = useSelector(state => state.order);
    
    const handlerInputValue = (e) => {
        const inputElement = e.target;
        dispatch(setInfoFromForm({
            type: inputElement.name,
            info: inputElement.value
        }))
    }


    return (
        <div className="stepper-main-step">
            <form className="stepper-main-step-form">
                <div className="stepper-main-step-form-elem">
                    <label htmlFor="name">Имя</label>
                    <input onInput={handlerInputValue} value={mainInfo?.firstname} id="name" name="firstname" type="text"/>
                </div>
                <div className="stepper-main-step-form-elem">
                    <label htmlFor="surname">Фамилия</label>
                    <input onInput={handlerInputValue} value={mainInfo?.surname} id="surname" name="surname" type="text"/>
                </div>
                <div className="stepper-main-step-form-elem">
                    <label htmlFor="number">Телефон</label>
                    <input onInput={handlerInputValue} value={mainInfo?.tel} id="number" name="tel" type="tel"/>
                </div>
                <div className="stepper-main-step-form-elem">
                    <label htmlFor="email">Почта</label>
                    <input onInput={handlerInputValue} value={mainInfo?.email} id="email" name="email" type="email"/>
                </div>
            </form>
        </div>
    )
}

export default MainStep;