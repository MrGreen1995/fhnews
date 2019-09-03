import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contacts extends Component {
    render() {
        return (
            <section className="my-5 py-5">
                <div className="container">
                    <div className="well well-sm">
                        <h3><strong>Bizning manzil</strong></h3>
                    </div>                 
                    <div className="row">
                        <div className="col-md-7">
                        <iframe title="ABOUTUS" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.234057635172!2d69.31917901525753!3d41.32552350779125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4ef97e8232b%3A0xc934bba90486ab43!2zNzEg0L_RgNC-0YHQvy4g0JzRg9GB0YLQsNC60LjQu9C70LjQuiwg0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1563864267351!5m2!1sru!2s" 
                        width="100%" 
                        height="315px" 
                        frameBorder="0" 
                        style={{border:0}} 
                        allowFullScreen>                          
                        </iframe>
                        </div>
                        <div className="col-md-5">
                            <h4><strong> Biz bilan bog'laning </strong></h4>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Ism" required maxLength="26"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" required maxLength="30"/>
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control" placeholder="Telefon raqam" required maxLength="8"/>
                                </div>
                                <textarea className="form-control" cols="30" rows="3" placeholder="Xabar" required maxLength="500"/>
                                <Link to="/contacts" className="btn btn-outline-primary text-uppercase mt-1">
                                    <i className="fa-paper-plane-o" aria-hidden="true" />
                                    <i className="fab fa-telegram-plane" />&nbsp; Yuborish
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contacts;