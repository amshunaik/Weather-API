import './App.css';
//import Description from './components/New_add/desp.jsx';
import cold from './components/images1/snow1.jpg';
import hot from './components/images1/hot_summer.jpg';
import Description from './components/New_add/desp';
import { useState,useEffect } from 'react';
//import Today from './components/New_add/time';
//import top_button from './New_add/top_button';
/*import UilReact from '@iconscout/react-unicons/icons/uil-react'*/
//import Expenseit from './components/ExpenseItem'
import { getformat } from './components/New_add/weather_service';
//import { MdOpacity } from 'react-icons/md';

function App() {
    const [bkgd,setBg]=useState(hot);
	const [city,setCity]=useState('paris');
	const [weather,setweather]=useState(null);
	const [units ,setUnits]=useState("metric");
	//const [longitude,setlon]=useState(null);
	const [dateState, setDateState] = useState(new Date());
    /*useEffect(() => {
           setInterval(() => setDateState(new Date()), 30000);
    }, []);*/


	useEffect(() => {
		setInterval(() => setDateState(new Date()), 30000);
		const fetchdata= async()=>{
			const data=await getformat(city,units);
			setweather(data);

			const c = units ==="metric" ? 20 : 60;
			///console.log(data.temp);
			if(data.temp<=c){
				setBg(cold);

			} 
			else {
				setBg(hot);
			}

		};
		
		fetchdata();
	}, [units,city]);

	/*const time=(e)=>{
		console.log(e);
		let f=new Date(e*1000);
		//setlon(f);
		//console.log(f)
		setlon(f);
		
	}*/

	const handleInput =(e) =>{
		const but=e.currentTarget;
		const currentunit=but.innerText.slice(1);
		const isCelsius=currentunit==='C';

		but.innerText=isCelsius? '°F': '°C';
		setUnits(isCelsius? 'metric':'imperial');


	};
	const textEntered = (e) => {
		if(e.keyCode === 13){
			setCity(e.currentTarget.value);
			e.currentTarget.blur();
			


			/*console.group(city);*/
		}
	};
	

	const sty={
		backgroundImage: `url(${bkgd})`,
		//backgroundColor:'#22e5e5',
		//backgroundColor:'background-red',
		backgroundSize:'cover',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'center',
		
		

	};
	

  return (
   <div className='App' >
	    <div className="king" style={sty}>
			<h1 className='heading'>Weather ForeCast</h1>
	    	<div className="overlay">
				{	
				weather && (
					<div className="container">
					<div className="section_inputs">
						<div className='sec_in1'>
						    <input onKeyDown={textEntered}type="text" name="city" autocomplete ="off" onfocus="this.value=''" placeholder='Enter City...'/>
						</div>
						<div className='sec_in2'>
						    <button onClick={(e)=>handleInput(e)}>°F</button>
						</div>
						
						<div className="current_date">
                           
                            <p>
                             
                              {dateState.toLocaleDateString('en-GB', {
                                 day: 'numeric',
                                 month: 'short',
                                 year: 'numeric',
                              })}
                            </p>
                            
                            <p>
                             {dateState.toLocaleString('en-US', {
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true,
                            })}
                            </p>
                        </div>
					</div>
					<div className='info'>
					    <div className='coordinate'>
					    	<h2>Coordinate of {`${weather.name}`}</h2>
					    	<div className='c1'>
					    	    <h3 className='coord1'>Longitude :{`${weather.lon}`}</h3>
					    	</div>
					    	<div className='c2'>
					    	    <h3 className='coord2'>Latitute:{`${weather.lat}`}</h3>
					    	</div>
					    </div>
					    <hr />
					    <div className='timestamp'>
					    	
					    	<h2>Sunrise time : {`${new Date(`${weather.sunrise}`*1000)}`.slice(15)}</h2> 
					    	<h2>Sunset time :{`${new Date(`${weather.sunset}`*1000)}`.slice(15)}</h2>
    
					    </div>
					</div>
					
					<div className="section_temp">
						<div className="icon">
						    	
						    <h3 className='icon1'>{`${weather.name},${weather.country}`}</h3>
						    <img src={weather.iconURL}
							
							alt="weater icon"></img>
						    <h3 className='icon3'>{weather.description}</h3>
						</div>
						
					    <div className="temp">
					    	<h1>{`${weather.temp.toFixed()} °${units ==="metric"?"C":"F"}`}</h1>
					    </div>

					</div>
					<Description weather={weather} units={units}/>

				</div>

					)

				}
				
			</div>
		</div>
	   
	</div>
		

  );
}

