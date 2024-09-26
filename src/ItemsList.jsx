import { useEffect, useState } from "react";

function Item({name,isPacked}) {
    // if (isPacked) 
    //     return (<li>{name}✓</li>);
    // return (<li>{name}</li>);
    return (<li>
        {isPacked ? name + ' ✓' : name}
    </li>);
}

export default function ItemsList() {
    const [Search ,setSearch] = useState("Type here!");
    useEffect(() => {
        console.log("This companent is loded!");

        return () => {
            alert("un loded!")
        } 
    })

    const Items=[{name:"Sunglasses",isPacked:true},
        {name:"Sunblock",isPacked:false},
        {name:"Swimming suit",isPacked:false},
        {name:"powerBank",isPacked:false}
    ];
    const filterList = Items.filter(i=>i.name.toLocaleLowerCase().includes(Search.toLocaleLowerCase()));
    const ItemsList=filterList.map(i=><Item key={i.name}
        name={i.name} isPacked={i.isPacked} />
    );
    // const Items=["Sunglasses" , "Sunblock" , "Swimming suit" , "Towel" ,"powerBank"];
    // const ItemsList=Items.map(i=><Item name={i}/>);
    // return (<ui>
    //     <Item name="Sunglasses" isPacked={true} />
    //     <Item name="Sunblock" isPacked={false} />
    //     <Item name="Swimming" isPacked={false} />
    //     <Item name="Towel" isPacked={false} />
    // </ui>);
    // return (<ui>
    //     {ItemsList}
    // </ui>);
    return (<>
        <input
            type="Text"
            onChange={event=>{setSearch(event.target.value)}}
        />
        <ui>
         {ItemsList}
    </ui>
    </>);
}