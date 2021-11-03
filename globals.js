export const NAVBAR_LABELS = [
  {
    name: "Calendário",
    href: "/calendar",
  },
  { name: "Criar Evento", href: "/create" },
  { name: "Evento", href: "/event/1" },
];

export const EVENTOS = [
  {
    id: 1,
    title: "Eclética :: Desbunde Geral|Domingo 0800*",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa cum sit velit rerum impedit ratione vero accusantium quod ea itaqueconsequuntur, dolorum, non deleniti aliquid qui natus sint quaerat repudiandae?",
    startDate: {
      year: 2021,
      month: 11,
      day: 7,
      hour: 14,
      minute: 0,
    },
    endDate: {
      year: 2021,
      month: 11,
      day: 8,
      hour: 2,
      minute: 0,
    },
    price: 15,
    hasLocal: true,
    local: "Portal Club",
    hasAddress: true,
    address: "Rua do Lavradio, 23",
    coverLink: "https://images.sympla.com.br/617b18e2135f3-lg.png",
    externalLink:
      "https://www.sympla.com.br/ecletica--desbunde-geraldomingo-0800__1396586",
    favorites: 9,
    upvotes: 38,
    downvotes: 12,
    lastUpdate: {
      year: 2021,
      month: 10,
      day: 30,
      hour: 21,
      minute: 34,
    },
    tags: ["Brasilidades", "Funk"],
  },
  {
    id: 2,
    title: "Wobble na Rua",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa cum sit velit rerum impedit ratione vero accusantium quod ea itaqueconsequuntur, dolorum, non deleniti aliquid qui natus sint quaerat repudiandae?",
    hasStartDate: true,
    startDate: {
      year: 2021,
      month: 11,
      day: 14,
      hour: 20,
      minute: 0,
    },
    hasEndDate: false,
    endDate: {
      year: 0,
      month: 0,
      day: 0,
      hour: 0,
      minute: 0,
    },
    price: 0,
    hasLocal: false,
    local: "",
    hasAddress: false,
    address: "",
    coverLink:
      "https://s3.sa-east-1.amazonaws.com/ihateflash.net/post/2807/wobble.rua_163.jpg",
    externalLink: "https://www.instagram.com/festawobble/",
    favorites: 5,
    upvotes: 41,
    downvotes: 2,
    lastUpdate: {
      year: 2021,
      month: 10,
      day: 24,
      hour: 18,
      minute: 8,
    },
    tags: ["Eletrônica"],
  },
];
