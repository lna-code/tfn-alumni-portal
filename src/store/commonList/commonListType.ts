import { ApiFailurePayload, ApiRequestPayload,ListStateProps, SingleRecordProps } from '../generalType';

export interface CommonlistStateProps {
  currentProfile: SingleRecordProps;
  profiles: ListStateProps;
  accounts: ListStateProps;
  cohorts: ListStateProps;
  events: ListStateProps;
  oppurtunities: ListStateProps;
  posts: ListStateProps;
}

export interface CommonListRequestPayload extends ApiRequestPayload {
  list: string;
}

export interface CommonListFailurePayload extends ApiFailurePayload {
  list: string;
}
