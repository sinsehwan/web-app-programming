export function simpleSort(arr : number[], order = "asc"): number[] {

    if(order === "asc") {
        for (let i = 0; i < arr.length - 1; i++) {
            for(let j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    const temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
    else{
        for (let i = 0; i < arr.length - 1; i++) {
            for(let j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] < arr[j + 1]) {
                    const temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
    return arr;
}