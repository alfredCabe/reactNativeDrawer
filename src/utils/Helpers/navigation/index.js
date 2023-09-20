export const filterMenuItems = (items, permissions) => {
  return items.reduce((acc, item) => {
    const newItem = item;

    if (item.screens) {
      newItem.screens = filterMenuItems(item.screens, permissions);
    }
    const isAuthorized = item.permissions.every((requieredPermission) =>
      permissions.includes(requieredPermission)
    );

    // User has permissions
    if (isAuthorized || item.permissions.length === 0) {
      acc.push(newItem);
    }

    return acc;
  }, []);
};

export default filterMenuItems;
