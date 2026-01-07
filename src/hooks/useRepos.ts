import { useQuery } from 'react-query';

import { fetchAllRepos } from 'services/github';

export function useAllRepos() {
  return useQuery(['all-repos', fetchAllRepos], () => fetchAllRepos());
}
