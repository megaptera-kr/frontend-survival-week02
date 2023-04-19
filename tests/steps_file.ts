module.exports = function test() {
  return actor({
    async counterTest() {
      this.amOnPage('/');

      this.see('Count: 0');

      this.click('+1');

      this.see('Count: 1');

      this.click('+2');

      this.see('Count: 3');

      this.click('+4');

      this.see('Count: 7');

      this.click('+5');

      this.see('Count: 12');

      this.click('+3');

      this.see('Count: 15');

      this.click('+5');

      this.see('Count: 20');

      this.click('+3');

      this.see('Count: 23');

      this.click('+1');

      this.see('Count: 24');

      this.click('+2');

      this.see('Count: 26');
    },
  });
};
