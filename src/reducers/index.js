import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Take on Me", duration: "4:30" },
    { title: "Total Eclipse of Heart", duration: "3:24" },
    { title: "Beat It", duration: "4:40" },
    { title: "Love Shack", duration: "3:30" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.payload === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
