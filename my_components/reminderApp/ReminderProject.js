import React,{useState} from 'react'
import List from './List';
import data from './data';
export default function ReminderProject() {
    const [people, setPeople] = useState(data);
    return (
      <div className="margin-20">
        <h2 className="textCenter indicator titleHead">Reminder Project</h2>
        <main>
                <section className="container">
                    <h3><p>{people.length} birthdays today.</p></h3>
                <List people={people}/>
                <button onClick={()=>setPeople([])}>Clear all</button>
                </section>
        </main>
      </div>
    );
}
