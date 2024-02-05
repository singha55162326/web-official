import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "ຫນ້າຫຼັກ",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "ກ່ຽວກັບ",
    newTab: false,
    submenu: [
        {
          id: 41,
          title: "ກ່ຽວກັບລັດວິສາຫະກິດໄຟຟ້າລາວ",
          path: "/about",
          newTab: false,
        },

        // {
        //   id: 43,
        //   title: "ແຜນຍຸດທະສາດ",
        //   path: "/strategice-plan",
        //   newTab: false,
        // },
        // {
        //   id: 44,
        //   title: "ຄະນະປະທານສະພາບໍລິຫານ",
        //   path: "/chairman-director",
        //   newTab: false,
        // },
        {
          id: 45,
          title: "ໂຄງຮ່າງການຈັດຕັ້ງ",
          path: "/organization",
          newTab: false,
        },
        // {
        //   id: 46,
        //   title: "ສັນຍາລັກ",
        //   path: "/symbolic",
        //   newTab: false,
        // },
    ],
  },
  {
    id: 33,
    title: "ຂ່າວສານ ແລະ ປະຊາສຳພັນ",
    newTab: false,
    submenu: [
        {
          id: 41,
          title: "ຂ່າວສານ ແລະ ປະຊາສຳພັນ",
          path: "/news-detail",
          newTab: false,
        },
        {
          id: 42,
          title: "ແຈ້ງມອດໄຟ",
          path: "/turn-off-light",
          newTab: false,
        },
        {
          id: 48,
          title: "ວາລະສານ",
          path: "/magazine-detail",
          newTab: false,
        },
        {
          id: 43,
          title: "ແຈ້ງການປະມູນ",
          path: "/notice-of-auction",
          newTab: false,
        },
        {
          id: 44,
          title: "ປະກາດຮັບສະໝັກງານ ",
          path: "/jobvacancy",
          newTab: false,
        },
    ],

  },
  {
    id: 3,
    title: "ຕິດຕໍ່",
    newTab: false,
    submenu: [
        {
          id: 41,
          title: "ສູນບໍລິການ",
          path: "/service-center",
          newTab: false,
        },

        {
          id: 43,
          title: "ສະແດງຄຳເຫັນ ແລະ ຄຳຕິຊົມ ຕໍ່ຟຟລ",
          path: "/comment",
          newTab: false,
        },
        {
            id: 44,
            title: "ສາຂາ",
            path: "/branch",
            newTab: false,
          },
    ],
  },
//   {
//     id: 4,
//     title: "Pages",
//     newTab: false,
//     submenu: [
//       {
//         id: 41,
//         title: "About Page",
//         path: "/about",
//         newTab: false,
//       },
//       {
//         id: 42,
//         title: "Contact Page",
//         path: "/contact",
//         newTab: false,
//       },
//       {
//         id: 43,
//         title: "Blog Grid Page",
//         path: "/blog",
//         newTab: false,
//       },
//       {
//         id: 44,
//         title: "Blog Sidebar Page",
//         path: "/blog-sidebar",
//         newTab: false,
//       },
//       {
//         id: 45,
//         title: "Blog Details Page",
//         path: "/blog-details",
//         newTab: false,
//       },
//       {
//         id: 46,
//         title: "Sign In Page",
//         path: "/signin",
//         newTab: false,
//       },
//       {
//         id: 47,
//         title: "Sign Up Page",
//         path: "/signup",
//         newTab: false,
//       },
//       {
//         id: 48,
//         title: "Error Page",
//         path: "/error",
//         newTab: false,
//       },
//     ],
//   },
];
export default menuData;
