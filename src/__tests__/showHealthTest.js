import showHealth from '../showHealth';

test('check that the display of the life bar matches its value', () => {
  const hero = { name: 'Маг', health: 90 };
  const color = showHealth(hero);
  expect(color).toBe('healthy');
});

test('check that wounded heroes are displayed correctly', () => {
  const hero = { name: 'Мечник', health: 30 };
  const color = showHealth(hero);
  expect(color).toBe('wounded');
});

test('check that critical heroes are displayed correctly', () => {
  const hero = { name: 'Лучник', health: 5 };
  const color = showHealth(hero);
  expect(color).toBe('critical');
});

test('sort heroes by health', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const sortedHeroes = heroes.slice().sort((a, b) => b.health - a.health);

  expect(sortedHeroes).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});
