// * @param {string} s - The input string.
//  * @returns {string} The longest palindromic substring.
//  */
function longestPalindrome(s) {
    if (!s || s.length === 1) {
        return s;
    }

    let start = 0;
    let end = 0;

    /**
     * Expands around the center of a potential palindrome.
     * @param {number} left - The left index of the center.
     * @param {number} right - The right index of the center.
     * @returns {[number, number]} - The start and end indices of the palindrome.
     */
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left -= 1;
            right += 1;
        }
        return [left + 1, right - 1];
    }

    for (let i = 0; i < s.length; i++) {
        const [l1, r1] = expandAroundCenter(i, i);
        const [l2, r2] = expandAroundCenter(i, i + 1);
        if (r1 - l1 > end - start) {
            start = l1;
            end = r1;
        }
        if (r2 - l2 > end - start) {
            start = l2;
            end = r2;
        }
    }
    return s.slice(start, end + 1);
}