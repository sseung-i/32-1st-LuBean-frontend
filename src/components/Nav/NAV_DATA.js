export const USER = {
  cart: [
    { id: 0, item: true },
    { id: 1, item: true },
  ],
};

export const CATEGORY = [
  { id: 0, text: "사이트소개", name: "islubean", dropMenu: null },
  {
    id: 1,
    text: "원두",
    name: "products",
    dropMenu: [
      {
        id: 0,
        title: "싱글오리진",
        title_en: "singleOrigin",
        subMenu: [
          { id: 1, country: "brasil", text: "브라질" },
          { id: 2, country: "guatemala", text: "과테말라" },
          { id: 3, country: "colombia", text: "콜롬비아" },
          { id: 4, country: "kenya", text: "케냐" },
          { id: 5, country: "tanzania", text: "탄자니아" },
          { id: 6, country: "ethiopia", text: "에티오피아" },
        ],
      },
      { id: 1, title: "블렌디드", title_en: "blended", subMenu: null },
      { id: 2, title: "디카페인", title_en: "decaffein", subMenu: null },
    ],
  },
  {
    id: 2,
    text: "굿즈",
    name: "goods",
    dropMenu: [
      { id: 0, title: "티셔츠", title_en: "tshirt", subMenu: null },
      { id: 1, title: "컵/텀블러", title_en: "cup", subMenu: null },
      { id: 2, title: "커피용품", title_en: "coffeeGoods", subMenu: null },
    ],
  },
  { id: 3, text: "매장", name: "store", dropMenu: null },
  { id: 4, text: "이벤트", name: "event", dropMenu: null },
];
