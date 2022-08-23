export type FilterInput = {
  eq?: string | undefined;
  ne?: string | undefined;
  in?: string[] | [];
  nin?: string[] | [];
  regex?: string | undefined;
  glob?: string | undefined;
};