export default App;
/*{`${new Date(`${weather.sunrise}`*1000)}`}*/

  /////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// React course Udemy//
//import logo from './logo.svg';

/*import './App.css';
//import Expenseit from './components/ExpenseItem'
import Expense from './components/Cost/Expense';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Cost/ExpenseFilter';
 //let name="Amshu";
function App() {

  const expenses=[{tit:'vghvg',amount:50, date:new Date(2021,1,8)},
  {tit:'ahgbc',amount:85, date:new Date(2021,2,8)},
  {tit:'vgv',amount:150, date:new Date(2021,8,8)},
  {tit:'auihkbc',amount:250, date:new Date(2021,3,8)}
];
  const addNew = expenses=>{
	console.log('In App.js');
	console.log(expenses);
  }
  return (
    <>
    <nav className="s">
      <h1>Lets get started!</h1>
      <NewExpense  onAddNew={addNew}/>
	  <ExpensesFilter/>

      <Expense exp={expenses}></Expense>
      

      

    </nav>
    </>

  );
}

export default App;*/


/////////////////////////////////////////////////////
// FSM design//
/*
import { useState } from 'react';
import './App.css';
import Editor from "@monaco-editor/react";
import Navbar from './components/Navbar';
import Axios from 'axios';
import spinner from './spinner.png';
//import '../mybackend./kite'

function App() {

// State variable to set users source code
const [userCode, setUserCode] = useState(``);

// State variable to set editors default language
const [userLang, setUserLang] = useState("python");

// State variable to set editors default theme
const [userTheme, setUserTheme] = useState("vs-dark");

// State variable to set editors default font size
const [fontSize, setFontSize] = useState(20);

// State variable to set users input
const [userInput, setUserInput] = useState("");

// State variable to set users output
const [userOutput, setUserOutput] = useState("");

// Loading state variable to show spinner
// while fetching data
const [loading, setLoading] = useState(false);

const options = {
	fontSize: fontSize
}

// Function to call the compile endpoint
function compile() {
	setLoading(true);
	if (userCode === ``) {
	return
	}

	// Post request to compile endpoint
	Axios.post(`http://localhost:5000/compile`, {
	code: userCode,
	language: userLang,
	input: userInput }).then((res) => {
	setUserOutput(res.data.output);
	}).then(() => {
	setLoading(false);
	})
}

// Function to clear the output screen
function clearOutput() {
	setUserOutput("");
}

return (
	<div className="App">
	<Navbar
		userLang={userLang} setUserLang={setUserLang}
		userTheme={userTheme} setUserTheme={setUserTheme}
		fontSize={fontSize} setFontSize={setFontSize}
	/>
	<div className="main">
		<div className="left-container">
		<Editor
			options={options}
			height="calc(100vh - 50px)"
			width="100%"
			theme={userTheme}
			language={userLang}
			defaultLanguage="python"
			defaultValue="# Enter your code here"
			onChange={(value) => { setUserCode(value) }}
		/>
		<button className="run-btn" onClick={() => compile()}>
			Run
		</button>
		</div>
		<div className="right-container">
		<h4>Input:</h4>
		<div className="input-box">
			<textarea id="code-inp" onChange=
			{(e) => setUserInput(e.target.value)}>
			</textarea>
		</div>
		<h4>Output:</h4>
		{loading ? (
			<div className="spinner-box">
			<img src={spinner} alt="Loading..." />
			</div>
		) : (
			<div className="output-box">
			<pre>{userOutput}</pre>
			<button onClick={() => { clearOutput() }}
				className="clear-btn">
				Clear
			</button>
			</div>
		)}
		</div>
	</div>
	</div>
);
}

export default App;

*/