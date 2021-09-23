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