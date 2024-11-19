import { El } from "../El/el";
export function OnboardingPage() {
  const slides = [
    {
      image: "/public/icons/Vector 1.png",
      title: "Shoea",
    },
    {
      image: "/public/onboarding/onboarding page 2.png",
      title: "Welcome to ShoeA",
      description: "Your satisfaction is our priority.",
    },
    {
      image: "/public/onboarding/WallpaperDog-20534536 1.png",
      title: "High Quality Products",
      description: "We provide high-quality products just for you.",
    },
    {
      image: "/public/onboarding/WallpaperDog-20397673 1.png",
      title: "Fulfill Your Fashion Needs",
      description: "Explore a wide range of styles with ShoeA.",
    },
    {
      image: "/public/onboarding/WallpaperDog-20534715 1.png",
      title: "Fulfill Your Fashion Needs",
      description: "Explore a wide range of styles with ShoeA.",
    },
  ];

  return El({
    element: "div",
    className: "onboarding-container",
    children: slides.map((slide) =>
      El({
        element: "div",
        className: "slide flex flex-col items-center",
        children: [
          El({
            element: "img",
            className: "w-40 h-40",
            src: slide.image,
            alt: slide.title,
          }),
          El({
            element: "h2",
            className: "text-xl font-bold",
            children: [slide.title],
          }),
          El({
            element: "p",
            className: "text-sm text-gray-500",
            children: [slide.description],
          }),
        ],
      })
    ),
  });
}
