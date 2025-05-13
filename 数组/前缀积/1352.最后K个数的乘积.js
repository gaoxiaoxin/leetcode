var ProductOfNumbers = function () {
  this.prefix = [1];
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
  if (num === 0) {
    this.prefix = [1];
    return;
  }
  const len = this.prefix.length;
  this.prefix.push(this.prefix[len - 1] * num);
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
  const len = this.prefix.length;
  if (k > len - 1) return 0;
  return this.prefix[len - 1] / this.prefix[len - k - 1];
};

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
