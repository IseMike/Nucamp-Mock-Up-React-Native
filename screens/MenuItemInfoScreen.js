import RenderMenuItem from '../features/menuItems/RenderMenuItem';

const MenuItemInfoScreen = ({ route }) => {
    const { menuItem } = route.params;
    return <RenderMenuItem menuItem={menuItem} />;
};

export default MenuItemInfoScreen;