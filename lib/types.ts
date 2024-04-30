import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

import { mainLinks } from "./data";

export type NavName = (typeof mainlinks)[number]["name"];