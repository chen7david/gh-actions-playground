import { useState } from "react";
import reactLogo from "./assets/react.svg";
import {
  Button,
  DatePicker,
  Layout,
  Menu,
  Row,
  Col,
  Space,
  Alert,
  Card,
  Divider,
} from "antd";
const { Header, Footer, Content, Sider } = Layout;
import Icon, {
  HomeOutlined,
  UserOutlined,
  ShopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CloseOutlined,
} from "@ant-design/icons";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Header
          style={{ background: "white" }}
          className="site-layout-background"
        >
          <div className="logo" />
          {collapsed ? (
            <MenuUnfoldOutlined onClick={() => setCollapsed(!collapsed)} />
          ) : (
            <CloseOutlined onClick={() => setCollapsed(!collapsed)} />
          )}
        </Header>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            breakpoint="xs"
            collapsedWidth="80"
            theme="light"
          >
            <Menu
              mode="inline"
              items={[
                { key: "home", icon: <HomeOutlined />, label: "Home" },
                { key: "profile", icon: <UserOutlined />, label: "Profile" },
                { key: "products", icon: <ShopOutlined />, label: "Products" },
                {
                  key: "locations",
                  icon: <MenuFoldOutlined />,
                  label: "Locations",
                },
                {
                  key: "settings",
                  icon: <MenuUnfoldOutlined />,
                  label: "Settings",
                },
              ]}
            />
          </Sider>
          <Content style={{ padding: 5 }}>
            <Alert
              message="Welcome back!"
              type="success"
              showIcon
              style={{ margin: "10px" }}
            />
            <Divider orientation="left">Welcome Back</Divider>
            <Row gutter={16} align="top" justify="center">
              <Col
                xs={24}
                xl={8}
                span={6}
                flex="number"
                style={{ minHeight: "40vh", background: "#90EE90" }}
              >
                col-1
              </Col>
              <Col
                xs={24}
                xl={8}
                style={{ minHeight: "40vh", background: "#ADD8E6" }}
              >
                col-2
              </Col>
              <Col
                xs={24}
                xl={8}
                style={{ minHeight: "40vh", background: "#90EE90" }}
              >
                col-3
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
