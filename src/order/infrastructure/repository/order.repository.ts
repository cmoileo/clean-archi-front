import {CreateOrderDto } from "../../domain/dto/create-order.dto";

export const OrderRepository = () => {
  const fetchCreateOrder = async (createOrderDto: CreateOrderDto) => {
    await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createOrderDto),
    });
  };

  const getOrders = async () => {
    const response = await fetch("http://localhost:3000/orders");
    return response.json();
  }

  return {
    fetchCreateOrder,
    getOrders
  };
};
