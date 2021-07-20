import React,{useState,useEffect} from 'react'
import Loading from '../Loading';
import Tours from './Tours';
const url = "https://course-api.com/react-tours-project";
export default function ToursApp() {
        
    const tilte = <h3 className='textCenter indicator titleHead'>Tours App</h3>;
    const [loading, setLoading] = useState(1);
    const [tours, setTours] = useState([]);
    const [errorMessage, setErrorMessage] = useState(0);
    const removeTour=(id)=>{
        const newTour=tours.filter((tour)=>tour.id!==id);
        setTours(newTour);
    }
    const fetchTour=async()=>{
        setLoading(1);
        try {
            const response=await fetch(url);
            const tours=await response.json();
            setLoading(0);
            setTours(tours);
            
        } catch (error) {
            setLoading(0);
         setErrorMessage(1);
           

        }
    }
    useEffect(()=>{
       fetchTour();
    },[])
    if(loading){
        return(
            <main>
                <Loading/>
            </main>
        )
    }
    if(tours.length===0){
       return (
         <main>
           <div className="title">
             {tilte}
             {errorMessage ? <p className="error">Sorry, Some error occurred. Please, refresh.</p> : <h2>No data to fetch.</h2>}
             <button className="btn" onClick={fetchTour}>
               Refresh
             </button>
           </div>
         </main>
       );
    }
    return (
      <div>
        {tilte}
        <Tours tours={tours} removeTour={removeTour}/>
      </div>
    );
}
