import React, { useState } from 'react' ; 


const Display = (props) =>  {

    const zero = () => { 
        props.setBall(0) 
        props.setStrike(0)
    }
    return (
        <div>
            <div>
                <span>Balls:</span> <span data-testid="ball">{props.ball === 4 ? [props.setBall(0), props.setStrike(0)] : props.ball}</span>
            </div>
            <div data-testid="strike">
                Strike: {props.strike == 3 ? [props.setBall(0), props.setStrike(0)] : props.strike}
            </div>
            <div>
             {props.hit === true ? [props.setBall(0), props.setStrike(0)] : false}
            </div>
            <div>
                {/* Foul: {props.foul == 1 ? props.setStrike(props.strike + 1) : props.foul} */}
            </div>

        </div>
    )
}

export default Display;


// export function useDisplay(strike, ball){
//     const [strikevalue, setStrikeValue] = useState(strike);
//     const [ballvalue, setBallValue] = useState(ball); 

//     const strikeOrBall = newValue => { 
//         console.log('New value', newValue);
//         if(strikevalue === 3 || ballvalue === 4){
//             setStrikeValue(0); 
//             setBallValue(0); 
//         }
//     }
//     return [strikevalue, ballvalue, strikeOrBall]
// }

// export function useLocalStorage(key, strike, ball){
//     const [strikevalue, setStrikeValue, ballvalue, setBallValue] = useDisplay(() => {
//         return window.localStorage.getItem(key || strike || ball ) 
//     })

//     const strikeOrBall = (strike, ball)  => { 
//         setStrikeValue(strike);
//         setBallValue(ball); 
//         window.localStorage.setItem(key, strike, ball);
//     };
//     return [strikevalue, ballvalue, strikeOrBall];
// }