import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

interface Props {
    placeholder: string;
    onPress?: () => void;
    value?: string;
    onChangeText?: (text: string) => void;
    editable?: boolean;
    ref: any;
}

const SearchBar = ({ placeholder, onPress, value, onChangeText, editable = true, ref }: Props) => {
    return (
        <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
            <Image source={icons.search} className='size-5' resizeMode='contain' tintColor='#ab8bff' />
            <TextInput
                ref={ref}
                onPress={onPress}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor='#a8b5db'
                className='flex-1 ml-2 text-white'
                editable={editable}
                autoFocus={false}
            />
        </View>
    );
};

export default SearchBar;
