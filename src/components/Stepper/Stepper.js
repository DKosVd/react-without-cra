import React, { useEffect } from "react";
import stepData from "./StepData";
import '../../styles/Stepper.css'
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { postDataFromForm, resetState, setActiveStep, setCurrentStep } from '../../features/order/order';
import { totalElement, totalPrice } from "../../features/cart/cart";

const Stepper = () => {

    const activeStep = useSelector((state) => state.order.activeStep);
    const currentStep = useSelector((state) => state.order.currentStep);
    const orderInfo = useSelector((state) => state.order);
    const isMakeOrder = useSelector((state) => state.order.isMake);
    const cart = useSelector((state) => state.cart);
    const totalPriceCart = useSelector(totalPrice);
    const totalElementCart = useSelector(totalElement);

    const dispatch = useDispatch();

    useEffect(() => {
        if(isMakeOrder) {
            dispatch(resetState())
        }
    }, [isMakeOrder])

    const handlerSetCurrentStep = (e) => {
        const idx = +e.target.getAttribute('data-step');
        dispatch(setCurrentStep(idx))
    }

    const handlerSetActivePageByButton = (e) => {
        const info = e.target.getAttribute('data-attribute');
        info === "next" ? dispatch(setActiveStep(currentStep + 1)) : dispatch(setCurrentStep(currentStep - 1));
    }

    const handleDoOrder = () => {
        dispatch(postDataFromForm({...orderInfo, ...cart, total: totalPriceCart, totalEl: totalElementCart}));
    }
    
    const isLastPage = () => {
        return currentStep === (stepData.length - 1);
    }

    return (
        <div className="stepper">
            <div className="stepper-wrapper">
                <div className="stepper-navigation">
                    {stepData.map( ({title}, idx) => {
                        return  <span data-step={idx} key={idx} onClick={handlerSetCurrentStep} className={`stepper-navigation-step ${idx === currentStep ? 'stepper-navigation-step--active': ''} ${activeStep >= idx  ? '': 'stepper-navigation-step--next'}`}>{title}</span>
                    })}
                </div>
                <div className="stepper-content">
                    {stepData.map( ({component}, idx) => {
                        return  <div key={idx} className={`stepper-content-item ${idx === currentStep ? 'stepper-content-item--active': ''}`}>{component}</div>
                    })}
                </div>
                <div className="stepper-buttons">
                    {currentStep === 0 ? null: <div className="stepper-button-prev">
                        <Button text={"Назад"} onClick={handlerSetActivePageByButton} dataInfo={'prev'} disabled={currentStep === 0}/>
                    </div>}
                    <div className="stepper-button-next ">
                        {isLastPage() ? 
                            <Button text={"Заказать"} onClick={handleDoOrder} dataInfo={'order'}/>:
                            <Button text={"Вперед"} onClick={handlerSetActivePageByButton} dataInfo={'next'} disabled={isLastPage()}/>
                        }
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stepper;