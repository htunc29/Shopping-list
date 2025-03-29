import Item from "./Item"
export default function List({items,onDeleteItem,onUpdateItem}) {
    if(items.length==0) return(
      <div className="p-3">
          <h3>Sepetin Boş</h3>
      </div>
    )
    return(
      <div >
        <ul className="list-group mt-3">
          {
            items.map((item,index)=>(<Item key={index} onDeleteItem={onDeleteItem} item={item} onUpdateItem={onUpdateItem}/>))
          }
        </ul>
      </div>
    )
  }