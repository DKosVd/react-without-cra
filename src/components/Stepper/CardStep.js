import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInfoFromForm } from "../../features/order/order";
import { getYear, getMonth } from "../../utils/prepareData";


const CardStep = () => {
    const dispatch = useDispatch();
    const bankCard = useSelector(state => state.order);
    const [backCard, setBackCard] = useState(false);
    
    const handlerInputValue = (e) => {
        const inputElement = e.target;
        dispatch(setInfoFromForm({
            type: inputElement.name,
            info: inputElement.value
        }))
    }

    const handleFocusCvv = (e) => {
        setBackCard(!backCard);
    }

    const handleUnFocusCvv = () => {
        setBackCard(!backCard);
    }
    

    return (
        <div className="card-wrapper">
        <div className="card-container">
            <div className={`card ${backCard ? 'card-active' : ''} `}>
                <div className="card-front">
                    <div className="card-item">
                        <div className="card-excise">
                            <img src="./img/chip.png" alt=""/>
                        </div>
                        <div className="card-bank">
                            <img src="./img/visa.png" alt=""/>
                        </div>
                    </div>
                    <div className="card-number">
                        {bankCard?.numberCard ? bankCard?.numberCard.split('').map( (el, idx) => <span key={idx}>{el}</span>) : <span>NUMBER CARD</span>}
                    </div>
                    <div className="card-information">
                        <div className="card-holder">
                            <div className="card-holder-title">Card Holder</div>
                            <div className="card-holder-fullname">
                                {bankCard?.holderCard ? bankCard.holderCard : 'FULL NAME'}
                                <span className="card-holder-fullname-letter"></span>
                            </div>
                        </div>
                        <div className="expires">
                            <div className="expires-title">Expires</div>
                            <div className="expires-date">{bankCard.month ? getMonth(bankCard.month) : 'ММ'}/{bankCard.year ? getYear(bankCard.year) : 'YY'}</div>
                        </div>
                    </div>
                </div>
                <div className="card-back">
                    <div className="card-back-black-line"></div>
                    <div className="card-back-cvs">
                        <div className="cvs-text">CVV</div>
                        <div className="cvs-field">{bankCard?.cvv}</div>
                    </div>
                    <div className="card-back-visa">
                        <img src="./img/visa.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className="form-card">
                <div className="form-wrapper">
                    <form className="form-main">
                        <div className="form-input">
                            <label htmlFor="cardNumber">Номер карты</label>
                            <input id="cardNumber" onInput={handlerInputValue} value={bankCard?.numberCard} name="numberCard" type="text"/>
                        </div>
                        <div className="form-input">
                            <label htmlFor="cardHolder">Владелец карты</label>
                            <input id="cardHolder"  onInput={handlerInputValue} value={bankCard?.holderCard} name="holderCard" type="text"/>
                        </div>
                        <div className="form-row">
                            <div className="form-date">
                                <div className="form-input">
                                    <label htmlFor="cardMonth">Месяц</label>
                                    <input id="cardMonth" onInput={handlerInputValue} value={bankCard?.month} name="month" type="month"/>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="cardYear">Год</label>
                                    <input id="cardYear" onInput={handlerInputValue} value={bankCard?.year} name="year" type="date"/>
                                </div>
                            </div>
                            <div className="form-input">
                                <label htmlFor="cardCVS">CVS</label>
                                <input id="cardCVS" onInput={handlerInputValue} onFocus={handleFocusCvv} onBlur={handleUnFocusCvv} value={bankCard?.cvv} name="cvv" type="text"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CardStep;