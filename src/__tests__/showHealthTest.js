import showHealth from '../showHealth';

test('Check that healthy heroes are displayed correctly', () => {
  const hero = { name: 'Маг', health: 90 };
  const color = showHealth(hero);
  expect(color).toBe('healthy');
});

test('Check that wounded heroes are displayed correctly', () => {
  const hero = { name: 'Мечник', health: 30 };
  const color = showHealth(hero);
  expect(color).toBe('wounded');
});

test('Check that critical heroes are displayed correctly', () => {
  const hero = { name: 'Лучник', health: 5 };
  const color = showHealth(hero);
  expect(color).toBe('critical');
});
