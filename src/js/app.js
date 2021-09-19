export default function healthSort(person) {
  return person.sort((a, b) => b.health - a.health);
}
