# Samyati Sarthi
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

