async function quickSort(arr, low, high) {
    if (low < high) {
        const pivotIndex = await partition(arr, low, high);
        await quickSort(arr, low, pivotIndex - 1);
        await quickSort(arr, pivotIndex + 1, high);
    }
}

async function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        await sleep(delay);
        setColor(j, COMPARE);
        setColor(high, COMPARE);
        await sleep(delay);
        
        if (arr[j] < pivot) {
            i++;
            await swap(arr, i, j);
        }
        
        setColor(j, UNSORTED);
        setColor(high, UNSORTED);
    }
    
    await swap(arr, i + 1, high);
    setColor(i + 1, SORTED);
    
    return i + 1;
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}