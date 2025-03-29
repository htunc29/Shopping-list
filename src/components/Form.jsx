import { useState } from "react";
export default function Form({onAddItem,onClearList}){
    const [title,setTitle]=useState("");
    const [quantity,setQuantity]=useState(1);
   
    function handleForSubmit(e) { 
      e.preventDefault()
      if(title){
        const item={id:Date.now(),title,quantity,completed:false};
        console.log(item)
        setTitle('')
        onAddItem(item);
        setQuantity(1)
      }
    
     }
    return(
      <form className="card" onSubmit={handleForSubmit}>
        
         <div className="card-body">
         <input className="form-control mb-3" type="text" placeholder="Ürün adı giriniz" onChange={(e)=>setTitle(e.target.value)} value={title}/>
         <select className="form-select mb-3" value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
         {
          Array.from({length:10},(_, i)=>i+1)
          .map(num=><option key={num} value={num}>{num}</option>)
         }
        </select>
         </div>
        <div className="card-footer ">
        <button type="submit" className="btn btn-primary mx-2">Ekle</button>
        <button type="button" onClick={onClearList} className="btn btn-danger">Temizle</button>
        </div>
      </form>
    )
  }