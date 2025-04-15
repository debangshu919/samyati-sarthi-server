# Samyati Sarthi [![Netlify Status](https://api.netlify.com/api/v1/badges/d15d80fb-b0e8-4c3c-9905-11a39669fdbe/deploy-status)](https://app.netlify.com/sites/samyati-sarthi/deploys)
This repo serves as the API endpoint of the project.

## Endpoints
> ### 1. **`/api/chatbot`**
#### sample API request
> Params
```sh
{
prompt: "las vegas"
}
```

#### sample API response
```sh
{
    "statusCode": 200,
    "status": "success",
    "message": "Data fetched successfully",
    "request": {
        "prompt": "las vegas"
    },
    "response": "Las Vegas is a world-famous destination known for its vibrant nightlife, entertainment options, and iconic landmarks like the Strip, the High Roller observation wheel, and the iconic Bellagio fountains. Visitors can also explore the surrounding Grand Canyon, Hoover Dam, and other natural wonders."
}
```

> ### 2. **`/api/weather`**
#### sample API request
> Params
```sh
{
city: "tokyo"
}
```

#### sample API response
```sh
{
    "statusCode": 200,
    "status": "success",
    "message": "Data fetched successfully",
    "request": {
        "city": "Tokyo"
    },
    "response": {
        "coord": {
            "lon": 139.6917,
            "lat": 35.6895
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 20,
            "feels_like": 18.81,
            "temp_min": 19.03,
            "temp_max": 21.45,
            "pressure": 990,
            "humidity": 29,
            "sea_level": 990,
            "grnd_level": 987
        },
        "visibility": 10000,
        "wind": {
            "speed": 12.86,
            "deg": 200,
            "gust": 19.03
        },
        "clouds": {
            "all": 20
        },
        "dt": 1744696371,
        "sys": {
            "type": 2,
            "id": 268395,
            "country": "JP",
            "sunrise": 1744661325,
            "sunset": 1744708409
        },
        "timezone": 32400,
        "id": 1850144,
        "name": "Tokyo",
        "cod": 200
    }
}
```
