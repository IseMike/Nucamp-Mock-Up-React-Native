import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const MenuScreen = (props) => {
    const renderMenuItem = ({ item: menuItem }) => {
        return (
            <ListItem onPress={() => props.onPress(menuItem.id)}>
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
            data={props.menuItems}
            renderItem={renderMenuItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default MenuScreen;