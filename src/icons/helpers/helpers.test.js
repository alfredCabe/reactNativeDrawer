import { getIconName } from './helpers';

describe('getIconName', () => {
  it('should return a valid name for fill icons', () => {
    const result = getIconName({ iconFile: '/fill/ShoppingCart' });
    expect(result).toBe('shopping-cart');
  });
  it('should return a valid name for outline icons', () => {
    const result = getIconName({ iconFile: '/outline/ShoppingCartOutline' });
    expect(result).toBe('shopping-cart-outline');
  });

  it('should return a valid name for custom icons', () => {
    const result = getIconName({ iconFile: '/custom/fill/Trophy' });
    expect(result).toBe('bn-trophy-fill');
  });
});
