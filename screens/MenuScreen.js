import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { useState } from 'react';
import { MENUITEMS } from '../shared/menuitems'

const MenuScreen = ({ navigation }) => {
      const [menuItems, setMenuItems] = useState(MENUITEMS);

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