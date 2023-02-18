import "./App.css";
import { useEffect,useState } from "react";
import axios from 'axios'; 
import Coin from "./components/Coin";


function App(){
    const [listOfCoins, setListOfCoins] = useState([]);
    const [searchWord,setSearchWord] = useState("");
    useEffect(()=>{
        axios.get('https://api.coinstats.app/public/v1/coins?skip=0')
        .then((response)=>{setListOfCoins(response.data.coins)})
    },[]);

    const filteredCoins = listOfCoins.filter((coin) => {                        //onChange={(e)=>{setSearchWord(e.target.value)}}
        return coin.name.toLowerCase().includes(searchWord.toLowerCase());
    }) 
    return <div className="App">
        <div className="heading">
        <h1 className="h-1">CryptoHunter</h1>    
        </div>
        <div className="header">
        <input class="input" id="text-input" type="text" onChange={(e)=>{setSearchWord(e.target.value)}} placeholder="search..."/>
        </div>
        <div className="display">{filteredCoins.map((coin)=>{
            return <Coin name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol}/>
        })}
        </div>
    </div>
}

export default App;