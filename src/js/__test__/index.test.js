import healthSort from '../app';

test('Sort health status', () => {
  const person = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const received = healthSort(person);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(received).toEqual(expected);
});

test('Sort health status', () => {
  const person = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const received = healthSort(person);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(received).not.toBe(expected);
});

test('Sort health status', () => {
  const person = [
    { name: 'мечник', health: 0 },
    { name: 'маг', health: 80 },
    { name: 'лучник', health: -1 },
  ];
  const received = healthSort(person);
  const expected = [
    { name: 'маг', health: 80 },
    { name: 'мечник', health: 0 },
    { name: 'лучник', health: -1 },
  ];
  expect(received).toEqual(expected);
});
