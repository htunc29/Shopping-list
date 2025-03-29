export default function Item({item,onDeleteItem,onUpdateItem}){
    return(
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div>
        <input placeholder="Ürün Adı" type="checkbox" className="mx-2" checked={item.completed} onChange={()=>onUpdateItem(item.id)} />
        <span style={item.completed ? {textDecoration:"line-through"}:{}}>{item.quantity} {item.title}</span>
        </div>
        <button className="btn btn-danger text-white" onClick={()=>onDeleteItem(item.id)}>X</button>
      </li>
    )
  }