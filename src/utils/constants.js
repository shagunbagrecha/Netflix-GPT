// Constants file to store static values
// export const LOGO =
//   "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-2b10-79d7-bd01-e93db54ccc2d/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";

export const USER_AVATAR =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

export const BACKDROP =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/DE-en-20250915-TRIFECTA-perspective_3b5a5cc2-80cb-4c14-b36b-f0ea8afce9a1_small.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";

export const SUPPORTED_LANGUAGES = [
  { id: "en", name: "English", flag: "🇬🇧" },
  { id: "de", name: "German", flag: "🇩🇪" },
  { id: "fr", name: "French", flag: "🇫🇷" },
];

export const OPEN_AI_KEY = process.env.REACT_APP_OPENAI_KEY;
