import { User } from "../types/models";

export const getUserFullName = ({ name }: User) =>
  `${name.title}. ${name.first} ${name.last}`;
