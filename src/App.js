import logo from './logo.svg';
import './App.css';

import CharacterCard from './component/CharacterCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function App() {

	let [hogor, setHogor]=useState("")
	let [kitgor, setKitgor]=useState("")
	let [cupgor, setCupgor]=useState("")
	let [captain, setCaptain]=useState("")
	let [sanho, setSanho]=useState("")
	let [kk, setKk]=useState("")

	const hogorClick=()=>{
		if (hogor=="primary"){
			setHogor("")
			return
		}
		setHogor("primary")
		return
	}

	const kitgorClick=()=>{
		if (kitgor=="primary"){
			setKitgor("")
			return
		}
		setKitgor("primary")
		return
	}

	const cupgorClick=()=>{
		if (cupgor=="primary"){
			setCupgor("")
			return
		}
		setCupgor("primary")
		return
	}

	const captainClick=()=>{
		if (captain=="primary"){
			setCaptain("")
			return
		}
		setCaptain("primary")
		return
	}

	const sanhoClick=()=>{
		if (sanho=="primary"){
			setSanho("")
			return
		}
		setSanho("primary")
		return
	}

	const kkClick=()=>{
		if (kk=="primary"){
			setKk("")
			return
		}
		setKk("primary")
		return
	}

	const calculate=()=>{
		if (cupgor=="primary"){
			alert("因為有CupGor, 所以出街食, 原因:不明")
			return
		}
		if (captain=="primary"){
			alert("因為有Captain, 所以我地唔比打邊爐, 佢條女會鬧佢")
			return
		}
		alert("食乜都得, 點食都得")
		return
	}

	return (
		<div className="App mx-5">
			<span>想知出去食定去豪哥到食?</span>
			<br/>
			<span>首先，邊個會去食飯先?</span>
			<div className="row">	
				<CharacterCard name="豪哥" desc="痴線佬一個" imgsrc="on9jai.png" clicked={hogor} onclick={hogorClick}/>
				<CharacterCard name="KitGor" desc="傻鳩一個" imgsrc="kitgor.png" clicked={kitgor} onclick={kitgorClick}/>
				<CharacterCard name="CupGor" desc="弱智仔一個" imgsrc="cupgor.png" clicked={cupgor} onclick={cupgorClick}/>
				<CharacterCard name="Captain" desc="唔知邊鳩個" imgsrc="captain.png" clicked={captain} onclick={captainClick}/>
				<CharacterCard name="生豪" desc="on9仔一個" imgsrc="sanho.png" clicked={sanho} onclick={sanhoClick}/>
				<CharacterCard name="淇仔" desc="廢鳩一個" imgsrc="kk.png" clicked={kk} onclick={kkClick}/>
			</div>

			<Button onClick={calculate}>即刻計下</Button>
		</div>
	);
}

export default App;
