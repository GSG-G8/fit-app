import React from "react";
import data from '../resources/data';

 const ActivityForm =()=>{
  const dataList =data;
  console.log(dataList.activity)
  return (
   
      <label >Activity Type:
      <select id="activity">
     { dataList.activity.map(e=>{
       return  <option value={e} key={e}>{e}</option>;
      })};
      </select>
      </label>
   
  )

}
export default ActivityForm;