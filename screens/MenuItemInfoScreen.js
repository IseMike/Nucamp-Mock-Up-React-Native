import RenderMenuItem from '../features/menuItems/RenderMenuItem';
import { useState } from 'react';

const MenuItemInfoScreen = ({ route }) => {
      const { menuItem } = route.params;
      const [quantity, setQuantity] = useState(menuItem.quantity);
      console.log(quantity);

      if(quantity < 0) {
            setQuantity(0);
      }
      menuItem.quantity = quantity;
      console.log(menuItem);
      return (
            <RenderMenuItem
                  menuItem={menuItem}
                  noQuantity={quantity}
                  increaseQuantity={() => setQuantity(quantity+1)}
                  decreaseQuantity={() => setQuantity(quantity-1)}
            />
      );
};

export default MenuItemInfoScreen;