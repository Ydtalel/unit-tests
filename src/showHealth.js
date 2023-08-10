export default function showHealth(heroObj) {
  let color;
  if (heroObj.health > 50) {
    color = 'healthy';
  } else if (heroObj.health >= 16 && heroObj.health <= 50) {
    color = 'wounded';
  } else {
    color = 'critical';
  }
  return color;
}
