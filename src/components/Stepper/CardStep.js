import React from "react";

const CardStep = () => {
    return (
        <div className="card-wrapper">
        <div className="card-container">
            <div className="card">
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
                        <span>#</span>
                    </div>
                    <div className="card-information">
                        <div className="card-holder">
                            <div className="card-holder-title">Card Holder</div>
                            <div className="card-holder-fullname">
                                FULL NAME
                                <span className="card-holder-fullname-letter"></span>
                            </div>
                        </div>
                        <div className="expires">
                            <div className="expires-title">Expires</div>
                            <div className="expires-date">MM/YY</div>
                        </div>
                    </div>
                </div>
                <div className="card-back">
                    <div className="card-back-black-line"></div>
                    <div className="card-back-cvs">
                        <div className="cvs-text">CVS</div>
                        <div className="cvs-field"></div>
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
                            <input id="cardNumber" type="text"/>
                        </div>
                        <div className="form-input">
                            <label htmlFor="cardHolder">Владелец карты</label>
                            <input id="cardHolder" type="text"/>
                        </div>
                        <div className="form-row">
                            <div className="form-date">
                                <div className="form-input">
                                    <label htmlFor="cardMonth">Месяц</label>
                                    <input id="cardMonth" type="month"/>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="cardYear">Год</label>
                                    <input id="cardYear" type="date"/>
                                </div>
                            </div>
                            <div className="form-input">
                                <label htmlFor="cardCVS">CVS</label>
                                <input id="cardCVS" type="text"/>
                            </div>
                        </div>
                        <div className="form-button">
                            <button type="submit">Отправить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CardStep;