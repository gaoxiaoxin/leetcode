function findContentChildren(g: number[], s: number[]): number {
    arraySort(g);
    arraySort(s);
    let result = 0;
    let index = 0;
    for (let i = 0; i < g.length; i++) {        
        if (index < g.length && s[index] >= g[i]) {
            result++;
            index++;
        }
    }
    return result;
};

function arraySort(array: number[]) {
    return array.sort((a,b) => b-a)
}

console.log(findContentChildren([1,2,3], [1,1] ));
