import React,{useEffect} from 'react'

export default function Alert({ type, msg, removeAlert,list }) {
  useEffect(() => {
    const alertRemover = setTimeout(() => {
      removeAlert();
    }, 2000);
    return ()=>clearTimeout(alertRemover);
  }, [list,removeAlert]);
  return (
    <>
      <p className={`alert-toast ${type} text-center`}>{msg}</p>
    </>
  );
}
