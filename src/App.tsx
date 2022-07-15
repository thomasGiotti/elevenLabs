import React, { useEffect, useState } from "react";

import "./App.css";
import DetailComponent from "./components/DetailComponent";
import ImageComponents from "./components/ImageComponent";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import fr from "date-fns/locale/fr";
import axios from "axios";

function App() {
  const [data, setData] = useState<any>();
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(today);
  const dateFormated = selectedDay?.toISOString().split("T")[0];
  const fetchData = async (date?: string) => {
    const image = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=EVlwI0fs1v9Ess0oZUmQl46reiK8ODDDDWR9d2G7&date=${date}`
    );
    return image.data;
  };
  useEffect(() => {
    fetchData(dateFormated).then((res) => {
      setData(res);
    });
  }, [dateFormated, selectedDay]);
  return (
    <main className="app">
      <div className="flexContainer">
        <div className="imageContainer">
          <ImageComponents
            imageSource={data?.url}
            imageDescription={data?.explanation}
          />
        </div>
        <div className="detailsContainer">
          <DayPicker
            locale={fr}
            mode="single"
            selected={selectedDay}
            onSelect={setSelectedDay}
          />
          <DetailComponent
            title={data?.title}
            description={data?.explanation}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
