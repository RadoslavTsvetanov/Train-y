import { locationData } from "./../../types/location";
import type { TimeQueriableDTO } from "../../DTO/partials/timequeriable";
import type { id } from "../../types/id";
import type { VPromise } from "../../types/Promises/vpromise";
import type { TimeStampData } from "../../types/timstampData";
import type { TODO } from "../../types/todo";
import type { UnknownRecord } from "../../../../../packages/better-standard-library/src/types/unknwonString";

export interface IUser<
  T extends { id: id; location: locationData } = {
    id: id;
    location: locationData;
  }
> extends TimeQueriableDTO<T> {}
