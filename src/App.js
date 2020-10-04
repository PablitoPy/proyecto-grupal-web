import React, { useState } from 'react';
import './App.css';
import { Layout, Menu, Carousel } from 'antd';
import "antd/dist/antd.css";
import ProductoList from './components/ProductoList';
import TypeList from './components/TypeList';
import TaskForm from './components/TaskForm';
import TypeForm from './components/TypeForm';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AppstoreOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Footer, Content } = Layout;
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


function AppMenu() {
  const [current, setCurrent] = useState()
  return (
    // Definicion del menu principal
    <Menu onClick={(value) => setCurrent(value)} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Principal</Link>
      </Menu.Item>
      <Menu.Item key="productos" icon={<AppstoreOutlined />}>
        <Link to="/">Productos</Link>
      </Menu.Item>
      <SubMenu key="administracion" icon={<AppstoreOutlined />} title="Administración">
        <Menu.Item key="administracion:1"><Link to="/types">Productos</Link></Menu.Item>
        <Menu.Item key="administracion:2"><Link to="/types/new">Proveedores</Link></Menu.Item>
      </SubMenu>
      <Menu.Item key="about" icon={<AppstoreOutlined />}>
        <Link to="/about">About</Link>
      </Menu.Item>
    </Menu>
  );
}

function TaskRoutes({ match }) {
  return (
    <>
      <Route exact path={`${match.path}/new`} component={TaskForm} />
      <Route
        exact
        path={`${match.path}/edit/:taskId`}
        component={TaskForm}
      />
      <Route exact path={`${match.path}/`} component={ProductoList} />
    </>
  );
}

function TypeRoutes({ match }) {
  return (
    <>
      <Route exact path={`${match.path}/new`} component={TypeForm} />
      <Route
        exact
        path={`${match.path}/edit/:typeId`}
        component={TypeForm}
      />
      <Route exact path={`${match.path}/`} component={TypeList} />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Header style={{ color: 'white', fontSize: 30, textAlign: 'center', background: 'pink' }}>
          <div>Forever 19 1/2</div>
                    </Header>

        <Content>
        
          <div className="site-layout-content">
            <AppMenu />
            <br />
            {/* Secccion donde se van a mostrar los diferentes componentes que rendericemos */}
            <>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              {/* Hacemos esto porque tasks tiene subrutas */}
              <Route path="/tasks" component={TaskRoutes} />
              <Route path="/types" component={TypeRoutes} />


            </>
          </div>
          
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <p>Teléfono</p>
          <p>Dirección</p>
          <p>Ciudad - País</p>
        </Footer>
      </Layout>
    </Router>

  );
}

export default App;