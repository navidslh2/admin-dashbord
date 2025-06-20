export const menu = [
  {
    id: 1,
    title: "پیشخوان",
    listItems: [
      {
        id: 1,
        title: "خانه",
        url: "/home",
        icon: "/home.svg",
        alt: "homepge",
      },
      {
        id: 2,
        title: "پروفایل",
        url: "/",
        icon: "/profile.svg",
        alt: "homepge",
      },
    ],
  },
  {
    id: 2,
    title: "لیست",
    listItems: [
      {
        id: 1,
        title: "کاربران",
        url: "/users",
        icon: "/user.svg",
        alt: "user",
      },
      {
        id: 2,
        title: "محصولات",
        url: "/products",
        icon: "/product.svg",
        alt: "product",
      },
      {
        id: 3,
        title: "سفارشات",
        url: "/",
        icon: "/order.svg",
        alt: "order",
      },
    ],
  },
  {
    id: 3,
    title: "عمومی",
    listItems: [
      {
        id: 1,
        title: "المان ها",
        url: "/",
        icon: "/element.svg",
        alt: "element",
      },
      {
        id: 2,
        title: "یادداشت ها",
        url: "/",
        icon: "/note.svg",
        alt: "note",
      },
      {
        id: 3,
        title: "فرم ها",
        url: "/",
        icon: "/form.svg",
        alt: "form",
      },
    ],
  },
  {
    id: 4,
    title: "مدیریت",
    listItems: [
      {
        id: 1,
        title: "تنظیمات",
        url: "/",
        icon: "/setting.svg",
        alt: "setting",
      },
      {
        id: 2,
        title: "پشتیبان گیری",
        url: "/",
        icon: "/backup.svg",
        alt: "backup",
      },
    ],
  },
  {
    id: 5,
    title: "آنالیز",
    listItems: [
      {
        id: 1,
        title: "نمودارها",
        url: "/",
        icon: "/chart.svg",
        alt: "chart",
      },
    ],
  },
];

export const topDealsUsers = [
  {
    id: 1,
    img: "/user.jpg",
    username: "amir",
    email: "amir@gmail.com",
    amount: "3.000.000",
    alt: "userimage",
  },
  {
    id: 2,
    img: "/user.jpg",
    username: "amir",
    email: "amir@gmail.com",
    amount: "3.000.000",
    alt: "userimage",
  },
  {
    id: 3,
    img: "/user.jpg",
    username: "amir",
    email: "amir@gmail.com",
    amount: "3.000.000",
    alt: "userimage",
  },
  {
    id: 4,
    img: "/user.jpg",
    username: "amir",
    email: "amir@gmail.com",
    amount: "3.000.000",
    alt: "userimage",
  },
  {
    id: 5,
    img: "/user.jpg",
    username: "amir",
    email: "amir@gmail.com",
    amount: "3.000.000",
    alt: "userimage",
  },
  {
    id: 6,
    img: "/user.jpg",
    username: "amir",
    email: "amir@gmail.com",
    amount: "3.000.000",
    alt: "userimage",
  },
  {
    id: 7,
    img: "/user.jpg",
    username: "amir",
    email: "amir@gmail.com",
    amount: "3.000.000",
    alt: "userimage",
  },
  {
    id: 8,
    img: "/user.jpg",
    username: "amir",
    email: "amir@gmail.com",
    amount: "3.000.000",
    alt: "userimage",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/user.svg",
  alt: "user",
  title: "تعداد کل کاربران",
  number: "11.220",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 300 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "red",
  icon: "/product.svg",
  alt: "product",
  title: "تعداد کل محصولات",
  number: "230",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};

export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  alt: "revenue",
  title: " کل درآمد",
  number: "...",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};

export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  alt: "conversion",
  title: " نسبت کل",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxVisit = {
  title: "تعداد کل بازدیدها",
  color: "#ff8042",
  dataKey: "visit",
  chartData: [
    { name: "Sun", visit: 400 },
    { name: "Mon", visit: 600 },
    { name: "Tue", visit: 500 },
    { name: "Wed", visit: 700 },
    { name: "Thu", visit: 400 },
    { name: "Fri", visit: 500 },
    { name: "Sat", visit: 450 },
  ],
};

export const barChartBoxProfit = {
  title: "درآمد",
  color: "#ff8042",
  dataKey: "profit",
  chartData: [
    { name: "Sun", profit: 400 },
    { name: "Mon", profit: 600 },
    { name: "Tue", profit: 500 },
    { name: "Wed", profit: 700 },
    { name: "Thu", profit: 400 },
    { name: "Fri", profit: 500 },
    { name: "Sat", profit: 450 },
  ],
};
export const pieChartBoxSell = {
  title: "فروش به تفکیک",
  dataKey: "value",
  chartData: [
    { name: "Mobile", value: 400, color: "lightblue" },
    { name: "Tablet", value: 300, color: "lightgreen" },
    { name: "Labtop", value: 300, color: "yellow" },
    { name: "Pc", value: 200, color: "brown" },
  ],
};

export const areaChartBoxRevenue = {
  title: " آنالیز درآمد ",
  dataKey: "value",
  chartData: [
    { name: "Su", mobile: 4000, labtop: 3400, tablet: 2400, pc: 2300 },
    { name: "Mo", mobile: 3000, labtop: 2500, tablet: 2210, pc: 2000 },
    { name: "Tu", mobile: 2000, labtop: 1700, tablet: 1400, pc: 1000 },
    { name: "We", mobile: 2780, labtop: 2500, tablet: 2000, pc: 1800 },
    { name: "Th", mobile: 1890, labtop: 1500, tablet: 1200, pc: 1000 },
    { name: "Fr", mobile: 2390, labtop: 2000, tablet: 1500, pc: 1200 },
    { name: "Sa", mobile: 3490, labtop: 3000, tablet: 2400, pc: 2000 },
  ],
};
