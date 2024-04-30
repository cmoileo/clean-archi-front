import { createOrderViewModel } from "./CreateOrderViewModel";

const CreateOrder = () => {
  const { createOrderCommandHandler, orderItems, addOrderItem, deleteOrderItem } = createOrderViewModel();

  return (
    <main>
      <h1> Create order</h1>
      <form onSubmit={createOrderCommandHandler}>
        <label htmlFor="name">customerName</label>
        <input type="text" id="name" name="name" />
        <input type="submit" value="Créer une commande" />
          {orderItems && orderItems.map((orderItem, index) => (
              <div key={index}>
                  <input type="text" placeholder={"product name"} value={orderItem.productName} />
                  <input type="number" placeholder={"product quantity"} value={orderItem.quantity} />
                  <input type="number" placeholder={"product price"} value={orderItem.price} />
                  <button onClick={(event, index) => deleteOrderItem(event, index)}>Supprime l'article</button>
              </div>
          ))
          }
          <input type="text" placeholder={"product name"} id="productName" name="productName" />
          <input type="number" placeholder={"product quantity"} id="quantity" name="quantity" />
          <input type="number" placeholder={"product price"} id="price" name="price" />
          <button type="button" onClick={addOrderItem}>Ajouter un article</button>
      </form>
    </main>
  );
};

export default CreateOrder;
