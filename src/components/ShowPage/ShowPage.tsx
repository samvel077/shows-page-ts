import React, { useEffect } from "react";
import classes from "./ShowPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getShow } from "../../redux/showsActonCreators";
import { RouteComponentProps } from "react-router";
import { AppStateType } from "../../redux/store";

// type MapDispatchPropsType = {
//   getShow: (showId: string | number) => void;
// };

// type MapStatePropsType = {
//   show: any;
// };

// type pathParamsType = {
//   id: string;
// };

// type OwnPropsType = {};

// type StateType = {
//   value: "";
//   match: any;
// };

// type PropsType = MapStatePropsType &
//   MapDispatchPropsType &
//   OwnPropsType &
//   RouteComponentProps<pathParamsType>;

// const ShowPage: React.FC<PropsType | StateType> = (
//   props: PropsType | StateType
// ) => {
const ShowPage: React.FC<RouteComponentProps> = (props) => {
  const dispatch = useDispatch();
  const { show } = useSelector((state: AppStateType) => state.showsReduser);
  // let pattern = /(<([^>]+)>)/gi;

  useEffect(() => {
    const params: any = props.match.params;
    const showId = params.id;
    dispatch(getShow(showId));
    // eslint-disable-next-line
  }, []);
  return (
    <div className={classes.main}>
      <div className={classes.imgBlock}>
        <img src={show?.image?.medium} alt="no_photo" />
      </div>
      <div className={classes.showBlock}>
        <h2> {show?.name}</h2>
        {/* <p>{show?.summary?.replace(pattern, "")}</p> */}

        <div dangerouslySetInnerHTML={{ __html: show?.summary }} />
      </div>
    </div>
  );
};

export default ShowPage;
