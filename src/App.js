import React from "react";
import {useState} from "react";
import {useMoralis, useNativeBalance} from "react-moralis";

import Moralis from "moralis";
import { BscConnector } from '@binance-chain/bsc-connector'

// testing other way
export const bsc = new BscConnector({
  supportedChainIds: [56, 97] // later on 1 ethereum mainnet and 3 ethereum ropsten will be supported
})


//functions that are called when button is being pressed and would send a transaction to a destination address
function bet1000x2(data) {
Moralis.transfer({type: "erc20", receiver: "0x0000000000000000000000000000000000000001",
            amount: Moralis.Units.Token( data, "18"),contractAddress: "0xe1b8D1A2D02B812c1891c503aE0AAAEf134f7fB0" })
}
function customBetForx3(datax3) {
Moralis.transfer({type: "erc20", receiver: "0x0000000000000000000000000000000000000003",
            amount: Moralis.Units.Token( datax3, "18"),contractAddress: "0xe1b8D1A2D02B812c1891c503aE0AAAEf134f7fB0" })
}
function customBEP20Forx2(datax2) {
Moralis.transfer({type: "erc20", receiver: "0x0000000000000000000000000000000000000001",
            amount: Moralis.Units.Token( datax2, "18"),contractAddress: "0xe1b8D1A2D02B812c1891c503aE0AAAEf134f7fB0" })
}
function bet500x2() {
Moralis.transfer({type: "erc20", receiver: "0x0000000000000000000000000000000000000001",
            amount: Moralis.Units.Token("500", "18"),contractAddress: "0xe1b8D1A2D02B812c1891c503aE0AAAEf134f7fB0" })
}
function bet100() {
Moralis.transfer({type: "erc20", receiver: "0x0000000000000000000000000000000000000001",
            amount: Moralis.Units.Token("100", "18"),contractAddress: "0xe1b8D1A2D02B812c1891c503aE0AAAEf134f7fB0" })
}
function bet50x2() {
Moralis.transfer({type: "erc20", receiver: "0x0000000000000000000000000000000000000001",
            amount: Moralis.Units.Token("50", "18"),contractAddress: "0xe1b8D1A2D02B812c1891c503aE0AAAEf134f7fB0" })
}

function NativeBalance() {
    const { getBalance, data: balance, nativeToken, error, isLoading } = useNativeBalance({ chain: "rinkeby" });

    console.log(balance.formatted)
    console.log("console log succesful")
    return <div>{balance.formatted}</div>;
  }

function App() {

    //collecting input data from user
    const [data, setData] = useState();
    function getData(val)
    {
        setData(val.target.value)
        console.warn(val.target.value)
    }
    const [datax3, setx3Data] = useState();
    function getx3CusData(valx3)
    {
        setx3Data(valx3.target.value)
        console.warn(valx3.target.value)
    }
    const [BEP20datax2, setBEP20Datax2] = useState();
    function getx3BEP20Data(BEP20valx2)
    {
        setBEP20Datax2(BEP20valx2.target.value)
        console.warn(BEP20valx2.target.value)
    }

    //functions from moralis that could be used to do something
    const { authenticate, isAuthenticated, user } = useMoralis();
        return (
          <div>
            <button onClick={() => authenticate()}>Authenticate</button>
              <br/>
              <br/>
              <input name="ETHtokens" type="text" onChange={getData}/>
                <button onClick={ () => {bet1000x2(data) }}>Custom Value for x2 Bet</button>
              <h6>You will send {data}</h6>
                <input name="ETHtokens" type="text" onChange={getx3CusData}/>
                <button onClick={ () => {customBetForx3(datax3) }}>Custom Value for x3 Bet</button>
              <h6>You will send {datax3}</h6>
                <input name="ETHtokens" type="text" onChange={getx3BEP20Data}/>
                <button onClick={ () => {customBEP20Forx2(BEP20datax2) }}>Custom Value for x2 BEP20 Bet</button>
              <h6>You will send {BEP20datax2}</h6>
              <br/>
              <br/>
              <button onClick={ () => {bet500x2() }}>x2 500VB Bet</button>
              <button onClick={ () => {bet100() }}>x2 100VB Bet</button>
              <button onClick={ () => {bet50x2() }}>x2 50VB Bet</button>

              <p>T</p>
  {/* // this is comenting out a part of html
              <p>  { bsc.getAccount()} </p>
   the end part of comment out block */}
              <p>T</p>

          </div>
        );
}

export default App;



