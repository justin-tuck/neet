const binomial_coefficient = (n, m) => {
  let bc = [];
  for (let i = 0; i <= n; i++) bc.push([]);

  for (let i = 0; i <= n; i++) bc[i][0] = 1;
  for (let i = 0; i <= n; i++) bc[i][i] = 1;

  for (let i = 1; i <= n; i++)
    for (let j = 1; j < i; j++) bc[i][j] = bc[i - 1][j - 1] + bc[i - 1][j];

  return bc[n][m];
};

console.log(`${binomial_coefficient(52, 7)}`);
