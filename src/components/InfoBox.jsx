import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import { Button } from "@mui/material";

export default function InfoBox({ title, weatherInfo }) {
  let session_URL={
    rain:"https://th.bing.com/th/id/R.22e7e8421934190549e071f61aa47401?rik=JmQMIUJj%2bInIvA&pid=ImgRaw&r=0",
    cold:"https://images.fineartamerica.com/images-medium-large-5/canadian-winter-landscape-don-johnston.jpg",
    hot:"https://www.treehugger.com/thmb/_lhgtC-6L7fxeumvXVjCIKRODlI=/1000x664/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__07__palm_trees_hot_sun-f8e20b86425b492f9d777d92db46db49.jpg",
    }
  console.log(weatherInfo);
  return (
    <>
      <h1 className="text-2xl font-bold text-center">{title}</h1>
      <div className="container justify-items-center pt-5">
        <Card sx={{ maxWidth: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image={weatherInfo.temp >20 ? session_URL.hot : session_URL.cold }
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <div className="flex flex-col">
                  <div className="text-sm p-1 ">{weatherInfo.date_time} </div>
                  <div className="city capitalize">
                    {weatherInfo.city}{" "}
                    <small className="text-sm">{weatherInfo.region}</small>
                    <span className="text-xs uppercase pl-1">
                      {weatherInfo.country}
                    </span>
                  </div>
                </div>
                <div className="flex p-2 gap-3 ">
                  <img src={weatherInfo.icon} alt="" />
                  <div className="pt-4">{weatherInfo.temp} &deg; C</div>

                  <div className="text-sm pt-4 font-bold">
                    <p>Feels Like {weatherInfo.feelslike} &deg; C</p>{" "}
                  </div>
                </div>
                <div className="grid grid-rows-1 grid-cols-6 text-wrap text-sm gap-3 capitalize text-center">
                  <div className="p-1">
                    <small>wind</small>
                    <br />
                    {weatherInfo.wind + " " + weatherInfo.wind_dir}
                  </div>
                  <div className="p-1">
                    <small>humidity</small>
                    <br />
                    {weatherInfo.humidity}
                  </div>
                  <div className="p-1">
                    <small>visibility</small>
                    <br />
                    {weatherInfo.visiblity + " KM"}
                  </div>
                  <div className="p-1">
                    <small> pressure</small>
                    <br />
                    {Math.ceil(weatherInfo.pressure)}
                  </div>
                  <div className="p-1">
                    <small>Dow point</small>
                    <br />
                    NA
                  </div>
                  <div className="p-1">
                    <small>Dow point</small>
                    <br />
                    NA
                  </div>
                </div>
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
              ></Typography>
            </CardContent>
           </CardActionArea>
        </Card>
      </div>
    </>
  );
}
