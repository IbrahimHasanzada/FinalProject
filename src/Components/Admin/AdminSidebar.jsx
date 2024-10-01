import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { PieChartOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { TbBrandCodesandbox } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import { BiLogOut } from 'react-icons/bi';
import { CgWebsite } from 'react-icons/cg';

const AdminSidebar = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.reload();
  };

  const items = [
    {
      key: '1',
      icon: <PieChartOutlined />,
      label: <NavLink to="/admin/category">Category</NavLink>,
    },
    {
      key: '2',
      icon: <AiOutlineProduct />,
      label: <NavLink to="/admin/products/all">Products</NavLink>,
    },
    {
      key: '3',
      icon: <TbBrandCodesandbox />,
      label: <NavLink to="/admin/brands">Brands</NavLink>,
    },
    {
      key: '4',
      icon: <BiLogOut />,
      label: (
        <button onClick={logOut}>
          <NavLink>Log out</NavLink>
        </button>
      ),
    },
    {
      key: '5',
      icon: <CgWebsite />,
      label: (
        <button onClick={() => navigate('/')}>
          <NavLink>Go to Website</NavLink>
        </button>
      ),
    },
  ]
  return (
    <Menu
      mode="inline"
      theme="dark"
      defaultSelectedKeys={['1']}
      style={{ width: 256, height: '100vh', padding: '20px 0', position: 'sticky', top: '0', left: '0' }}
      items={items} 
    />
  );
};

export default AdminSidebar;
