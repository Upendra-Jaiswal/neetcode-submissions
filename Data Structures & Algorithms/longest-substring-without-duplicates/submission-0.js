class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let i=0;
        let maxLen=0;
    const set = new Set()

    for(let j=0;j<s.length;j++){
        while(set.has(s[j])){

            set.delete(s[i])
            i++

        }

        set.add(s[j])
        maxLen=Math.max(maxLen,j-i+1)
    }




return maxLen

    }



}
