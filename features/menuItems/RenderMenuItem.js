import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderMenuItem = ({ menuItem }) => {
    if (menuItem) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={menuItem.image}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {menuItem.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{menuItem.description}</Text>
            </Card>
        );
    }
    return <View />;
};

export default RenderMenuItem;