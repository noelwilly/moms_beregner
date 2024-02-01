const beloeb = 2000;

beregn(beloeb);
function beregn(beloeb, moms = 25) {
  console.log(beloeb + (beloeb * moms) / 100);
}
