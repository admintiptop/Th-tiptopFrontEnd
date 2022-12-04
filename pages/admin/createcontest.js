import { useEffect, useState } from "react";
import { BsFillCheckCircleFill } from 'react-icons/bs';
import SideMenu from "../../components/SideMenu";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/router";
import axios from "axios";


const CreateContest = () => {


  const [prize, SetPrize] = useState([])
    //after api call, you should write to prizes with a mew variable "checked"
  
  const [sum,Setsum]=useState(0);
  const [indicator,setindicator] =useState(0); // 0 = not satisfied , 1 = satisfied, 2 = moreThantheshold
  const [buttonDisabled,SetButtonDisabled] =useState(true)

  useEffect(() => {
    getPrices();
  
  }, [])

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
  const [contestName,setContestName] =useState('');
  const [startDate,setstartDate] =useState('');
  const [endDate,setendDate] =useState('');
  const [numOfTickets,setNumOfTickets] =useState();



  const validationSchema = Yup.object().shape({
    contestName: Yup.string().required("contest Name is required"),
    startDate: Yup.string().required("start Date is required"),
    endDate: Yup.string().required("end Date is required"),
    numOfTickets: Yup.number()
      .required("Number Of Tickets is required")
      .max(15000000, "Number Of Tickets must be at lower than 15000000"),
    mainPrice: Yup.string().required('Selecting main prize is required')
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  // const onSubmit = async (e) => {
  //   // const employee = { name, email, passportNumber, password };
  //   // console.log(e);
  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(e, null, 4));
  //   // await fetch("http://localhost:3001/api/v1/auth/add-employee", {
  //   //   method: "POST",
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //     Authorization: "Bearer " + localStorage.getItem("accessToken"),
  //   //   },
  //   //   body: JSON.stringify(e),
  //   // }).then((res) => {
  //   //   if (res.status === 200) {

  //   //     router.push("http://localhost:3000/admin/addemployee")
  //   //   }
  //   // });
  // };

  const onSubmit=async(data) => {

    let arrayL = prize.filter((item)=>item.checked==1).map((item1)=>item1.name);
    // display form data on success

    console.log("arrayL",data)
    const res = await fetch("http://localhost:3001/api/v1/contests", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:data.contestName,
        startDate: data.startDate,
        endDate: data.endDate,
        ticketNumbers:data.numOfTickets,
        chooseprices:arrayL,
        mainPrice:data.mainPrice,
        status:"Active"
      }),
    });
   
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
}


// {
//   name:contestdata.contestName,
//   startDate: contestdata.endDate,
//   endDate: contestdata.startDate,
//   ticketNumbers:contestdata.numOfTickets,
//   chooseprices:["vill","van","Car"],
//   mainPrice:contestdata.mainPrice,
//   status:"Active"
// }
const getPrices = () => {
  axios.get("http://localhost:3001/api/v1/prices").then((response) => {
    SetPrize(response.data);
});
}



useEffect(() => {
  getPrices();

}, [])



  return (
    <div>
      <SideMenu />
      <div className="main-wrap">
        <div className="wrapSection">
          <div className="block active">
            <div className="create-contest">
              <h2>Create contest</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Contest name" name="contestName" {...register("contestName")} className={`form-control ${errors.contestName ? "is-invalid" : ""}`} />
                <span className="fieldname">Start date</span>
                <div className="invalid-feedback">{errors.contestName?.message}</div>
                <input type="datetime-local" id="s-date" name="startDate" {...register("startDate")} className={`form-control ${errors.startDate ? "is-invalid" : ""}`}/>
                <span className="fieldname">End date</span>
                <div className="invalid-feedback">{errors.startDate?.message}</div>
                <input type="datetime-local" id="e-date" name="endDate" {...register("endDate")} className={`form-control ${errors.endDate ? "is-invalid" : ""}`}/>
                <div className="invalid-feedback">{errors.endDate?.message}</div>
                <br/><br/>
                <input type="number" placeholder="Number of tickets" name="numOfTickets" {...register("numOfTickets")} className={`form-control ${errors.numOfTickets ? "is-invalid" : ""}`}/>
                <div className="invalid-feedback">{errors.numOfTickets?.message}</div>
                <div className="items">
                  {sum<100?(<h3>Choose prize <span className="NormalIndicator">{' ('+ sum +' % selected)'}</span></h3>)
                  :sum==100?(<h3>Choose prize <span className="OkIndicator">{' ('+ sum +' % selected)'} <BsFillCheckCircleFill/></span></h3>)
                  :(<h3>Choose prize <span className="ExeededIndicator">{' ('+ sum +' % selected)'}</span></h3>)
                }
                  {
                    prize.map((prize,index)=>(
                      <div className="item" key={index}>
                      <input type="checkbox" name={prize.name} id={prize.name} onChange={()=>{prize.checked=!prize.checked;prize.checked?calc(prize.winningChance):calcm(prize.winningChance)}}  />
                      <p>{prize.name}<span className="percentage"> {" ("+prize.winningChance+"%)"}</span></p>
                      </div>
                    ))
                  }
                </div>
                <span className="fieldname">Select main prize</span>
                <select name="mainPrice" id="" {...register("mainPrice")}>
                {
                    prize.filter(prize=>prize.checked==0).map((prize,index)=>
                     (
                        <option value={prize.name} key={index}>{prize.name}</option>
                      )
                      )
                  }
                </select>
                {
                  sum===100 ? (<button type="submit" disabled={false}>Create contest</button>)
                  :(<button type="submit" disabled={true} style={{backgroundColor:'grey'}}>Create contest</button>)
                }
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContest;
