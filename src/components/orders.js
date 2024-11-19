export function OrdersPage() {
  const orders = [
    {
      name: "Running Shoes",
      status: "Delivered",
      date: "2024-11-10",
      image: "",
    },
    {
      name: "Casual Shoes",
      status: "Shipped",
      date: "2024-11-12",
      image: "",
    },
  ];

  return El({
    element: "div",
    className: "orders-container flex flex-col gap-4 p-4",
    children: orders.map((order) =>
      El({
        element: "div",
        className: "order-card flex items-center gap-4 p-4 border",
        children: [
          El({
            element: "img",
            className: "w-16 h-16",
            attributes: { src: order.image, alt: order.name },
          }),
          El({
            element: "div",
            className: "order-details flex flex-col",
            children: [
              El({
                element: "h3",
                className: "text-lg font-semibold",
                children: [order.name],
              }),
              El({
                element: "p",
                className: "text-sm text-gray-500",
                children: [`Status: ${order.status}`],
              }),
              El({
                element: "p",
                className: "text-sm text-gray-500",
                children: [`Date: ${order.date}`],
              }),
            ],
          }),
        ],
      })
    ),
  });
}
