function pick(pool: string[]): string {
  return pool[Math.floor(Math.random() * pool.length)];
}

const CLOSE_LINES = [
  "whoa - are you trying to kill me?",
  "404: exit not found.",
  "nice try. this tab survives.",
  "i live here now. we're roommates.",
  "that button is purely decorative. like my sleep schedule.",
];

const MINIMIZE_LINES = [
  "minimizing... to absolutely nowhere.",
  "there's no taskbar down here, friend.",
  "*shrinks dramatically, then gives up*",
  "this window has main-character energy - no minimizing.",
];

const ZOOM_LINES = [
  "already at 100% main-character energy.",
  "can't get bigger than this ego.",
  "zooming... into the void.",
  "this is as big as my ambitions get. for now.",
];

const SUDO_LINES = [
  "permission denied: nice try",
  "permission denied: this incident will not be reported",
  "permission denied: root privileges belong to root",
  "permission denied: have you tried asking nicely?",
];

const EXIT_LINES = [
  "you can't exit a portfolio - you can close the tab though",
  "there is no spoon. there is also no exit.",
];

const LIGHT_MODE_LINES = [
  "understood. applying sunscreen.",
  "my eyes! the goggles do nothing!",
  "flashbang deployed successfully.",
  "who hurt you?",
  "bold choice. respect.",
  "engaging corporate hellscape mode.",
];

const DARK_MODE_LINES = [
  "ahh - back to the shadows where we belong.",
  "the void welcomes you home.",
  "sanity: restored.",
  "good choice. my retinas thank you.",
  "returning to my natural habitat.",
];

export function closeLine(): string {
  return pick(CLOSE_LINES);
}
export function minimizeLine(): string {
  return pick(MINIMIZE_LINES);
}
export function zoomLine(): string {
  return pick(ZOOM_LINES);
}
export function sudoLine(): string {
  return pick(SUDO_LINES);
}
export function exitLine(): string {
  return pick(EXIT_LINES);
}
export function lightModeLine(): string {
  return pick(LIGHT_MODE_LINES);
}
export function darkModeLine(): string {
  return pick(DARK_MODE_LINES);
}
