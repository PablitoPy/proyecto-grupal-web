import React, { useState } from 'react';
import './App.css';
import { Layout, Menu, Carousel } from 'antd';
import "antd/dist/antd.css";
import ProductoList from './components/ProductoList';
import ProductoCat from './ProductoCat';
import ProveedorList from './components/ProveedorList';
import ProductoForm from './components/ProductoForm';
import ProveedorForm from './components/ProveedorForm';
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
        <Link to="/catalogo">Catálogo</Link>
      </Menu.Item>
      <SubMenu key="administracion" icon={<AppstoreOutlined />} title="Administración">
        <Menu.Item key="administracion:1"><Link to="/productos">Productos</Link></Menu.Item>
        <Menu.Item key="administracion:2"><Link to="/proveedores">Proveedores</Link></Menu.Item>
      </SubMenu>
      <Menu.Item key="about" icon={<AppstoreOutlined />}>
        <Link to="/about">About</Link>
      </Menu.Item>
    </Menu>
  );
}

function ProductoRoutes({ match }) {
  return (
    <>
      <Route exact path={`${match.path}/new`} component={ProductoForm} />
      <Route
        exact
        path={`${match.path}/edit/:productoId`}
        component={ProductoForm}
      />
      <Route exact path={`${match.path}/`} component={ProductoList} />
    </>
  );
}


function ProveedorRoutes({ match }) {
  return (
    <>
      <Route exact path={`${match.path}/new`} component={ProveedorForm} />
      <Route
        exact
        path={`${match.path}/edit/:proveedorId`}
        component={ProveedorForm}
      />
      <Route exact path={`${match.path}/`} component={ProveedorList} />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Header style={{ color: 'white', fontSize: 30, textAlign: 'center', background: 'pink' }}>
          <div>Forever Young</div>
                    </Header>

        <Content>
        
          <div className="site-layout-content">
            <AppMenu />
            <br />
            {/* Secccion donde se van a mostrar los diferentes componentes que rendericemos */}
            <>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/catalogo" component={ProductoCat} />
              {/* Hacemos esto porque productoss tiene subrutas */}
              <Route path="/productos" component={ProductoRoutes} />
              <Route path="/proveedores" component={ProveedorRoutes} />


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