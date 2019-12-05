import React, { useState } from 'react' ; 


const Dashboard = (props) =>  {


    return (
        <div>
            <button data-testid = "Btn1" onClick={() => props.setBall( props.ball+1)}>Balls</button>
            <button data-testid="Btn2" onClick={() => props.setStrike(props.strike + 1)}>Strikes</button>
            <button data-testid="Btn3" onClick = {() => props.setHit(true)}>Hit</button>
            
            
        </div>
    )
}

export default Dashboard;