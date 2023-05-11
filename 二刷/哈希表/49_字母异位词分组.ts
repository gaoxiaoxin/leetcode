function groupAnagrams(strs: string[]): string[][] {
    let result: string[][] = [];
    let map = new Map<string, string[]>();
    for (let i = 0; i < strs.length; i++) {
        let str = getSortStr(strs[i]);
        if (map.has(str)) {
            map.get(str)?.push(strs[i]);
        } else {
            map.set(str, [strs[i]])
        }
    }
    return [...map.values()];
};

function getSortStr(str: string):string {
    return str.split("").sort().join("");
}

console.log(groupAnagrams(["cab","tin","pew","duh","may","ill","buy","bar","max","doc"]));


console.log(['b', 'c', 'a'].sort());
