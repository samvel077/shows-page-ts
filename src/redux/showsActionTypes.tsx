export const LOADING = "SHOWES/LOADING";
export const FAILURE = "SHOWES/FAILURE";

export const GET_SHOWS_SUCCESS = "SHOWES/GET_SHOWES_SUCCESS";
export const COLLAPSE = "SHOWES/COLLAPSE";

export const STAR_CHANGER = "SHOWES/STAR_CHANGER";
export const DELETE_SHOW_SUCCESS = "SHOWES/DELETE_SHOW_SUCCESS";
export const GET_SHOW_SUCCESS = "SHOWES/GET_SHOW_SUCCESS";
export const DELETE_SHOWS_SUCCESS = "SHOWS/DELETE_SHOWs_SUCCESS";

interface ILOADING {
  type: typeof LOADING;
}

interface IFAILURE {
  type: typeof FAILURE;
}

interface IGETSHOWSSUCCESS {
  type: typeof GET_SHOWS_SUCCESS;
  payload: Array<any>;
}

type CollapseType = {
  toggleCollapse: string;
  type: string;
  
};

interface ICOLLAPSE {
  type: typeof COLLAPSE;
  payload: CollapseType;
}

interface ISTARCHANGER {
  type: typeof STAR_CHANGER;
  payload: string;
}

interface IDELETESHOWSUCCESS {
  type: typeof DELETE_SHOW_SUCCESS;
  payload: number;
}

interface IGETSHOWSUCCESS {
  type: typeof GET_SHOW_SUCCESS;
  payload: any;
}

interface IDELETESHOWSSUCCESS {
  type: typeof DELETE_SHOWS_SUCCESS;
  payload: string;
}

export type ShowsTypes =
  | ILOADING
  | IFAILURE
  | IGETSHOWSSUCCESS
  | ICOLLAPSE
  | ISTARCHANGER
  | IDELETESHOWSUCCESS
  | IGETSHOWSUCCESS
  | IDELETESHOWSSUCCESS;
