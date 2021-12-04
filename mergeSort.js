
async function merge(ele,left,mid,right){
    let n1 = mid-left+1;
    let n2 = right-mid;
    let Left = new Array(n1);
    let Right = new Array(n2);
    for(let i=0;i<n1;i++){
        await wait(delay);
        ele[left+i].style.background = "Red";
        Left[i] = ele[left+i].style.height;
    }
    for(let i=0;i<n2;i++){
        await wait(delay);
        ele[mid+1+i].style.background = "orange";
        Right[i] = ele[mid+1+i].style.height;
    }
    await wait(delay);
    let i=0,j=0,k=left;
    while(i<n1 && j<n2){
        await wait(delay);
        if(parseInt(Left[i]) <= parseInt(Right[j])){
            ele[k].style.background = 'turquoise';
            ele[k].style.height = Left[i];
            i++;
            k++;
        } else {
            ele[k].style.background = 'turquoise';
            ele[k].style.height = Right[j];
            j++;
            k++;
        }
    }
    while(i<n1){
        await wait(delay);
        ele[k].style.background = 'turquoise';
        ele[k].style.height = Left[i];
        i++;
        k++;
    }
    while(j<n2){
        await wait(delay);
        ele[k].style.background = 'turquoise';
        ele[k].style.height = Right[j];
        j++;
        k++;
    }
}

async function mergeSort(ele,left,right){
    if(left>=right){
        return;
    }
    const mid = Math.floor((left+right)/2);
    await mergeSort(ele,left,mid);
    await mergeSort(ele,mid+1,right);
    await merge(ele,left,mid,right);
}

let mergeSortbtn = document.querySelector('.mergesort');

mergeSortbtn.addEventListener('click',async function(){
    let ele = document.querySelectorAll('.barheight');
    let l = 0;
    let r = (ele.length)-1;
    await mergeSort(ele,l,r);
});