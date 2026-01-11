import { useQuery } from 'react-query';

import { fetchProfileData } from 'services/github';

export function useProfileData() {
  return useQuery(['profile-data'], fetchProfileData);
}
