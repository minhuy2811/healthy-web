import React from "react";
import Grid from "@mui/material/Grid";

import myRecommend1 from "../../assets/images/recommend/MyRecommend-1.jpg";
import myRecommend2 from "../../assets/images/recommend/MyRecommend-2.jpg";
import myRecommend3 from "../../assets/images/recommend/MyRecommend-3.jpg";
import RecordItem from "../../components/RecordItem";

export default function RecordList() {
  const recommends = [
    {
      image: myRecommend1,
      title: "body record",
      subTitle: "自分のカラダの記録",
    },
    {
      image: myRecommend2,
      title: "my excercise",
      subTitle: "自分の運動の記録",
    },
    { image: myRecommend3, title: "my diary", subTitle: "自分の日記" },
  ];
  return (
    <Grid container spacing={3}>
      {recommends.map((record, index) => {
        const key = index;
        return (
          <Grid item xs={12} md={4} key={key}>
            <RecordItem
              image={record.image}
              title={record.title}
              subTitle={record.subTitle}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
