import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

function LineProgress(props) {
   const mainDiv = {
      width: "100px",
      paddingTop: "12px",
   };
   return (

      <div className=" w-full">
         <div className="flex justify-between">
            <div className="">
               <span className="px-5">1</span>
               <span>Magicbrics.com</span>
            </div>
            <div>
               {/* {props.Progress} */}
               <div style={mainDiv}>
                  <ProgressBar completed={props.progressValue.firstProgress} bgColor="#40a0e7" animateOnRender={true} width="70%" height="6px" isLabelVisible={false} />
                  <br></br>
               </div>
            </div>
         </div>

         <div className=" w-full">
            <div className="flex justify-between">
               <div className="">
                  <span className="px-5">2</span>
                  <span>Magicbrics.com</span>
               </div>
               <div>

                  <div style={mainDiv}>
                     <ProgressBar completed={props.progressValue.secondProgress} bgColor="#40a0e7" animateOnRender={true} width="70%" height="6px" isLabelVisible={false} />
                     <br></br>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default LineProgress;