import React from 'react'

export default function MenuComp({menuItems}) {
    return (
        <div className="section-center">
            {menuItems.map((item,index)=>{
                const {id,title,img,desc,price}=item;
                return (
                  <article
                    key={index}
                    className="menu-item shadow little-padding"
                  >
                    <img src={img} className="photo" alt={title} />
                    <div className="item-info ">
                      <header>
                        <h4>{title}</h4>
                        <h4 className="price">${price}</h4>
                      </header>
                      <p className="item-text">{desc}</p>
                    </div>
                  </article>
                );
            })}
        </div>
    )
}
