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

const postData = async (
  url: string,
  token: string,
  data?: Record<string, unknown>
): Promise<Array<User>> => {
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
