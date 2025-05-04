const navLinks = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/about",
    label: "About",
  },
  {
    route: "/contact",
    label: "Contact",
  },
  {
    route: "/products",
    label: "Products",
  },
  {
    route: "/cart",
    label: "Cart",
  },
  {
    route: "/news",
    label: "News",
    subMenu: [
      {
        route: "/politics",
        label: "Politics",
      },
      {
        route: "/sports",
        label: "Sports",
      },
      {
        route: "/cricket",
        label: "Cricket",
      },
      {
        route: "/education",
        label: "Education",
      },
    ],
  },
];

export default navLinks;
