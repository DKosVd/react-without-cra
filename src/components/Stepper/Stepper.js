import React from "react";
import stepData from "./StepData";
import '../../styles/Stepper.css'
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { setActiveStep } from '../../features/order/order';

const Stepper = () => {

    const activeStep = useSelector((state) => state.order.activeStep);
    const dispatch = useDispatch();

    const handlerSetActiveStep = (e) => {
        const idx = +e.target.getAttribute('data-step');
        dispatch(setActiveStep(idx))
    }

    const handlerSetActivePageByButton = (e) => {
        const info = e.target.getAttribute('data-attribute');
        info === "next" ? dispatch(setActiveStep(activeStep + 1)) : dispatch(setActiveStep(activeStep - 1));
    }
    

    return (
        <div className="stepper">
            <div className="stepper-wrapper">
                <div className="stepper-navigation">
                    {stepData.map( ({title}, idx) => {
                        return  <span data-step={idx} key={idx} onClick={handlerSetActiveStep} className={`stepper-navigation-step ${idx === activeStep ? 'stepper-navigation-step--active': ''} ${activeStep >= idx  ? '': 'stepper-navigation-step--next'}`}>{title}</span>
                    })}
                </div>
                <div className="stepper-content">
                    {stepData.map( ({component}, idx) => {
                        return  <div key={idx} className={`stepper-content-item ${idx === activeStep ? 'stepper-content-item--active': ''}`}>{component}</div>
                    })}
                </div>
                <div className="stepper-buttons">
                    <div className="stepper-button-prev">
                        <Button text={"Назад"} onClick={handlerSetActivePageByButton} dataInfo={'prev'} disabled={activeStep === 0}/>
                    </div>
                    <div className="stepper-button-next ">
                        <Button text={"Вперед"} onClick={handlerSetActivePageByButton} dataInfo={'next'} disabled={activeStep === stepData.length - 1}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stepper;