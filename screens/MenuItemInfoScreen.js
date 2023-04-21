import RenderMenuItem from '../features/menuItems/RenderMenuItem';
import { decrementQuantity, incrementQuantity, selectMenuItemById } from '../features/cart/cartSlice';
import { useDispatch, useSelector } from "react-redux";

const MenuItemInfoScreen = ({ route }) => {
      const { menuItem } = route.params;
      const selectMenuItem = useSelector(selectMenuItemById(menuItem.id))
      console.log('-------------------------------------------------')
      console.log(selectMenuItem);
      const dispatch = useDispatch();


      const increaseQuantity = () => {
            dispatch(incrementQuantity(selectMenuItem))
      };

      const decreaseQuantity = () => {
            if (selectMenuItem.quantity > 0) {
                  dispatch(decrementQuantity(selectMenuItem))
            };
      };



      return (
            <RenderMenuItem
                  menuItem={selectMenuItem}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
            />
      );
};

export default MenuItemInfoScreen;