import React from 'react';
import { NavLink } from 'react-router-dom';
import { DesktopOutlined, FileOutlined, PieChartOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { TbBrandCodesandbox, TbBrandShazam } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";

const AdminSidebar = () => {
  return (
    <Menu
      mode="inline"
      theme="dark"
      defaultSelectedKeys={['1']}
      style={{ width: 256, height: '100vh', padding: '20px 0 ', position: 'sticky', top: '0', left: '0'}}
    >
      <Menu.Item key="1" icon={<PieChartOutlined />}>
        <NavLink to="/admin/category">Category</NavLink>
      </Menu.Item>
      <Menu.Item key="2" icon={<AiOutlineProduct />}>
        <NavLink to="/admin/products">Products</NavLink>
      </Menu.Item>
      <Menu.Item key="3" icon={<TbBrandCodesandbox />}>
        <NavLink to="/admin/brands">Brands</NavLink>
      </Menu.Item>
      <Menu.Item key="4" icon={<TbBrandShazam />}>
        <NavLink to="/admin/files">Files</NavLink>
      </Menu.Item>
    </Menu>
  )
}

export default AdminSidebar;
