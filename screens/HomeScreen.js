import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

const HomeScreen = () => {
      return (
            <View>
                  <Card containerStyle={styles.card}>
                        <Text style={styles.cardText}>
                              Come in and enjoy our food, friendly atmosphere, and our lovely staff.
                        </Text>
                  </Card>
                  <Card containerStyle={styles.card}>
                        <Text style={styles.cardText}>
                              A fan of music? Come experience local bands that we host on weekends.
                              Or if you wanna flaunt your own talents, we have karaoke every friday evening.
                        </Text>
                  </Card>
                  <Card containerStyle={styles.card}>
                        <Text style={styles.cardText}>
                              And before you ask. Yes we have all your favorites from Spirits and Steaks to Burgers and Beer.
                        </Text>
                  </Card>
            </View>
      )
};

const styles = StyleSheet.create({
      card: {
            padding: 10,
            height: 150,
            marginBottom: 40,
            justifyContent: 'center'
      },
      cardText: {
            margin: 20,
            textAlign: 'center',
            textAlignVertical: 'center'
      }
});

export default HomeScreen;