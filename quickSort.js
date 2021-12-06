
async function partition(ele,left,right){
    let i = left-1;
    ele[right].style.background = 'red';
	for(let j=left;j<right;j++){
        await wait(delay);
        ele[j].style.background = 'orange';
        if(parseInt(ele[j].style.height)<=parseInt(ele[right].style.height)){
            i++;
			await wait(delay);
            ele[i].style.background = 'green';
            await wait(delay);
            swap(ele[j],ele[i]);
            await wait(delay);
            ele[i].style.background = 'turquoise';
		}
        ele[j].style.background = 'turquoise';
        // console.log(i);
	}
    i++;
    await wait(delay);
	swap(ele[i],ele[right]);
    // console.log(i);
    ele[right].style.background = 'turquoise';
	return i;
}

function swap(a,b){
    // console.log('inside swap');
    let temp = a.style.height;
    a.style.height = b.style.height;
    b.style.height = temp;
    // a.style.background = 'turquoise';
    // b.style.background = 'turquoise';
}

async function quicksort(ele,left,right){
    // console.log('in quicksort',`l = ${left}, r = ${right}`, typeof(left),typeof(right));
    if(left<right){
        let pi = await partition(ele,left,right);
        // console.log(pi);
		await quicksort(ele,left,pi-1);
		await quicksort(ele,pi+1,right);
	}
}

let quickSortbtn = document.querySelector('.quicksort');

quickSortbtn.addEventListener('click',async function(){
    let ele = document.querySelectorAll('.barheight');
    let l = 0;
    let r = ele.length-1;
    await quicksort(ele,l,r);
});