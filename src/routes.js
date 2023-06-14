import { UserPage } from "./pages/UserPage";

const routes = [
  {
    path: "/",
    component: <UserPage />,
    label: "User Page",
  },
  {
    path: "/blog",
    component: <UserPage />,
    label: "Home Page",
  },

  // {
  //     path: 'chat',
  //     component: <ChatApp />,
  //     label: 'Chat'
  // },
  // {
  //     path: 'about',
  //     component: <AboutUs />,
  //     label: 'About us'
  // },
  // {
  //     path: 'admin',
  //     component: <AdminApp />,
  //     label: 'Admin Only'
  // }
];

export default routes;
