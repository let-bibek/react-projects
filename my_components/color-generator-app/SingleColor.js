import React,{useState,useEffect} from 'react'
export default function SingleColor({rgb,weight,index,hexColor}) {
    const [alert, setAlert] = useState(false);    
    let bcg=rgb.join(",");    
    let hexColorValue=`#${hexColor}`; 
useEffect(() => {
    const alertAutoRemover= setTimeout(()=>{
        setAlert(false);
    },3000);
   return(alertAutoRemover);
}, [alert])
    return (
      <article
        className={`color ${index > 10 && "color-light"}`}
        style={{ backgroundColor: `rgb(${bcg})` }}
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(hexColorValue);
        }}
      >
        <p className="percent-value">{weight}%</p>
        <p className="color-value">{hexColorValue}</p>
        {alert ? (
          <p className="alert color color-value ">Copied to the clipboard.</p>
        ) : (
          ""
        )}
      </article>
    );
}
