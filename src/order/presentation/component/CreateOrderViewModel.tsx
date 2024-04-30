import { createOrderService } from "../../domain/use-case/create-order.service";
import {useState} from "react";
import {CreateOrderItemDto} from "../../domain/dto/create-order.dto.ts";

export const createOrderViewModel = () => {
  const [orderItems, setOrderItems] = useState<CreateOrderItemDto[] | null>([]);

  const addOrderItem = () => {
    setOrderItems([...orderItems, {
      productName: document.getElementById('productName').value,
      quantity: document.getElementById('quantity').value,
      price: document.getElementById('price').value,
    }])
    document.getElementById('productName').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('price').value = '';
  }
  const deleteOrderItem = (event, index) => {
    console.log(index)
    setOrderItems(orderItems.filter((_, i) => i !== index));
  }
  const createOrderCommandHandler = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;

    await createOrderService({
      customerName: name,
      orderItems: orderItems
    });
  };

  return {
    createOrderCommandHandler,
    orderItems,
    addOrderItem,
    deleteOrderItem
  };
};
