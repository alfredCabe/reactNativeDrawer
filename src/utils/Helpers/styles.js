import { Dimensions } from 'react-native';

export const $entireScreenWidth = Dimensions.get('window').width;
export const $rem = ($entireScreenWidth / 380) * 16;

export const remsInt = (inPixels) => Math.floor(inPixels * $rem);
export const rems = (inPixels) => `${remsInt(inPixels)}px`;
