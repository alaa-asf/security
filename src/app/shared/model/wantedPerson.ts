import { incumbentForInSearch } from "./IncumbentForInSearchs";

export interface WantedPerson {
  firstName?: string;
  lastName?: string;
  fatherName?: string;
  motherName?: string;
  fullName?: string;
  surName?: string;
  nationalID?: string;
  militaryID?: string;
  bitrthPlaceDate?: string;
  square?: string;
  city?: string;
  town?: string;
  place?: string;
  address?: string;
  persistentAddress?: string;
  job?: string;
  observation?: string;
  phone?: string;
  mobile?: string;
  belongTo?: string;
  rowCreatedUserName?: string;
  rowCreatedDate?: Date;
  rowUpdatdedUserName?: string;
  rowUpdatedDate?: Date;
  nationality?: string;
  IncumbentForInSearchs?: incumbentForInSearch[]
}