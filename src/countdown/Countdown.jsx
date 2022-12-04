import { t } from 'i18next';
import React, { useState, useRef, useEffect } from 'react'


const App = () => {
	const Ref = useRef(null);


	const [timer, setTimer] = useState('00:00:00');


	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / 1000 / 60 / 60) % 24);
		return {
			total, hours, minutes, seconds
		};
	}


	const startTimer = (e) => {
		let { total, hours, minutes, seconds }
					= getTimeRemaining(e);
		if (total >= 0) {

			setTimer(
				(hours > 9 ? hours : '0' + hours) + ':' +
				(minutes > 9 ? minutes : '0' + minutes) + ':'
				+ (seconds > 9 ? seconds : '0' + seconds)
			)
		}
	}


	const clearTimer = (e) => {


		setTimer('00:00:00');

		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;
	}

	const getDeadTime = () => {
		let deadline = new Date();

		
		deadline.setSeconds(deadline.getSeconds() + 100000);
		return deadline;
	}


	useEffect(() => {
		clearTimer(getDeadTime());
	}, []);


	const onClickReset = () => {
		clearTimer(getDeadTime());
	}

    const sell ={
        color: "rgb(206, 234, 46)",
        fontSize: "15px"
    }

   
	return (
		<div className="App">
			<h2 style={{color: ' rgb(206, 234, 46)',
			 fontSize: "17px" ,
			  marginLeft: "250px", fontFamily: "sans-serif"}}><span style={sell}>  {t("sale")} </span> {timer} {t("left")}</h2>
			{/* <button onClick={onClickReset}>Reset</button> */}
		</div>
	)
}

export default App;
