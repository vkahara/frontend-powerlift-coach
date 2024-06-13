import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import React from 'react'

const HeaderCard = ({content, onPress}) => {
    return (
        <TouchableOpacity style={{height: 100, width: 300,  borderRadius: '50%', alignItems: "center",backgroundColor: 'green'}} onPress={onPress}>
            <Text style={{fontSize: 40}}>{content}</Text>
        </TouchableOpacity>
    )
}

export default HeaderCard