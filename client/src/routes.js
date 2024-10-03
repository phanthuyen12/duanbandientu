import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import NFTMarketplace from 'views/admin/marketplace';
import Profile from 'views/admin/profile';
import DataTables from 'views/admin/dataTables';
import RTL from 'views/admin/rtl';
import Category from 'views/category/categorymanagement.tsx';
import Product from 'views/product/productmanagement.tsx';
import Productcreate from 'views/product/createproduct.tsx';
import Categoryedit from 'views/category/categoryedit.tsx';
import Productedit from 'views/product/productedit.tsx';
import UserManagent from 'views/user/usermanagent.tsx';
import UserUpdate from 'views/user/updateuser.tsx';

// Auth Imports

const routes = [
  {
    name: 'Trang chủ',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'Danh Mục',
    path: '/category',
    layout: '/admin',

    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <Category />,
  },
  {

    path: '/category-edit',
    layout: '/admin',

    component: <Categoryedit />,
    icon: null, // Không có icon
    hidden: true, // Thêm thuộc tính này để ẩn route khỏi menu
  },
  {

    path: '/products-edit',
    layout: '/admin',

    component: <Productedit />,
    icon: null, // Không có icon
    hidden: true, // Thêm thuộc tính này để ẩn route khỏi menu
  },
  {
    name: 'Sản Phẩm',
    layout: '/admin',
    path: '/products-managent',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <Product />,
  },
  {
    name: 'Tạo Sản Phẩm', // Tên cho route tạo sản phẩm
    layout: '/admin',
    path: '/products-create', // Đường dẫn mới cho việc tạo sản phẩm
    icon: null, // Không có icon
    component: <Productcreate />, // Sử dụng component ProductCreate
    hidden: true, // Thêm thuộc tính này để ẩn route khỏi menu
  },
  {
    name: 'Dơn Hàng',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'Thành Viên',
    layout: '/admin',
    path: '/user-managent',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <UserManagent />,
  },
  {

    path: '/update-user',
    layout: '/admin',

    component: <UserUpdate />,
    icon: null, // Không có icon
    hidden: true, // Thêm thuộc tính này để ẩn route khỏi menu
  },
  {
    name: 'Phiếu Giảm Giá',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'Thanh Toán',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'Trang Web',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'NFT Marketplace',
    layout: '/admin',
    path: '/nft-marketplace',
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: 'Data Tables',
    layout: '/admin',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: '/data-tables',
    component: <DataTables />,
  },
  {
    name: 'Profile',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
  {
    name: 'Sign In',
    layout: '/admin',
    path: '/category-management',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <Category />,
  },
  {
    name: 'RTL Admin',
    layout: '/rtl',
    path: '/rtl-default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <RTL />,
  },
];

export default routes;
