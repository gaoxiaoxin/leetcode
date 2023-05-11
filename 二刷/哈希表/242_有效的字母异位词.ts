function isAnagram(s: string, t: string): boolean {
    let map = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            let num = map.get(s[i]) as number
            map.set(s[i], ++num)
        } else {
            map.set(s[i], 1)
        }
        
    }
    for (let i = 0; i < t.length; i++){
        if (map.has(t[i])) {
            let num = map.get(t[i]) as number
            map.set(t[i], --num)
        } else {
            map.set(t[i], -1)
        }
    }

    
    return ![...map.values()].some(item => item !== 0)   
};


console.log(isAnagram("a","ab"));
