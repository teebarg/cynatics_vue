export const CookieName = Object.freeze({
  TOKEN: "token"
});

export const Roles = Object.freeze({
  SUPER_ADMIN: "Super Admin",
  ADMIN: "Admin",
  USER: "User"
});

export const STATUS = Object.freeze({
  WON: "won",
  LOSS: "loss",
  VOID: "void",
  ACTIVE: "active"
});

export const ApiEndPoint = Object.freeze({
  AUTH: "/login",
  HOME: "/home",
  LOGOUT: "/logout",
  REGISTER: "/register",
  COUNTRY: "/country",
  CLUB: "/club",
  GAME: "/game",
  GAME_ITEM: "/game_item",
  GAME_STATUS: "/game_status",
  BOOKMAKER: "/bookmaker",
  BOOKMAKER_GAME: "/bookmaker_game",
  ODD: "/odd",
  COMPETITION: "/competition",
  ROLE: "/role",
  PERMISSION: "/permission",
  MARKET: "/market",
  IMAGE: "/image",
  USER: "/user",
  ADSLOT: "/ad_slot",
  ADVERT: "/advert",
});

export const Layout = Object.freeze({
  ADMIN: "adminv2"
});

export const validatePassword = target => (rule, value, callback) => {
  if (value === "") {
    callback(new Error("Please input the password again"));
  } else if (value !== target.form.password) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};

export const Rules = Object.freeze({
  NAME: (name = "Name", required = true, trigger = "blur") => ({
    required: required,
    message: "Please enter a " + name,
    trigger: trigger
  }),
  SELECT: (name = "Date", trigger = "blur") => ({
    required: true,
    message: "Please select a " + name,
    trigger: trigger
  }),
  ALIAS: {
    required: true,
    message: "Please enter an Alias",
    trigger: "blur"
  },
  EMAIL: (required = true) => [
    {
      required: required,
      message: "Please enter you email address",
      trigger: "blur"
    },
    {
      type: "email",
      message: "Please enter a valid email address",
      trigger: "blur"
    }
  ],
  PASSWORD: (required = true, trigger = "blur") => [
    {
      required: required,
      message: "Please input the password",
      trigger: "blur"
    },
    { min: 8, message: "Minimum of 8", trigger: "change" }
  ],
  PASSWORD_CONFIRMATION: func => [
    { validator: func, trigger: "blur" },
    { required: true }
  ]
});

export const Route = Object.freeze({
  DASHBOARD: {
    name: "Dashboard",
    fa: "fa fa-tachometer-alt",
    children: [
      {
        name: "Dashboard",
        to: "/admin"
      }
    ]
  },
  ACCESS: {
    name: "Access",
    fa: "fa fa-tachometer-alt",
    children: [
      {
        name: "Users",
        to: "/admin/access/user"
      },
      {
        name: "Roles",
        to: "/admin/access/role"
      },
      {
        name: "Permission",
        to: "/admin/access/permission"
      }
    ]
  },
  ADVERT: {
    name: "Ads Management",
    fa: "fa fa-tachometer-alt",
    children: [
      {
        name: "Advert",
        to: "/admin/ads/advert"
      },
      {
        name: "AdSlot",
        to: "/admin/ads/slot"
      }
    ]
  },
  MODEL: {
    name: "Model",
    fa: "fa fa-tachometer-alt",
    children: [
      {
        name: "Club",
        to: "/admin/club"
      },
      {
        name: "Country",
        to: "/admin/country"
      },
      {
        name: "Competition",
        to: "/admin/competition"
      },
      {
        name: "Market",
        to: "/admin/market"
      }
    ]
  },
  BET: {
    name: "Bet Center",
    fa: "far fa-gem",
    children: [
      {
        name: "Bet Games",
        to: "/admin/bets/game"
      },
      {
        name: "Bet Matches",
        to: "/admin/bets/match"
      },
      {
        name: "Bookmakers",
        to: "/admin/bets/bookmaker"
      },
      {
        name: "Odds",
        to: "/admin/bets/odd"
      }
    ]
  }
});
