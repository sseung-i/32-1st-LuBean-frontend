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
          { id: 0, country: "id값", text: "과테말라" },
          { id: 1, country: "id값", text: "니카라과" },
          { id: 2, country: "id값", text: "브라질" },
          { id: 3, country: "id값", text: "에티오피아" },
          { id: 4, country: "id값", text: "엘살바도르" },
          { id: 5, country: "id값", text: "인도네시아" },
          { id: 6, country: "id값", text: "케냐" },
          { id: 7, country: "id값", text: "코스타리카" },
          { id: 8, country: "id값", text: "콜롬비아" },
          { id: 9, country: "id값", text: "탄자니아" },
          { id: 10, country: "id값", text: "파나마" },
          { id: 11, country: "id값", text: "파푸아뉴기니" },
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
