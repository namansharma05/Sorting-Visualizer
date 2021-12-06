async function insertionsort(ele){
    await wait(delay);
    for(let i=0;i<ele.length;i++){
        await wait(delay);
        ele[i].style.background = 'red';
        for(let j=i+1;j<ele.length;j++){
            await wait(delay);
            ele[j].style.background = 'orange';
            if(parseInt(ele[i].style.height)>parseInt(ele[j].style.height)){
                await wait(delay);
                swap(ele[i],ele[j]);
            }
            await wait(delay);
            ele[j].style.background = 'turquoise';
        }
        await wait(delay);
        ele[i].style.background = 'turquoise';
    }
}
function swap(ele1,ele2){
    let temp = ele1.style.height;
    ele1.style.height = ele2.style.heightl
    ele2.style.height = temp;
    // ele1.style.background = 'turquoise';
    // ele2.style.background = 'turquoise';
}
let insertSortbtn = document.querySelector(".insertionsort");
insertSortbtn.addEventListener('click',async function(){
    let ele = document.querySelectorAll(".barheight");
    await insertionsort(ele);
});