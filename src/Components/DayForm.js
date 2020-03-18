import React from "react";
import data from '../resources/data';

 const DayForm =()=>{
  const dataList =data;
  console.log(dataList.days)
  return (
   
      <label >Day:
      <select id="activity">
     { dataList.days.map(e=>{
       return  <option value={e} key={e}>{e}</option>;
      })};
      </select>
      </label>
   
  )

}
export default DayForm;