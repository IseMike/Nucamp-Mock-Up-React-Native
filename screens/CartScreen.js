import { Text, View, Button, StyleSheet, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { selectMenuItemByQuantity, incrementQuantity, decrementQuantity } from '../features/cart/cartSlice';

const CartScreen = () => {
      const cartItems = useSelector(selectMenuItemByQuantity);
      const dispatch = useDispatch();


      const renderCartItem = ({ item: cartItem }) => {
            return (
                  <Card containerStyle={{ padding: 0 }}>
                        <Card.Image source={cartItem.image}>
                              <View style={{ justifyContent: 'center', flex: 1 }}>
                              </View>
                        </Card.Image>
                        <Text style={{ margin: 20 }}>{cartItem.description}</Text>
                        <View style={styles.container}>
                              <View style={styles.button} >
                                    <Button title='Minus' style={styles.button} onPress={() => dispatch(decrementQuantity(cartItem))} />
                              </View>
                              <Text style={styles.text}>{cartItem.quantity}</Text>
                              <View style={styles.button} >
                                    <Button title='Add' style={styles.button} onPress={() => dispatch(incrementQuantity(cartItem))} />
                              </View>
                        </View>
                  </Card>
            );
      }
      if (cartItems && cartItems.length > 0) {
            return (
                  <FlatList
                        data={cartItems}
                        renderItem={renderCartItem}
                        keyExtractor={(item) => item.id.toString()}
                  />
            );
      }
      else {
            return (
                  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ textAlign: 'center', fontSize: 18 }}>No Items In Cart.</Text>
                  </View>

            )
      }
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
      },
      noItems: {

      }
});

export default CartScreen;