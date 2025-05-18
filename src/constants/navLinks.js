const navLinks = [
  {
    route: "/",
    label: "Home",
    isAuth: false,
  },
  {
    route: "/about",
    label: "About",
    isAuth: false,
  },
  {
    route: "/contact",
    label: "Contact",
    isAuth: true,
  },
  {
    route: "/products",
    label: "Products",
    isAuth: false,
  },
  {
    route: "/cart",
    label: "Cart",
    isAuth: true,
  },
  {
    route: "/news",
    label: "News",
    isAuth: false,
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
