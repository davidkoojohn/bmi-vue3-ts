
import {
  Button,
  Row,
  Col,
  Tooltip,
  Drawer,
  Menu,
  MenuItem,
  MenuItemGroup,
  SubMenu,
  Carousel
} from 'ant-design-vue';


export default (app: any) => {
  app.use(Button);
  app.use(Row);
  app.use(Col);
  app.use(Tooltip);
  app.use(Drawer);
  app.use(Menu);
  app.use(MenuItem);
  app.use(MenuItemGroup);
  app.use(SubMenu);
  app.use(Carousel);
}


