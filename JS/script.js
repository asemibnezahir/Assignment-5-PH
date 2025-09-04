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

// Call Button Clicking Function
const calls = document.getElementsByClassName('js-call');
for(let call of calls)
{
    call.addEventListener('click',function(){
        const coinNumber = parseInt(document.getElementById('target-coin').innerText);
        // Handeling coin less than 20 case
        if(coinNumber<20)
        {
            alert('Insuffient coin in your account to call, At least 20 Coin needed');
            return;
        }

        // Coin Reducing
        const finalCoin = coinNumber - 20 ;
        document.getElementById('target-coin').innerText = finalCoin;

        // Alert Message
        const serviceName = call.parentNode.parentNode.getElementsByTagName('h1')[0].innerText;
        const serviceNumber = call.parentNode.parentNode.getElementsByTagName('h2')[0].innerText;
        alert('Calling ' + serviceName + ' - ' + serviceNumber + '......');
        
        // Creating object for history
        const data = {
            name: serviceName,
            number: serviceNumber,
            date: new Date().toLocaleTimeString()
        }

        // Completing the history adding
        const mainContainer = document.getElementById('main-container');
        const historyContainer = document.createElement('div');
        historyContainer.classList.add('w-[300px]', 'mx-auto' ,'for-removing');
        historyContainer.innerHTML = `
        <div class="single-history-card flex justify-between items-center p-[12px] bg-[#e7e3e3] rounded-[8px] mb-[10px]">
            <div class="info">
                <h3 class="inter-font font-semibold text-[14px]">${data.name}</h3>
                <h5 class="hind-madurai-font font-normal text-[14px]">${data.number}</h5>
            </div>
            <div class="time">
                <h5 class="hind-madurai-font font-normal text-[12px]">${data.date}</h5>
            </div>
        </div>`
        mainContainer.appendChild(historyContainer);
    })
}


// History Section Clearing Feature
const clear = document.getElementById('clear-btn');
clear.addEventListener('click',function(){
    const historys = document.querySelectorAll('.for-removing');
    for(let history of historys)
    {
        history.remove();
    }
})