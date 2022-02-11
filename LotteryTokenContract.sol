// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "cconsole.sol";
import "@openzeppelin/contracts@4.4.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.4.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.4.2/access/Ownable.sol";

contract MyTokenTest is ERC20, ERC20Burnable, Ownable {
    address sender = msg.sender;
    uint256 toFreezeAmount = 0;
    address gamblingWallet_x2 = 0x0000000000000000000000000000000000000001;
    address gamblingWallet_x3 = 0x0000000000000000000000000000000000000003;
    address gamblingWallet_x10 = 0x0000000000000000000000000000000000000010;
    uint256 cutDecimals = 10 ** 18; // mult by this would give full coins
    //mapping(address => uint256) public _balances;
    constructor() ERC20("MyTokenTest", "VB") 
    { 
        _mint(msg.sender, 1000000 * cutDecimals); // <= this 10 power 18 gives one single coin, in remix when bet is 1000 it means 0.000..1000// still confused how this works
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount * cutDecimals);
    }

// bug is tat amount is burning so its zero 

// the bet, rewardSystem and randomiser are the LTS and they do the job, burn and mit
    function bet(address addr, uint256 bamount, uint256 chance ) public { // the way how this func is made it would work only on remix and addr needs to be users, basically this func would need to be modded to make it workable outside of remix
        bool boolean;
        uint256 amount = bamount; // was testing this, need to remove it to save some EG EthGas
        // some burned, then gamble, if win mint back with reward and if lost mint the reward to another address
        _burn(addr, bamount); // this does burn some 
        console.log("some should have burned");

        uint256 winNum = random(100); //40; //randomiser(); // --------------------- here I need to use the rand func to take the rand number 
        if (chance > winNum) {
            boolean = false; // is Lost bool
        } else {
            boolean = true; // is Won bool 
        }
        console.log("Have result");
        rewardSystem(addr, boolean, chance, amount); // here we know if user won or not so we need to do the aftermath, either mint his reward or mint the profit to the system
    }

    // this produces some random number but needs testing 
    function random(uint number) public view returns(uint){
        for (uint i = 1; i<150; i++ ) {
        console.log("t", i);
        }
        return uint(keccak256(abi.encodePacked(block.timestamp,block.difficulty,  
        msg.sender, i))) % number;
    }

    function rewardSystem(address addr ,bool boolean, uint256 chance, uint256 amount) private{ // solidity seems not to have float points ... 
        console.log("tag 1");
        if (boolean == true ){
            console.log("tag true");
            console.log("eQ", (amount/chance)*100 ); // $$$ have to change from 50 to chance to allow other probabilities and other rewards

            
           _mint(addr, (amount/chance)*100 );  // amount+amount*(1/(chance/100)) <= (issue - chance is transformed to float and solidity has no floats, but error that is gives does not say it)this is the formula on how the reward is going to be calc ed
           console.log("tag after mint back");
        } else {
            console.log("tag else ");
            _mint(owner(), amount/20); // div by 20 coz it == to 5% and there are no floats
        }
        console.log("tag");
    }

    function randomiser() private returns(uint){ // this func would be returning from 0.00 to 100.00 where user probability would be somewhere there // becuase solidity does not have floats consiquently its gonna be from 0 to 10000 or another approach
        uint num =10;
        return num;
        //returns(uint) 
    }

    /*
    function test_randomLoop(uint size) public view returns(uint[] memory) {
        uint i = 1;
        //uint size = 10;
        uint[] memory a = new uint[](size);
        for (i=1; i<=size; i++) {  //for loop example
            //uint256 num = random();
            a[i-1]=random(10000);
            //a[1]=1;
            //a[3]=3;
            //console.log("ramndom number check", random(10000));
        //} 
        }
        return a;
    }
    */

    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
        // need to do one big if check for if it is a designated address, this way whne person is not betting there would be only one if check, and if its a gambling address there would be other checks for which one, more as a switch case
        if (recipient==gamblingWallet_x2){
            bet(msg.sender, amount, 50);
            return true;
        }else if (recipient==gamblingWallet_x3){
            bet(msg.sender, amount, 33);
            return true;
        }else{
            _transfer(_msgSender(), recipient, amount);
            return true;
        }
    }
    

    function test_consolePrintsParams(address recipient) public{
        console.log("test ....");
        console.log("recipient = ", recipient);

    }


    // this func does small lag 0,1s 


    function LMint( uint256 amount) public  { // this func allows to mint coins to a current address but possible to pass how much to mint, non owner can use it
        
        sender = msg.sender;
        _mint(sender, amount * cutDecimals);
    }
    function LGiveOneK() public  { // this func allows to mint coins to a current address and give 1k, non owner can use it
        uint256 amount = 1000;
        sender = msg.sender;
        console.log("giving 1k");
        _mint(sender, amount * cutDecimals);
    } 
    function freezeSome(address freezeAddr, uint256 amountFreeze) public onlyOwner {
        
    }






    // we can do func nameFunc() public PURE/VIEW 
    // the pure means that nothings is changing nothing is modded, however, view allows to interact with other func and not changing it
    // both PURE/VIEW args are making a func to be from yellow to blue and means that they do not mod anything (can be considered as "safe" func to use) 
    // more explanation is here: https://www.youtube.com/watch?v=cdwz3bnhHrs

    // This func works correctly, run of this func takes 45.5k gas
    /*
    function currentWalletBalanceOf() public view returns (uint256) {  // a finding == when making this working func, it would be yellow, yellow colour of means that it is modifyable, it can do some changes, when there is a pure parameter after public, it makes a func blue, indicating that it is not modifying func
        //uint256 senderBalance = _balances[sender];        // this does not work, when used it returns zero when there are some funds
        //return getterCurrentWalletBalanceOf();
        return balanceOf(msg.sender); 
    } 
    */


    function balanceOfNowWallet() public view returns (uint256) {  // a finding == when making this working func, it would be yellow, yellow colour of means that it is modifyable, it can do some changes, when there is a pure parameter after public, it makes a func blue, indicating that it is not modifying func
        return balanceOf(msg.sender); 
    } 
    


    /*
    function gamblingLT() public
    {

    }
    */
}
