import React from 'react';
import './BurgerMenu.css'

class BurgerMenu extends React.Component {
    constructor(){
        super();
        this.state = {
            isShow: true
        }
        this.switchState = () =>{
            this.setState(value =>({
                isShow: !value.isShow
            }))
            console.log(this.state.isShow);
        }
        this.status = (value) => {
            if(this.state.isShow === true){
               return {value: 'menu-shown'}
            }
               return {value: 'menu-hidden'}
            }
    }


    render(){
        const MenuStatus = this.state.isShow === true ? 'menu-show' : 'menu-hidden'
        return(
            <div>
                <div onClick={this.switchState}>On/Off</div>
                <div className={MenuStatus}>Text</div>
            </div>
        )
    }
}

export default BurgerMenu