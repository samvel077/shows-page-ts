import React, { useEffect } from "react";
import classes from "./ShowPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getShow } from "../../redux/showsActonCreators";

const ShowPage = (props) => {
  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.showsReduser);
  let pattern = /(<([^>]+)>)/gi;

  useEffect(() => {
    const showId = props.match.params.id;
    dispatch(getShow(showId));
    // eslint-disable-next-line
  }, []);
  return (
    <div className={classes.main}>
      <div className={classes.imgBlock}>
        <img src={show?.image.medium} alt="no_photo" />
      </div>
      <div className={classes.showBlock}>
        <h2> {show?.name}</h2>
        <p>{show?.summary.replace(pattern, "")}</p>
      </div>
    </div>
  );
};

export default ShowPage;
