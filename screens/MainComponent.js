import { useState } from 'react';
import { View } from 'react-native';
import { MENUITEMS } from '../shared/menuitems';
import MenuItemInfoScreen from './MenuItemInfoScreen';
import MenuScreen from './MenuScreen';

const Main = () => {
    const [menuItems, setMenuItems] = useState(MENUITEMS);
    const [selectedMenuItemId, setSelectedMenuItemId] = useState();

    return (
        <View style={{ flex: 1 }}>
            <MenuScreen
                menuItems={menuItems}
                onPress={(menuItemId) => setSelectedMenuItemId(menuItemId)}
            />
            <MenuItemInfoScreen
                menuItem={
                    menuItems.filter(
                        (menuItem) => menuItem.id === selectedMenuItemId
                    )[0]
                }
            />
        </View>
    );
};

export default Main;