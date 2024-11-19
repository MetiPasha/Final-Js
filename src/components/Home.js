export function HomePage() {
  const products = [
    { name: "Running Shoes", price: "$120", image: "/public" },
    { name: "Casual Shoes", price: "$100", image: "/public" },
  ];

  return El({
    element: "div",
    className: "home-container grid grid-cols-2 gap-4",
    children: products.map((product) =>
      El({
        element: "div",
        className: "product-card flex flex-col items-center p-4 border",
        children: [
          El({
            element: "img",
            className: "w-32 h-32",
            attributes: { src: product.image, alt: product.name },
          }),
          El({
            element: "h3",
            className: "text-lg font-semibold",
            children: [product.name],
          }),
          El({
            element: "p",
            className: "text-sm text-gray-600",
            children: [product.price],
          }),
        ],
      })
    ),
  });
}
