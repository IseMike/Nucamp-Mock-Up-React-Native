import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { selectAllMenuItems } from '../features/cart/cartSlice';

const MenuScreen = ({ navigation }) => {
      const menuItems = useSelector(selectAllMenuItems);

      const renderMenuItem = ({ item: menuItem }) => {
            return (
                  <ListItem onPress={() => navigation.navigate('MenuItem', { menuItem })}>
                        <Avatar source={menuItem.image} rounded />
                        <ListItem.Content>
                              <ListItem.Title>{menuItem.name}</ListItem.Title>
                              <ListItem.Subtitle>
                                    {menuItem.description}
                              </ListItem.Subtitle>
                        </ListItem.Content>
                  </ListItem>
            );
      };
      return (
            <FlatList
                  data={menuItems}
                  renderItem={renderMenuItem}
                  keyExtractor={(item) => item.id.toString()}
            />
      );
};

export default MenuScreen;