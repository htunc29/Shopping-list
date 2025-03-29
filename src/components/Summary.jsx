export default function Summary({items}){
    if(items.length===0){
      return(
      <footer className="fixed-bottom bg-dark text-white p-3">
        <div className="container">
        <p>Alışveriş Listenizi Hazırlamaya Başlayın</p>
        </div>
      </footer>
      )
    }
    const itemsCount=items.length;
    const completedItemsCount=items.filter(item=>item.completed).length;
    return(
     
      <footer className={`fixed-bottom text-white p-3 ${itemsCount==completedItemsCount ? "bg-success":"bg-dark"}`}>
        <div className="container">
        {itemsCount===completedItemsCount ? <p>Alışverişi Tamamladınız 👌 !! </p>:
        <p >Alışveriş sepetinizde {itemsCount} üründen {completedItemsCount} tanesini aldınız</p>
        }
        </div>
      </footer>
    )
  }