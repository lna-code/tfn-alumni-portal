export interface SingleRecordProps {
  isLoading: boolean;
  record: any;
  error: string;
  id?: string;
}

export const SingleRecordDefualtState = {
  error: '',
  isLoading: false,
  record: {},
  id: ''
};

export interface GetSingleDataSuccess {
  record: any;
}

export interface ApiFailurePayload {
  error: string;
  status?: string;
  list?: string;
}

export interface ApiSuccessPayload {
  record: any;
  message?: string;
}

//list types
export interface ApiRequestPayload {
  query: string;
  type?: string;
  reload?: {
    state: boolean;
    text: string;
  };
  list?: string;
  payload?: string;
  headerConfig?: object;
}

export interface ListStateProps {
  isLoading: boolean;
  records: any[];
  error: string;
  totalRecords: number;
}

export const ListDefaultState = {
  isLoading: false,
  records: [],
  error: '',
  totalRecords: 0
};

export interface ListSuccessPayload {
  records: any[];
  totalRecords: number;
}
