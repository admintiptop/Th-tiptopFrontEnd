import { useState } from "react";
import { BsFillCheckCircleFill } from 'react-icons/bs';
import SideMenu from "../../components/SideMenu";

const CreateContest = () => {

  const [contestName,setContestName] =useState('');
  const [startDate,setstartDate] =useState('');
  const [endDate,setendDate] =useState('');
  const [numOfTickets,setNumOfTickets] =useState(0);
  
    //after api call, you should write to prizes with a mew variable "checked"
  const [prizes, SetPrizes] =useState([
      {id:1,
        name:'$24',
        winningChance:50,
        checked:0
      },
      {id:2,
        name:'$46',
        winningChance:30,
        checked:0
      },
      {id:3,
        name:'$67',
        winningChance:10,
        checked:0
      },
      {id:4,
        name:'$140',
        winningChance:5,
        checked:0
      },
      {id:5,
        name:'$150',
        winningChance:5,
        checked:0
      },{id:6,
        name:'$46',
        winningChance:30,
        checked:0
      },
    ])
  const [sum,Setsum]=useState(0);
  const [indicator,setindicator] =useState(0); // 0 = not satisfied , 1 = satisfied, 2 = moreThantheshold
  


  function calc(val){
    let newsum
    newsum =sum +val;
    Setsum(newsum);
    console.log(newsum)
    if(sum<100){
      setindicator(0)
    }else if(sum===100){
      setindicator(1)
    }else{
      setindicator(2)
    }
    console.log(indicator)
    return indicator;
  }

  function calcm(val){
    let newsum
    newsum =sum -val;
    console.log(newsum)
    Setsum(newsum);
    if(sum<100){
      setindicator(0)
    }else if(sum===100){
      setindicator(1)
    }else{
      setindicator(2)
    }
    console.log(indicator)
    return indicator;
  }

  function summation(a,b){
    console.log(a+b)
    return a+b;
  }

  return (
    <div>
      <SideMenu />
      <div className="main-wrap">
        <div className="wrapSection">
          <div className="block active">
            <div className="create-contest">
              <h2>Create contest</h2>
              <form action="">
                <input type="text" placeholder="Contest name" name="contestName" value={contestName} onChange={(e)=>{console.log(e.target.value);setContestName(e.target.value)}} />
                <span className="fieldname">Start date</span>
                <input type="datetime-local" id="s-date" name="startDate" value={startDate} onChange={(e)=>{console.log(e.target.value);setstartDate(e.target.value)}}/>
                <span className="fieldname">End date</span>
                <input type="datetime-local" id="e-date" name="endDate" value={endDate} onChange={(e)=>{console.log(e.target.value);setendDate(e.target.value)}}/>
                <br/><br/>
                <input type="number" placeholder="Number of tickets" name="numOfTickets" value={numOfTickets} onChange={(e)=>{console.log(e.target.value);setNumOfTickets(e.target.value)}}/>
                <div className="items">
                  {sum<100?(<h3>Choose prize <span className="NormalIndicator">{' ('+ sum +' % selected)'}</span></h3>)
                  :sum==100?(<h3>Choose prize <span className="OkIndicator">{' ('+ sum +' % selected)'} <BsFillCheckCircleFill/></span></h3>)
                  :(<h3>Choose prize <span className="ExeededIndicator">{' ('+ sum +' % selected)'}</span></h3>)
                }
                  {
                    prizes.map((prize)=>(
                      <div className="item" key={prize.id}>
                      <input type="checkbox" name={prize.name} id={prize.name} onChange={()=>{prize.checked=!prize.checked;prize.checked?calc(prize.winningChance):calcm(prize.winningChance)}}  />
                      <p>{prize.name}<span className="percentage"> {" ("+prize.winningChance+"%)"}</span></p>
                      </div>
                    ))
                  }
                </div>
                <span className="fieldname">Select main prize</span>
                <select name="" id="">
                {
                    prizes.filter(prize=>prize.checked==0).map((prize)=>
                     (
                        <option value={prize.name} key={prize.id}>{prize.name}</option>
                      )
                      )
                  }
                </select>
                <button>Create contest</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContest;
