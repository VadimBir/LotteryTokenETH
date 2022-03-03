/*
// BootStrap is ACTIVE and it is being imported in index.js by importing bootstrap.css file with a location. Also, there is a dependency for it.


//import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';

import Web3 from 'web3';
//import tokenContract from './lotteryToken.json'

import {MoralisProvider, useMoralis} from "react-moralis";
import Moralis from "moralis";


const moonbeam = 'https://rpc.api.moonbeam.network';
const web3 = new Web3(moonbeam);


//const Tx = require('ethereumjs-tx');
//const Web3t = require('web3');
//const web3 = new Web3(new Web3t.providers.HttpProvider(moonbeam));


// sending 0.5 tokens with 18 decimals

async function tesTrans(){
	const options = {type: "erc20",
		amount: Moralis.Units.Token("0.5", "18"),
		receiver: "0x0000000000000000000000000000000000000001",
		contractAddress: "0x1c3a9E4d5d7a90467a06Fc488C14AbAAcDCe5Eda"}
	let result = await Moralis.transfer(options)
}


/!*
var lotteryContractABI = new web3.eth.Contract(tokenContract);

var account = web3.eth.accounts[0];
if (web3.eth.accounts[0] !== account) {
                account = web3.eth.accounts[0];
                document.getElementById("address").innerHTML = account;
              }

const abi =  lotteryContractABI.abi;
const token = new web3.eth.Contract(abi, '0x10e1EFB9659a65c04855839083FB8BB71138bC2a');
const mywalletTest = '0x10e1EFB9659a65c04855839083FB8BB71138bC2a'
//const gasprice= await web3.eth.getGasPrice()
//var count = await web3.eth.getTransactionCount(myAccount)


var amountInDecimal = 150;
console.log("Hello");
const txObject = {
  from: mywalletTest,
  // nonce: "0x" + web3.utils.co count.toString(16),
  to: '0x0000000000000000000000000000000000000001',
  gas: 100000,
  value:"0x0",
  data:token.methods.transfer('0x153ed6D60AcaE6E915907233F10663462FF67622',
  web3.utils.toHex(web3.utils.toWei(amountInDecimal.toString(), "ether"))).encodeABI(),
  gasPrice: null //gasprice
}

console.log(txObject)

function Element() {

console.log("Hello World");


  return (
    <div>
      Hello World
    </div>
  );

};
*!/

function runcode() {
	Moralis.transfer({type: "native", receiver: "0xEa4a1Fc79D2DaE61BF5930CC4E67e63ef442dFAB",
				amount:Moralis.Units.ETH("0.15")})
	}
/!*async function  auth(){
			const { web3, enableWeb3, isWeb3Enabled, authenticate, isAuthenticated, user } = useMoralis();
		}*!/

function App() {

	const {  authenticate } = useMoralis();

		return( // if breket is on next line it does not render HTML
			<div className={"container"}>
			<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3/min.js"></script>
			<script src="https://npmcdn.com/moralis/dist/moralis.js"></script>
			<h1>Hello World</h1>
				<br/>
				<br/>
				<button onClick={ () => { }}>Auth</button>
				<button onClick={ () => {runcode() }}>Run Code</button>
			</div>
        );

}

export default App;



let contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "LGiveOneK",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "LMint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "balanceOfNowWallet",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "bamount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "chance",
				"type": "uint256"
			}
		],
		"name": "bet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burnFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "freezeAddr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amountFreeze",
				"type": "uint256"
			}
		],
		"name": "freezeSome",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "number",
				"type": "uint256"
			}
		],
		"name": "random",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			}
		],
		"name": "test_consolePrintsParams",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]*/


import React from "react";
import {useState} from "react";
import {useMoralis, useNativeBalance} from "react-moralis";


import Moralis from "moralis";
import { BscConnector } from '@binance-chain/bsc-connector'
export const bsc = new BscConnector({
  supportedChainIds: [56, 97] // later on 1 ethereum mainnet and 3 ethereum ropsten will be supported
})







function bet1000x2(data) {
Moralis.transfer({type: "erc20", receiver: "0x0000000000000000000000000000000000000001",
            amount: Moralis.Units.Token( data, "18"),contractAddress: "0x1c3a9E4d5d7a90467a06Fc488C14AbAAcDCe5Eda" })
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
            amount: Moralis.Units.Token("500", "18"),contractAddress: "0x1c3a9E4d5d7a90467a06Fc488C14AbAAcDCe5Eda" })
}
function bet100() {
Moralis.transfer({type: "erc20", receiver: "0x0000000000000000000000000000000000000001",
            amount: Moralis.Units.Token("100", "18"),contractAddress: "0x1c3a9E4d5d7a90467a06Fc488C14AbAAcDCe5Eda" })
}
function bet50x2() {
Moralis.transfer({type: "erc20", receiver: "0x0000000000000000000000000000000000000001",
            amount: Moralis.Units.Token("50", "18"),contractAddress: "0x1c3a9E4d5d7a90467a06Fc488C14AbAAcDCe5Eda" })
}

function NativeBalance() {
    const { getBalance, data: balance, nativeToken, error, isLoading } = useNativeBalance({ chain: "rinkeby" });

    console.log(balance.formatted)
    console.log("console log succesful")
    return <div>{balance.formatted}</div>;
  }

function App() {
    //const options = { chain: 'bsc', address: "0xe1b8D1A2D02B812c1891c503aE0AAAEf134f7fB0"}
    //const balances = Moralis.Web3API.account.getTokenBalances(options);




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
              <p>  { bsc.getAccount()} </p>
<p>T</p>


          </div>

        );

}

export default App;



