import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image,
} from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';

const HorizontalRewardsCard = ({ containerStyle, imageStyle, item, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                ...containerStyle
            }}
            onPress={onPress}
        >
            {/* Image */}
            <Image
                source={item.image}
                style={{
                    ...imageStyle, 
                }}
            />

            {/* Info */}
            <View
                style={{
                    flex: 1,
                    //marginTop: SIZES.padding,
                    marginLeft: 10,
                    marginTop: 25
                }}
            >
                {/* Name */}
                <Text style={{ ...FONTS.h3, fontSize: 17 }}>{item.name}</Text>
                {/* Description */}
                <Text style={{ color: COLORS.darkGray2, ...FONTS.body4 }}>{item.description}</Text>
                {/* Price */}
                <Text style={{ marginTop: SIZES.base, ...FONTS.h2 }}>{item.price[0]}%</Text>
            </View>

            {/* Calories */}
            <View
                style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    top: 5,
                    right: SIZES.radius,
                }}
            >
               
                <Text style={{ ...FONTS.body5, color: COLORS.darkGray2 }}>{item.type} </Text>
            </View>
        </TouchableOpacity>
    )
}

export default HorizontalRewardsCard