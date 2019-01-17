import React,{ Component } from 'react';
import styles from './index.module.scss';
import webpackImg from './assets/webpack.jpg';

class App extends Component{
    render(){
        return(
            <div className={ styles.wrapper }>
                <h1 className={ styles.title }> react-cli  </h1>
                <img src={ webpackImg } alt=""/>
            </div>
        );
    }
}

export default App;