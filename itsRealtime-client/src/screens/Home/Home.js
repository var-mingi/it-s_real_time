import React, {Component} from 'react';
import Header from '../../components/Header/header';

export default class Main extends Component{
    render(){
        return (
            <div>
                <Header userName={"ItsRealTime"}/>
                <div align="center" className='container' >
                    <div  style={{marginTop: 20, marginBottom: 20}}>
                        <img src={"https://memegenerator.net/img/images/5955190.jpg"} alt=''/>
                    </div>
                    <div align='center' className=" description-container" style={{height:400}}>
                        <div style={{margin: 20}}>              
                            https://getbootstrap.com/docs/4.1/components/forms/ 
                            <br/>이거 읽으면서 빨리해 일단 간단한 유저 정보, 
                            <br/>이상형 등등일 입력하는 form layout을 만들어보고 
                            <br/>간단한 백엔드 구현뒤 연결해보자
                            <br/> ItsRealTime server도 새로 만들어야 겠넹
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
