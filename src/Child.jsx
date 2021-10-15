import { useCallback, useEffect, useMemo, useState,memo } from "react";



function Child({ id, title, body, handleToggle }) {
    
    const [color, setColor] = useState("");

  // var randomColor = useMemo(()=> Math.floor(Math.random() * 16777215).toString(16),[]);
  //  randomColor = "#" + randomColor;
    
    // By using useMemo
    //  const colorGenerator = () => {
    //     setTimeout(() => {
    //         const randomColor = Math.floor(Math.random() * 16777215).toString(16); 
    //         setColor("#" + randomColor);
    //   }, 1000);
    
    // }
    // const MemoReturn = useMemo(() => colorGenerator(), []);

    // By using useCallback
    const colorGenerator = () => {
     const timer =  setTimeout(() => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16); 
            setColor("#" + randomColor);
      }, 1000);
        clearTimeout(timer);
    } 
    const r = Math.floor(Math.random() * 16777215).toString(16);
    const check = (a=r) => {
        return a;
    }
    const MemoReturn = "#" + useCallback(check(), []); console.log(MemoReturn);
  
    return (
        <div style={{ border: "1px solid black", width:"350px", margin:"20px auto" }}>
            <div style={{display:"flex"}}>
            <div>
                <div style={{width:"50px", height:"50px", backgroundColor:MemoReturn, margin:"10px"}}></div>
           </div>

            <div>
                <h3 style={{marginTop:"0px"}}>{title}</h3>
                <p>{body}</p>
            </div>
            </div>    
           <button onClick={handleToggle(id)}>Verify</button>
        </div>
    );
}

export default Child;