import { useRoute } from '@react-navigation/native';

export default () => {
  const route = useRoute();

  return route?.params || {};
};
