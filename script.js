const api = {
    key: 'a6935facd91fbdad0fd8f78b67f23702',
    baseUrl: 'https://api.openweathermap.org/data/2.5/'
},
    searchBox = document.querySelector('.search-box');
    
    searchBox.addEventListener('keypress', setQuery )

    function setQuery(e){
        if(e.keyCode === 13){
            getResult(searchBox.value)
            console.log(searchBox.value)
            searchBox.value = ''
        }
    }
    let now = new Date();

        const date = document.querySelector('.date');
        date.innerHTML = dateBuilder(now);

    function getResult(query){
        fetch(`${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then((weather)=>{
                return weather.json();
            })
            .then(displayResult)
    }

    function displayResult(weather){
        console.log(weather)
        const city = document.querySelector('.city')
        city.innerHTML = `${weather.name},${weather.sys.country}`
        const temp = document.querySelector('.temp');
        temp.innerHTML = `${Math.floor(weather.main.temp)}°C`
        console.log(new Date());
        const air = document.querySelector('.weather'),
            low = document.querySelector('.hi-low');
        air.innerHTML = weather.weather[0].main;
        low.innerHTML = `${weather.main.temp_min}°C / ${weather.main.temp_max}°c`
    }

    function dateBuilder(a){
        const days = [
                'Sunday',
                'Monday',
                'Tursday',
                'Wednesday',
                'Thoursday',
                'Friday',
                'Saturday'
            ],
            months = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'Oktober',
                'November',
                'December'
            ];
        const day = days[a.getDay()],
            month = months[a.getMonth()],
            year = a.getFullYear(),
            date = a.getDate();

        return `${day} ${date} ${month} ${year}`
    }

    const arr = ['UMAr', 'AbduraHmon', 'AbuBAkr', 'ZUbayr'];
    const typeOfNum = arr.filter((e)=>{
        return e.length <= 6
    })
    console.log(typeOfNum)
    const ab = arr.map(item =>{
        return item.toLowerCase()
    })
    console.log(ab)
