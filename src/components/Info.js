import React, { Component } from 'react'
import { InfoConsumer } from './context';
import { Link } from 'react-router-dom';

class Info extends Component {
    render() {
        
        const {
            id,
            headerTitle,
            headerSubTitle,
            headerText,
            img
        } = this.props.item;

        return (
            <InfoConsumer>
                {value=>(
                    <div className="col-10 col-lg-4 mx-auto mb-5 mt-5">
                    <div className="card shadow-lg bg-white rounded" style={{width: '18rem', height: '30rem'}}>
                        <img className="card-img-top" src={img} alt={headerTitle} />
                        <div className="card-body">
                            <h4 className="card-title text-uppercase">{headerTitle}</h4>
                            <h6 className="card-title">{headerSubTitle}</h6>
                            <p className="card-text">{headerText}</p>
                            <Link onClick={() => value.handleDetail(id)} to="/details" className="btn btn-outline-primary text-uppercase card-link">Batafsil&nbsp;<i className="fas fa-angle-double-right"/></Link>
                        </div>
                    </div>
                </div>
                )            
                }
            </InfoConsumer>
        )
    }
}
export default Info;