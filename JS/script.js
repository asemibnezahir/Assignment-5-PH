
// Heart Icon Clicking Function
const hearts = document.getElementsByClassName('card-awesome');
for(let heart of hearts)
{
    heart.addEventListener('click',function(){
        heart.classList.add('text-red-600');
        const heartNumber = parseInt(document.getElementById('target-heart').innerText);
        const finalHeart = heartNumber+1;
        document.getElementById('target-heart').innerText = finalHeart;
        setTimeout(() => {
            heart.classList.remove('text-red-600');
        }, 200);
    })
}

