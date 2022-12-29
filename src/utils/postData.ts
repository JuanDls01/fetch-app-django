type Organization = {
  id: string;
  plan_contract?: number;
  name: string;
  is_active: boolean;
};
type Group = {
  id: number;
  name_group: string;
};
export type User = {
  id: number;
  first_name: string;
  last_name: string;
  organization: Organization;
  group: Group;
  email: string;
  is_staff: string;
};

type ResponsePostDataType = {
  count: number | null;
  next: number | null;
  previous: number | null;
  results: User[];
};

const postData = async (
  url: string,
  token: string,
  data?: Record<string, unknown>
): Promise<ResponsePostDataType> => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: token,
    },
    body: JSON.stringify(data),
    mode: "cors",
  });

  return response.json();
};

export default postData;
