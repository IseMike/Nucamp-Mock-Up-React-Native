import RenderMenuItem from '../features/menuItems/RenderMenuItem';

const MenuItemInfoScreen = ({ route }) => {
    const { menuItem } = route.params;
    console.log(menuItem);
    return <RenderMenuItem menuItem={menuItem} />;
};

export default MenuItemInfoScreen;