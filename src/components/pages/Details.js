import React, { Component } from 'react';
import { InfoConsumer } from '../context';
import styled from 'styled-components';
import Reviews from '../Reviews';
import { Link } from 'react-router-dom';
 
class Details extends Component {    
    componentDidMount() {
        window.scrollTo(0,0);
    }    
    render() {
        return (
            <InfoConsumer>
                {data=>{
                    const {
                        id,
                        headerTitle,
                        headerSubTitle,
                        headerText,
                        img,
                        title,
                        maps,
                        description
                    } = data.detailInfo;

                    return (
                        <React.Fragment>
                            <HeaderDetails className="container-fluid align-items-center">
                                <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                                <h4 className="display-5">{headerSubTitle}</h4>
                                <p><em>{headerText}</em></p>                                
                            </HeaderDetails>
                            {/** Nav Links **/} 
                            <div className="container">
                                <ul className="nav nav-tabs">
                                    {/** About Place Tab **/} 
                                    <li className="nav-item">
                                        <a href="#aboutPlace" className="nav-link active" role="tab" data-toggle="tab">Ma'lumot</a>
                                    </li>
                                    {/** Review Place Tab **/} 
                                    {/*
                                    <li className="nav-item">
                                        <a href="#reviews" className="nav-link" role="tab" data-toggle="tab">Muxokamalar</a>
                                    </li>
                                    */}
                                    {/** Map Place Tab **/}                                     
                                    <li className="nav-item">
                                        <a href="#map" className="nav-link" role="tab" data-toggle="tab">Media</a>
                                    </li>
                                </ul>
                                {/** Tab Panel **/} 
                                <div className="tab-content mb-5">
                                    {/** About Tab  **/}
                                    <div id="aboutPlace" className="tab-pane in active text-center mt-5" role="tabpanel">
                                        <h2 className="mb-3">{title}</h2>
                                        <p style={{whiteSpace: 'pre-wrap'}}>{description}</p>
                                        <img src={img} alt={title} className="img-thumbnail img-fluid" />
                                    </div>
                                    {/** Review Tab  **/}
                                    <div id="reviews" className="tab-pane" role="tabpanel">
                                        <Reviews />
                                        <div className="container col-md-5">
                                            <form>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Ism" required maxLength="26"/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="Email" required maxLength="50"/>
                                                </div>
                                                    <textarea className="form-control" cols="30" rows="3" placeholder="Xabar" required maxLength="500" />
                                                <Link to="/notfoundpage" className="btn btn-outline-primary text-uppercase mt-1">
                                                    <i className="fa-paper-plane-o" aria-hidden="true" />
                                                    <i className="fab fa-telegram-plane" />&nbsp; Yuklash
                                                </Link>
                                            </form>
                                        </div>
                                    </div>
                                    {/** Map Tab  **/}
                                    <div id="map" className="tab-pane" role="tabpanel">
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe 
                                                className="embed-responsive-item mt-3"
                                                title="Video"                          
                                                src={maps} 
                                                frameBorder="0" 
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                                allowFullScreen>
                                            </iframe>
                                        </div>              
                                    </div>
                                </div>
                            </div>                           
                        </React.Fragment>
                    );
                }}
            </InfoConsumer>
            
        )
    }
}

export default Details;


const HeaderDetails = styled.header`
    background: linear-gradient(rgba(109,109,109), rgba(255,255,255));
    height: 55vh;
    text-transfrom: uppercase;
    color: var(--mainWhite);
    text-align: center;

    h1 {
        padding-top: 10%;
        color: var(--mainDark);
        font-size: 48px;
    }

    h4 {
        color: var(--mainDark);
    }

    p {
        padding-left: 10%;
        padding-right: 10%;
        margin-bottom: 10%;
        color: var(--mainDark);
    }

    i {
        font-size: 1.875rem;
        color: var(--mainDark);
    }

    i:hover{
        color: var(--mainBlue);
        cursor: pointer;
    }

    .nav-item {
        height: 18.75rem;
    }

    @media(max-width: 760px) {
        h1,
        h4{
            color: var(--mainWhite);
            font-size: 24px;
        }
    }
`;