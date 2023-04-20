import RenderMenuItem from '../features/menuItems/RenderMenuItem';
import { useEffect, useState } from 'react';

const MenuItemInfoScreen = ({ route }) => {
      const { menuItem, updateMenuItem } = route.params;
      const [currentMenuItem, setMenuItem] = useState(menuItem);


      const increaseQuantity = () => {
            const updatedMenuItem = { ...currentMenuItem, quantity: currentMenuItem.quantity + 1 };
            setMenuItem(updatedMenuItem);
            updateMenuItem(updatedMenuItem);
      };

      const decreaseQuantity = () => {
            if (currentMenuItem.quantity > 0) {
                  const updatedMenuItem = { ...currentMenuItem, quantity: currentMenuItem.quantity - 1 };
                  setMenuItem(updatedMenuItem);
                  updateMenuItem(updatedMenuItem);
            };
      };



      return (
            <RenderMenuItem
                  menuItem={currentMenuItem}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
            />
      );
};

export default MenuItemInfoScreen;