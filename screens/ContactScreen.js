import { Text, View, StyleSheet } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer';

const ContactScreen = () => {
      const sendMail = () => {
            MailComposer.composeAsync({
                  recipients: ['snoopys@fakeemail.st'],
                  subject: 'Inquiry',
                  body: 'To whom it may concern:'
            });
      };

      return (
            <View>
                  <Card containerStyle={styles.card}>
                        <Card.Title>
                              Contact Us
                        </Card.Title>
                        <Text style={styles.cardText}>
                              1-111-111-1111
                        </Text>
                        <Text style={styles.cardText}>
                              snoopys@fakeemail.st
                        </Text>
                  </Card>
                  <Card containerStyle={styles.card}>
                        <Card.Title>
                              Our Address
                        </Card.Title>
                        <Text style={styles.cardText}>
                              123 Real Street
                        </Text>
                        <Text style={styles.cardText}>
                              Real City, NC 11111
                        </Text>
                  </Card>
                  <Button
                        title='Send Email'
                        buttonStyle={{ margin: 40 }}
                        icon={
                              <Icon
                                    name='envelope-o'
                                    type='font-awesome'
                                    color='white'
                                    iconStyle={{ marginRight: 10 }}
                              />
                        }
                        onPress={() => sendMail()}
                  />
            </View>
      )
};

const styles = StyleSheet.create({
      card: {
            padding: 10,
            height: 150,
            marginBottom: 25,
            justifyContent: 'center'
      },
      cardText: {
            textAlign: 'center',
            textAlignVertical: 'center'
      }
});

export default ContactScreen;