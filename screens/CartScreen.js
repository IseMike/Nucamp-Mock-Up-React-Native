import { Text, View, Button, StyleSheet, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { useState } from 'react';
import { MENUITEMS } from '../shared/menuitems'

const CartScreen = () => {
      const [menuItems, setMenuItems] = useState(MENUITEMS);
      const renderMenuItem = ({ item: menuItem }) => {
            if (menuItem.quantity > 0) {
                  return (
                        <Card containerStyle={{ padding: 0 }}>
                              <Card.Image source={menuItem.image}>
                                    <View style={{ justifyContent: 'center', flex: 1 }}>
                                    </View>
                              </Card.Image>
                              <Text style={{ margin: 20 }}>{menuItem.description}</Text>
                              <View style={styles.container}>
                                    <View style={styles.button} >
                                          <Button title='Minus' style={styles.button} />
                                    </View>
                                    <Text style={styles.text}>{menuItem.quantity}</Text>
                                    <View style={styles.button} >
                                          <Button title='Add' style={styles.button} />
                                    </View>
                              </View>
                        </Card>
                  );
            }
      };
      return (
            <FlatList
                  data={menuItems}
                  renderItem={renderMenuItem}
                  keyExtractor={(item) => item.id.toString()}
            />
      );
};

const styles = StyleSheet.create({
      container: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 15
      },
      button: {
            width: 100
      },
      text: {
            marginHorizontal: 20
      }
});

export default CartScreen;