import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/* Column 1 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Bog'lanish</h4>
                            <ul className="list-unstyled">
                                <li><Link to="">Bog'lanish&nbsp; <i className="fa fa-phone" aria-hidden="true"/></Link></li>
                                <li><Link to="">+998 71 267-64-76&nbsp; <i className="fa fa-phone" aria-hidden="true"/></Link></li>
                                <li><Link to="">+998 90 224-04-90&nbsp; <i className="fa fa-phone" aria-hidden="true"/></Link></li>                                                                                             
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Sayt xaritasi</h4>
                            <ul className="list-unstyled">
                                <li><Link to="/">Bosh saxifa&nbsp; <i className="fas fa-home"/></Link></li>
                                <li><Link to="/news">Yangiliklar&nbsp; <i className="fa fa-newspaper-o" aria-hidden="true"/></Link></li>
                                <li><Link to="/contacts">Bog'lanish&nbsp; <i className="fa fa-phone" aria-hidden="true"/></Link></li>                                
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Sosial tarmoqlar</h4>
                            <ul className="list-unstyled">
                                <li><a href="https://www.facebook.com/Fuqaro-himoyasi-342526216666523/?modal=admin_todo_tour"><i className="fab fa-facebook fa-lg " />&nbsp;Facebook</a></li>
                                <li><a href="/"><i className="fab fa-instagram fa-lg " />&nbsp;Instagram</a></li>
                                <li><a href="https://t.me/fuqarohimoyasi"><i className="fab fa-telegram fa-lg " />&nbsp;Telegram</a></li>
                                <li><a href="https://www.youtube.com/channel/UC9WcB46Lvy61JuF-nbPoADg/videos"><i className="fab fa-youtube fa-lg " />&nbsp;Youtube</a></li>                                
                            </ul>
                        </div>
                        {/* Column 4 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Manzil</h4>
                            <ul className="list-unstyled">
                                <li><a href="https://goo.gl/maps/uxVBU8ddXhBKcpxD7"><i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;Mustaqillik shox ko'chasi 71 uy, Toshkent sh. O'zbekiston Respublikasi,<br/>100170</a></li>                                                           
                            </ul>                                                         
                        </div>                           
                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} FH news - All Rights Reserved
                        </p>
                    </div>
                </div> 
            </div> 
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}

.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
}

ul li a {
    color: var(--mainGrey);
}

ul li a: hover {
    color: var(--mainLightGrey)
}
`;