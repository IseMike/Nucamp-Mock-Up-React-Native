import RenderMenuItem from '../features/menuItems/RenderMenuItem';
import { useEffect, useState } from 'react';

const MenuItemInfoScreen = ({ route }) => {
      const { menuItem } = route.params;
      const [currentMenuItem, setMenuItem] = useState(menuItem);

      console.log(currentMenuItem)

      const increaseQuantity = () => {
            setMenuItem(prevMenuItem => ({
                  ...prevMenuItem,
                  quantity: prevMenuItem.quantity + 1
            }));
      };

      const decreaseQuantity = () => {
            if (currentMenuItem.quantity > 0) {
                  setMenuItem(prevMenuItem => ({
                        ...prevMenuItem,
                        quantity: prevMenuItem.quantity - 1
                  }));
            };
      };

      return (
            <RenderMenuItem
                  menuItem={menuItem}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
            />
      );
};

export default MenuItemInfoScreen;