import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image,
} from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';

const VerticalFoodCard = ({ containerStyle, item, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                width: 200,
                paddingVertical: SIZES.radius,
                paddingHorizontal: SIZES.radius,
                alignItems: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                ...containerStyle
            }}
            onPress={onPress}
        >
            {/* Calories and Favourite */}
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    
                    <Text style={{ ...FONTS.body5, color: COLORS.darkGray2 }}> {item.type} </Text>
                </View>
                <Image 
                    source={icons.love}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: item.isFavourite ? COLORS.primary : COLORS.gray
                    }}
                />
            </View>

            {/* Image */}
            <View
                style={{
                    height: 150,
                    width: 150,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={item.image}
                    style={{ height: "100%", width: "110%" }}
                />
            </View>

            {/* Info */}
            <View
                style={{
                    alignItems: 'center',
                    marginTop: -15
                }}
            >
                <Text style={{ ...FONTS.h3 }}>{item.name}</Text>
                <Text style={{ ...FONTS.body5, color: COLORS.darkGray2, textAlign: 'center' }}>{item.description}</Text>
                <Text style={{ ...FONTS.h2, marginTop: SIZES.radius }}>${item.price[0]}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default VerticalFoodCard