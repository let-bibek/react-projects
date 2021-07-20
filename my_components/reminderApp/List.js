import React from 'react'

export default function List(props) {
    return (
        <>
           {
               props.people.map((person)=>{
                   const {id,name,age,image}=person;
                   return (
                     <article key={id} className='person'>
                       <img src={image} alt={name}/>

                       <div>
                         <h4> {name}</h4>
                         <p>{age} years</p>
                       </div>
                     </article>
                   );
               })
           }
        </>
    )
}
