import { Text, View, Button, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

const RenderMenuItem = (props) => {
      const { menuItem } = props;
      if (menuItem) {
            return (
                  <Card containerStyle={{ padding: 0 }}>
                        <Card.Image source={menuItem.image}>
                              <View style={{ justifyContent: 'center', flex: 1 }}>
                              </View>
                        </Card.Image>
                        <Text style={{ margin: 20 }}>{menuItem.description}</Text>
                        <View style={styles.container}>
                              <View style={styles.button} >
                                    <Button title='Minus' style={styles.button} onPress={() => props.decreaseQuantity()} />
                              </View>
                              <Text style={styles.text}>{props.menuItem.quantity}</Text>
                              <View style={styles.button} >
                                    <Button title='Add' style={styles.button} onPress={() => props.increaseQuantity()} />
                              </View>
                        </View>
                  </Card>
            );
      }
      return <View />;
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

export default RenderMenuItem;