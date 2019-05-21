import React, {Component} from 'react';
import Header from '../../components/Header/header';

export default class Main extends Component{
    render(){
        return (
            <div>
            <Header userName={"ItsRealTime"}/>
            <div className='container' >

                <div>

                    <div align="center" style={{marginTop: 20,}}>
                        <img src={"https://memegenerator.net/img/images/5955190.jpg"} alt=''/>
                    </div>
                    <div className="row" style={{marginTop: 40,}}>
                        <div className="col-md-2"></div>
                        <div className="col-md-10"  >
                            NickName : Oracle
                        </div>
                    </div>
                    <div className="row" style={{marginTop: 20,}}>
                        <div className="col-md-2"></div>
                        <div className="col-md-10"  >
                            Age / Gender : 1004 / Female
                        </div>
                    </div>
                    <div className="row" style={{marginTop: 20}}>
                        <div className="col-md-2"></div>
                        <div className="col-md-4"  >
                            Descriptrion:
                        </div>
                        <div className="col-md-6" ></div>
                    </div>
                    <div className="row " style={{margin: 20,}}>
                        <div className="col-md-2"></div>
                        <div className="col-md-8 description-container" style={{height:150}}>
                            <div style={{margin: 20}}>
                                라떼는 말이야... 
                                <br/>매트릭스보다 어벤져스가 인기가 더 많았어...
                                <br/>니들이 게맛을 알아?
                                <br/>사탕줄까? 아님 담배 한대?   
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-6" align="center">
                            <button>Like</button>
                        </div>
                        <div className="col-md-6" align="center">
                            <button>Hatred</button>
                        </div>

                    </div>
                </div>
            </div>
            </div>
        )
    }
}
