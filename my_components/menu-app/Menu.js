import React,{useState} from 'react'
import Categories from './Categories'
import item from './data';
import MenuComp from './MenuComp';

export default function Menu() {
    const [menuItems, setMenuItems] = useState(item);
    const uniqueCategories = [
      "all",
      ...new Set(item.map((item) => item.category)),
    ];
    
    const fliterCategories=(category)=>{
      if(category==="all"){
       
        return setMenuItems(item);
      }
      const newItems=item.filter((item)=>item.category===category);
      setMenuItems(newItems);
    }
    return (
      <div>
        <section className="menu">
          <h3 className="textCenter indicator titleHead">Menu App</h3>
          <div className="title">
            <h3 className="title highlighter">Our menu</h3>
          </div>
          <Categories
            fliterCategories={fliterCategories}
            uniqueCategories={uniqueCategories}
           
          />
          <MenuComp menuItems={menuItems} />
        </section>
      </div>
    );
}
