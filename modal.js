"use strict";
import { textAnimation } from "./projects/p1.js";
import { Score } from "./projects/p2.js";
import { Tags } from "./projects/p3.js";
import { KeyBoard } from "./projects/p4.js";

document.addEventListener("DOMContentLoaded", e=> {
  textAnimation();
  Score();
  Tags();
  KeyBoard();
})

